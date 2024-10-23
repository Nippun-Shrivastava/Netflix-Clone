import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Yeh line add karein
    port: 5173, // Yadi aapko different port use karna hai toh yahaan change karein
  },
})
