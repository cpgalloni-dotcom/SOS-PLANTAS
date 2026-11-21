import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Permite desplegar en GitHub Pages, Vercel o cualquier subdominio sin error 404
  server: {
    port: 3000,
    host: true, // Habilitar acceso desde celulares y red Wi-Fi
    open: false,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.mp4', '**/android-native/**', '**/.git/**']
    }
  }
})
