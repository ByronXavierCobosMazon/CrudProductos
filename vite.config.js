import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esto permite que puedas desplegar la app en un localhost
  server: {
      host: true
  }
})
