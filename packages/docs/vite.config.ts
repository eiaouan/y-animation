// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'
function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
  }

export default defineConfig({
    resolve: {
        alias: {
          '@': _resolve('docs/docs'),
        },
      },
})