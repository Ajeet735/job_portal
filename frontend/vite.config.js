import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true, // opens browser
  },
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/job-portal/' : '/',
})
