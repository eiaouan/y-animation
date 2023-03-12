// docs/.vuepress/config.ts
import { defaultTheme } from "vuepress";

// docs/components/index.ts
var componentSidebar = [
  {
    text: "\u4F7F\u7528",
    link: "/components/components.md"
  },
  {
    text: "\u901A\u7528",
    collapsable: true,
    children: [{
      text: "Button \u6309\u94AE",
      link: "/components/pages/button"
    }, {
      text: "input \u8F93\u5165",
      link: "/components/pages/input"
    }, {
      text: "icon \u56FE\u6807",
      link: "/components/pages/icon"
    }]
  },
  {
    text: "\u6570\u636E\u5F55\u5165",
    collapsable: true,
    children: [{
      text: "Slider \u6ED1\u52A8\u7EC4\u4EF6",
      link: "/components/pages/Slider"
    }]
  },
  {
    text: "\u6570\u5B57\u8F93\u5165\u6846",
    collapsable: true,
    children: [{
      text: "InputNumber \u6570\u5B57\u8F93\u5165\u6846",
      link: "/components/pages/InputNumber"
    }]
  }
];

// docs/.vuepress/config.ts
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import mdIt from "markdown-it";
import { getDirname, path } from "@vuepress/utils";
import demoContainer from "vuepress-plugin-demo-container-v2";
var __vite_injected_original_import_meta_url = "file:///D:/project/y-animation/y-animation/packages/docs/docs/.vuepress/config.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var config_default = {
  lang: "zh-CN",
  title: "YAnimation",
  description: "YAnimation\u7EC4\u4EF6\u5E93",
  port: 5178,
  base: process.env.NODE_ENV == "production" ? "y-animation" : "/",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "Foo",
        link: "/foo/"
      },
      // NavbarGroup
      {
        text: "\u7EC4\u4EF6",
        children: [
          {
            text: "\u7B80\u4ECB",
            link: "/components/components.md"
          },
          {
            text: "button \u6309\u94AE",
            link: "/components/button.md"
          }
        ]
      },
      // 字符串 - 页面文件路径
      "/readme.md"
    ],
    sidebar: componentSidebar,
    sidebarDepth: 2
    // 侧边栏显示2级
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    }),
    demoContainer
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
    md.use(mdIt);
  }
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvY29tcG9uZW50cy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3Byb2plY3QveS1hbmltYXRpb24veS1hbmltYXRpb24vcGFja2FnZXMvZG9jcy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFx5LWFuaW1hdGlvblxcXFx5LWFuaW1hdGlvblxcXFxwYWNrYWdlc1xcXFxkb2NzXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC95LWFuaW1hdGlvbi95LWFuaW1hdGlvbi9wYWNrYWdlcy9kb2NzL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiOy8vIHZ1ZXByZXNzIFx1NzY4NFx1NzZGOFx1NTE3M1x1OTE0RFx1N0Y2RVxyXG5cclxuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyxkZWZhdWx0VGhlbWUgfSBmcm9tICd2dWVwcmVzcydcclxuaW1wb3J0IHtjb21wb25lbnRTaWRlYmFyfSBmcm9tICcuLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHMnXHJcbmltcG9ydCBtZEl0IGZyb20gJ21hcmtkb3duLWl0J1xyXG5pbXBvcnQgeyBnZXREaXJuYW1lLCBwYXRoIH0gZnJvbSAnQHZ1ZXByZXNzL3V0aWxzJ1xyXG5pbXBvcnQgZGVtb0NvbnRhaW5lciBmcm9tICd2dWVwcmVzcy1wbHVnaW4tZGVtby1jb250YWluZXItdjInXHJcbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsYW5nOiAnemgtQ04nLFxyXG4gIHRpdGxlOiAnWUFuaW1hdGlvbicsXHJcbiAgZGVzY3JpcHRpb246ICdZQW5pbWF0aW9uXHU3RUM0XHU0RUY2XHU1RTkzJyxcclxuICBwb3J0OiA1MTc4LFxyXG4gIGJhc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJz8gJ3ktYW5pbWF0aW9uJzonLycsXHJcbiAgdGhlbWU6IGRlZmF1bHRUaGVtZSh7XHJcbiAgICBuYXZiYXI6IFtcclxuICAgICAgLy8gTmF2YmFySXRlbVxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0ZvbycsXHJcbiAgICAgICAgbGluazogJy9mb28vJyxcclxuICAgICAgfSxcclxuICAgICAgLy8gTmF2YmFyR3JvdXBcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTdFQzRcdTRFRjYnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTdCODBcdTRFQ0InLFxyXG4gICAgICAgICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2NvbXBvbmVudHMubWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnYnV0dG9uIFx1NjMwOVx1OTRBRScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2J1dHRvbi5tZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFx1NUI1N1x1N0IyNlx1NEUzMiAtIFx1OTg3NVx1OTc2Mlx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gICAgICAnL3JlYWRtZS5tZCcsXHJcbiAgICBdLFxyXG4gICAgc2lkZWJhcjpjb21wb25lbnRTaWRlYmFyLFxyXG4gICAgc2lkZWJhckRlcHRoOiAyLCAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTY2M0VcdTc5M0EyXHU3RUE3XHJcbiAgfSksXHJcbiAgcGx1Z2luczpbXHJcbiAgICByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4oe1xyXG4gICAgICBjb21wb25lbnRzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzJyksXHJcbiAgICB9KSxcclxuICAgIGRlbW9Db250YWluZXJcclxuICBdLFxyXG4gIGV4dGVuZE1hcmtkb3duOiBtZCA9PiB7XHJcbiAgICBtZC5zZXQoeyBicmVha3M6IHRydWUgfSlcclxuICAgIG1kLnVzZShtZEl0KVxyXG4gIH1cclxuICBcclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovcHJvamVjdC95LWFuaW1hdGlvbi95LWFuaW1hdGlvbi9wYWNrYWdlcy9kb2NzL2RvY3MvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFx5LWFuaW1hdGlvblxcXFx5LWFuaW1hdGlvblxcXFxwYWNrYWdlc1xcXFxkb2NzXFxcXGRvY3NcXFxcY29tcG9uZW50c1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC95LWFuaW1hdGlvbi95LWFuaW1hdGlvbi9wYWNrYWdlcy9kb2NzL2RvY3MvY29tcG9uZW50cy9pbmRleC50c1wiO2V4cG9ydCBjb25zdCBjb21wb25lbnRTaWRlYmFyID1bXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1NEY3Rlx1NzUyOCcsXHJcbiAgICBsaW5rOiAnL2NvbXBvbmVudHMvY29tcG9uZW50cy5tZCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTkwMUFcdTc1MjgnLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW3tcclxuICAgICAgdGV4dDogJ0J1dHRvbiBcdTYzMDlcdTk0QUUnLFxyXG4gICAgICBsaW5rOiAnL2NvbXBvbmVudHMvcGFnZXMvYnV0dG9uJyxcclxuICAgIH0se1xyXG4gICAgICB0ZXh0OiAnaW5wdXQgXHU4RjkzXHU1MTY1JyxcclxuICAgICAgbGluazogJy9jb21wb25lbnRzL3BhZ2VzL2lucHV0JyxcclxuICAgIH0se1xyXG4gICAgICB0ZXh0OiAnaWNvbiBcdTU2RkVcdTY4MDcnLFxyXG4gICAgICBsaW5rOiAnL2NvbXBvbmVudHMvcGFnZXMvaWNvbicsXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTVGNTVcdTUxNjUnLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW3tcclxuICAgICAgdGV4dDogJ1NsaWRlciBcdTZFRDFcdTUyQThcdTdFQzRcdTRFRjYnLFxyXG4gICAgICBsaW5rOiAnL2NvbXBvbmVudHMvcGFnZXMvU2xpZGVyJyxcclxuICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU2NTcwXHU1QjU3XHU4RjkzXHU1MTY1XHU2ODQ2JyxcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFt7XHJcbiAgICAgIHRleHQ6ICdJbnB1dE51bWJlciBcdTY1NzBcdTVCNTdcdThGOTNcdTUxNjVcdTY4NDYnLFxyXG4gICAgICBsaW5rOiAnL2NvbXBvbmVudHMvcGFnZXMvSW5wdXROdW1iZXInLFxyXG4gICAgfV1cclxuICB9LFxyXG5dXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUEwQixvQkFBb0I7OztBQ0Z3VSxJQUFNLG1CQUFrQjtBQUFBLEVBQzVZO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLFVBQVUsQ0FBQztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1IsR0FBRTtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1IsR0FBRTtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUFHO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixVQUFVLENBQUM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLElBQ2IsVUFBVSxDQUFDO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUNGOzs7QUQ5QkEsU0FBUyxnQ0FBZ0M7QUFDekMsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWSxZQUFZO0FBQ2pDLE9BQU8sbUJBQW1CO0FBUCtNLElBQU0sMkNBQTJDO0FBUTFSLElBQU0sWUFBWSxXQUFXLHdDQUFlO0FBRzVDLElBQU8saUJBQVE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLE1BQU0sUUFBUSxJQUFJLFlBQVksZUFBYyxnQkFBYztBQUFBLEVBQzFELE9BQU8sYUFBYTtBQUFBLElBQ2xCLFFBQVE7QUFBQTtBQUFBLE1BRU47QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUE7QUFBQSxNQUVBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDTjtBQUFBLFlBQ0ksTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0o7QUFBQSxNQUVGO0FBQUE7QUFBQSxNQUVBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUTtBQUFBLElBQ1IsY0FBYztBQUFBO0FBQUEsRUFDaEIsQ0FBQztBQUFBLEVBQ0QsU0FBUTtBQUFBLElBQ04seUJBQXlCO0FBQUEsTUFDdkIsZUFBZSxLQUFLLFFBQVEsV0FBVyxjQUFjO0FBQUEsSUFDdkQsQ0FBQztBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0IsUUFBTTtBQUNwQixPQUFHLElBQUksRUFBRSxRQUFRLEtBQUssQ0FBQztBQUN2QixPQUFHLElBQUksSUFBSTtBQUFBLEVBQ2I7QUFFRjsiLAogICJuYW1lcyI6IFtdCn0K
