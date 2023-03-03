import { defineConfig } from 'vite'
import path from 'path'
import image from "@rollup/plugin-image"
import scss from 'rollup-plugin-scss'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.scss'),
        // nested: path.resolve(__dirname, 'index2.html')
      },
      plugins: [
          image(),
          scss({
            fileName: 'bundle.css'
          })
      ]
    }
  }
})