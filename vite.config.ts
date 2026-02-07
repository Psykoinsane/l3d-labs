import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // TEM de ser apenas uma barra para domínios próprios (.pt)
})
