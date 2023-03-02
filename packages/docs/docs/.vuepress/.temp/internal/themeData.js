export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Foo\",\"link\":\"/foo/\"},{\"text\":\"组件\",\"children\":[{\"text\":\"简介\",\"link\":\"/components/components.md\"},{\"text\":\"button 按钮\",\"link\":\"/components/button.md\"}]},\"/readme.md\"],\"sidebar\":[{\"text\":\"使用\",\"link\":\"/components/components.md\"},{\"text\":\"通用\",\"collapsable\":true,\"children\":[{\"text\":\"Button 按钮\",\"link\":\"/components/pages/Button\"},{\"text\":\"input 输入\",\"link\":\"/components/pages/input\"}]},{\"text\":\"数据录入\",\"collapsable\":true,\"children\":[{\"text\":\"Slider 滑动组件\",\"link\":\"/components/pages/Slider\"}]},{\"text\":\"数字输入框\",\"collapsable\":true,\"children\":[{\"text\":\"InputNumber 数字输入框\",\"link\":\"/components/pages/InputNumber\"}]}],\"sidebarDepth\":2,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
