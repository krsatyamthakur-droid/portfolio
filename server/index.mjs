import express from 'express'
import { existsSync } from 'node:fs'
import { loadEnvFile } from 'node:process'
import { fileURLToPath } from 'node:url'
import { createContactApp } from './contact.mjs'

const localEnv = fileURLToPath(new URL('../.env.local', import.meta.url))
if (existsSync(localEnv)) loadEnvFile(localEnv)

const { app, close } = createContactApp()
app.use(express.static(fileURLToPath(new URL('../dist', import.meta.url))))

const host = process.env.HOST || '127.0.0.1'
const port = Number(process.env.PORT || 4173)
const server = app.listen(port, host, () => console.log(`Portfolio available at http://${host}:${port}`))

server.once('close', () => void close())
