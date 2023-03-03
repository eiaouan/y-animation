// rollup.config.js
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import { nodeResolve } from '@rollup/plugin-node-resolve';
const config = {
  input: "./index.js", // 必须，入口文件
  output: { // 必须，输出文件 (如果要输出多个，可以是一个数组)
    exports: "named", // 输出多个文件
    globals: {
      vue: "Vue" // 告诉rollup全局变量Vue即是vue
    }
  },
  plugins: [ // 引入的插件在这里配置
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "**/node_modules/**"
    }),
    commonjs(),
    image(),
    nodeResolve()
  ]
}

export default config