import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import type { Plugin, PreviewServer, ViteDevServer } from 'vite'
import { createContactApp } from './server/contact.mjs'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['MONGODB_', 'CONTACT_EMAIL', 'VITE_CONTACT_EMAIL'])
  const mountContact = (server: ViteDevServer | PreviewServer) => {
    const { app, close } = createContactApp(env)
    server.middlewares.use(app)
    server.httpServer?.once('close', () => void close())
  }
  const contact: Plugin = {
    name: 'portfolio-contact',
    configureServer: mountContact,
    configurePreviewServer: mountContact,
  }

  return { publicDir: 'images/public', plugins: [react(), contact] }
})
