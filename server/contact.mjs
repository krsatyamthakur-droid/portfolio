import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'

async function forwardContact(send, recipient, contact, origin) {
  const { name, email, subject, message } = contact

  try {
    const response = await send(`https://formsubmit.co/ajax/${recipient}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(origin && { Referer: `${origin}/` }),
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `Portfolio contact: ${subject}`,
        _replyto: email,
        _template: 'table',
      }),
      signal: AbortSignal.timeout(5000),
    })
    const result = await response.json()
    if (/\b(?:activate|activation|confirm|verification)\b/i.test(result?.message ?? '')) return 'activation_required'
    if (response.ok && (result?.success === true || result?.success === 'true')) return 'forwarded'
  } catch {
    return 'failed'
  }

  return 'failed'
}

export function createContactApp(env = process.env, { Client = MongoClient, send = fetch } = {}) {
  const app = express()
  app.disable('x-powered-by')

  const uri = env.MONGODB_URI?.trim()
  const database = env.MONGODB_DB?.trim() || 'portfolio'
  const recipient = env.CONTACT_EMAIL?.trim() || env.VITE_CONTACT_EMAIL?.trim() || 'krsatyamthakur@gmail.com'
  let client

  app.post('/api/contact', express.json({ limit: '64kb' }), async (request, response) => {
    const body = request.body
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const subject = (typeof body?.subject === 'string' ? body.subject.replace(/\s+/g, ' ').trim() : '') || 'General inquiry'
    const message = typeof body?.message === 'string' ? body.message.trim() : ''
    const id = typeof body?.submissionId === 'string' ? body.submissionId : ''

    if (!/^[0-9a-f]{32}$/.test(id) || body?._honey || !name || name.length > 120 || !message || message.length > 6000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || subject.length > 160) {
      return response.status(400).json({ message: 'Enter a valid name, email address, and message.' })
    }

    if (!uri) return response.status(503).json({ message: 'Contact storage is unavailable. Please try again or email me directly.' })

    const contact = { name, email, subject, message }
    let collection
    let saved

    try {
      client ??= new Client(uri, {
        serverApi: ServerApiVersion.v1,
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 3000,
        waitQueueTimeoutMS: 2500,
        socketTimeoutMS: 5000,
        writeConcern: { w: 'majority', wtimeoutMS: 3000 },
      })
      collection = client.db(database).collection('contact_messages')
      saved = await collection.updateOne(
        { _id: id, ...contact },
        { $setOnInsert: { createdAt: new Date(), emailStatus: 'pending' } },
        { upsert: true, maxTimeMS: 3000 },
      )
      if (!saved.acknowledged) throw new Error('Contact write was not acknowledged')
    } catch (error) {
      if (error?.code === 11000) return response.status(409).json({ message: 'This submission conflicts with an earlier message. Edit your message and try again.' })
      console.error('Unable to save a portfolio contact message.')
      return response.status(503).json({ message: 'Your message couldn’t be saved. Please try again or email me directly.' })
    }

    if (saved.upsertedCount === 1) {
      const emailStatus = await forwardContact(send, recipient, contact, request.get('origin'))
      try {
        await collection.updateOne({ _id: id }, { $set: { emailStatus } }, { maxTimeMS: 3000 })
      } catch {
        console.warn('Contact message was saved, but its email status could not be recorded.')
      }
    }

    return response.status(saved.upsertedCount === 1 ? 201 : 200).json({ success: true })
  })

  app.all('/api/contact', (_request, response) => response.set('Allow', 'POST').status(405).json({ message: 'Use POST to submit a contact message.' }))
  app.use('/api/contact', (error, _request, response, _next) => {
    const status = error.status === 413 ? 413 : 400
    return response.status(status).json({ message: status === 413 ? 'Your message is too long.' : 'Your message could not be read.' })
  })

  return { app, close: async () => client?.close() }
}
