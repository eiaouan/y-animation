import esbuild from 'esbuild'
export default {
  input: 'src/main.ts',
  output: {
    file: 'bundle.js',
    format: 'mjs'
  },
  plugins: [
    esbuild()
  ]
}
