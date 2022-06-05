import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/balance.ts',
      formats: ['umd'],
      fileName: () => 'balance.js',
      name: 'Nlvi'
    },
    outDir: '../lib/nlvi'
  },
})
