// vuepress 的相关配置

import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'YAnimation',
  description: 'YAnimation组件库',
  port: 5178,
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
            }
        ],
        
      },
      // 字符串 - 页面文件路径
      '/readme.md',
    ],
  }),
})