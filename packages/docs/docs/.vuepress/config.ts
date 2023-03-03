// vuepress 的相关配置

import { defineUserConfig,defaultTheme } from 'vuepress'
import {componentSidebar} from '../components'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import mdIt from 'markdown-it'

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)


export default {
  lang: 'zh-CN',
  title: 'YAnimation',
  description: 'YAnimation组件库',
  port: 5178,
  base: process.env.NODE_ENV == 'production'? 'y-animation':'/',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: '组件',
        children: [
            {
                text: '简介',
                link: '/components/components.md'
            },
            {
              text: 'button 按钮',
              link: '/components/button.md'
            }
        ],
        
      },
      // 字符串 - 页面文件路径
      '/readme.md',
    ],
    sidebar:componentSidebar,
    sidebarDepth: 2, // 侧边栏显示2级
  }),
  plugins:[
    registerComponentsPlugin({
      components: {
        basicInput : path.resolve(__dirname,'./components/input/basicInput.vue')
      },
      componentsDir: path.resolve(__dirname, './components/input'),
    })
    
  ],
  extendMarkdown: md => {
    md.set({ breaks: true })
    md.use(mdIt)
  }
  
}