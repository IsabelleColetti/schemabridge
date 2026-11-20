import react from '@vitejs/plugin-react'
import tailwincss from '@tailwincss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwincss()],
})
