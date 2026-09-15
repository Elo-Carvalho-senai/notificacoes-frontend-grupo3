import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Importar aqui

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // 2. Adicionar aqui
  ],
})
