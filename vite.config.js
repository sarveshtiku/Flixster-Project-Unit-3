// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // already set by --host
    // allow your Render domain (and any subdomain of onrender.com if you like)
    allowedHosts: [
      'localhost',
      'flixster-project-unit-3.onrender.com'
    ]
  }
})
