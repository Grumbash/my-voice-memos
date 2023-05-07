import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components":  path.resolve(__dirname, "./src/components"),
      "@hooks":  path.resolve(__dirname, "./src/hooks"),
      "@types":  path.resolve(__dirname, "./src/types"),
    },
  },
  base: '/my-voice-memos/',
})
