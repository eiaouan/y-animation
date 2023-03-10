
// const path = require('path');

// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   globals: {
//     window: true,
//     document: true,
//   },
//   settings: {
//     'import/resolver': {
//       alias: {
//         map: [
//           ['@', path.resolve(__dirname, './src')],
//         ],
//         extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
//       },
//     },
//   },
//   overrides: [
//     {
//       files: ['*.js', '*.jsx'],
//       parser: '@babel/eslint-parser',
//       parserOptions: {
//         babelOptions: {
//           configFile: path.resolve(__dirname, './babel.config.js'),
//         },
//       },
//     },
//     {
//       files: ['*.ts'],
//       parser: '@typescript-eslint/parser',
//       plugins: ['@typescript-eslint'],
//       extends: 'plugin:@typescript-eslint/recommended'
//     },
//     {
//       files: ['*.vue'],
//       // parser: 'vue-eslint-parser',
//       parse: 'eslint-plugin-vue',
//       parserOptions: {
//         parser: '@babel/eslint-parser',
//         babelOptions: {
//           configFile: path.resolve(__dirname, './babel.config.js'),
//           parserOpts: {
//             plugins: ['jsx']
//           }
//         },
//       },
//       extends:  'plugin:vue/vue3-recommended'
//     },
//   ],
//   plugins:[
//     'html'
//   ],
//   rules: {
//         '@typescript-eslint/explicit-function-return-type': 'off',
//         '@typescript-eslint/strict-boolean-expressions': 'off',
//         '@typescript-eslint/prefer-optional-chain': 'off',
//         'vue/multi-word-component-names': 0
//       },

// };

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    'vue/multi-word-component-names': 0
  }
}
