import { defineClientConfig } from '@vuepress/client'
import {yButton,yInput} from '@y-animation/components'
import {loadingDirective} from '@y-animation/utils'
import '@y-animation/theme-chalk/index.scss'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(yButton)
    app.use(yInput)
    app.directive('loading',loadingDirective)
  },
//   setup() {},
//   rootComponents: [],
})
