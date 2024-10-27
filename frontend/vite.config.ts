import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from outside the container
    port: 5173,      // Default port Vite uses
    strictPort: true, // Prevent Vite from trying to use another port if 5173 is taken
  },
});
