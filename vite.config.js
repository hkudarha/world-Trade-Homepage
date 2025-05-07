import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    port: 6041,
  },
  preview: {
    port: 6041,
  }
})
