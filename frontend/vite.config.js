import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // use '/' since deploying to root path
  server: {
    open: true,
  },
});
