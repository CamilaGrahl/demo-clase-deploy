import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/demo-clase-deploy/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
