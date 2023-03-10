import { defineConfig } from 'vite'
import path from 'path'
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.ts'),
        // nested: path.resolve(__dirname, 'index2.html')
      },
      plugins: [
        vue(),
          babel({
            exclude: "**/node_modules/**"
          }),
          commonjs(),
          image(),
          nodeResolve(),
          postcss(),
          scss()
      ]
    },
    
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/var.scss";'
      }
    }
  },
})