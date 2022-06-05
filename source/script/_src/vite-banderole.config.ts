import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/banderole.ts',
      formats: ['umd'],
      fileName: () => 'banderole.js',
      name: 'Nlvi'
    },
    outDir: '../lib/nlvi'
  }
})
