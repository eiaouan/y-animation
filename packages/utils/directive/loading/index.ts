/* eslint-disable @typescript-eslint/no-explicit-any */
// loading 自定义指令
import { type Directive, type DirectiveBinding, createApp } from 'vue'
import yLoading from '@y-animation/components/loading/src/loading.vue'
export const loadingDirective: Directive = {
  // 挂在前
  beforeMount (el, binding) {
    const app = createApp(yLoading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    binding.value && el.appendChild(el.instance.$el)
  },
  updated (el, binding) {
    binding.oldValue !== binding.value && toggleLoading(el, binding)
  },
  unmounted (el, binding) {
    el.$domInserted && toggleLoading(el, binding)
    el.$instance && (el.$instance = null)
  }
}

const toggleLoading = (el: any, binding: DirectiveBinding) => {
  if (binding.value) { // 如果为true，显示loading
    insertLoading(el, el.instance)
  } else {
    el.instance.$el.parentNode && el.instance.$el.parentNode.removeChild(el.instance.$el)
  }
}
// loading 插入页面
const insertLoading = (el: any, instance: any) => {
  // 插入dom
  el.appendChild(instance.$el)
  // 表明dom已插入
  el.domInserted = true
}

export { toggleLoading, insertLoading }
