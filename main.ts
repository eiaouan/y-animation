/* main.ts */
import { createApp } from 'vue'
import App from './app.vue'
import {loadingDirective} from '@y-animation/utils/directive'

import {yButton} from '@y-animation/components'
import '@y-animation/theme-chalk/index.scss'
const app = createApp(App)
app.use(yButton)
app.directive('loading',loadingDirective)
app.mount('#app')