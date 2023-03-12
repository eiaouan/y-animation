<template>
  <button
    v-loading="p.loading"
    :ButtonType="p.type"
    :ButtonSize="p.size"
    :disabled="p.disabled"
    class="y_button"
    :class="classList"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './types'

export default defineComponent({
  name: 'YButton',
  //   emits:['click'],
  props: buttonProps,
  setup (props, context) {
    const p = computed(() => {
      const { size = 'meduim', type = 'text', loading = false ,disabled=false} = props
      return { size, type, loading,disabled }
    })
    const classList = computed(() => {
      const { size = 'meduim', type = 'text', loading = false,disabled=false } = props
      return [
        {
          [`y_button--${type}`]: type,
          [`y_button--${size}`]: size,
          'y_button--loading': loading,
          'y_button--disabled':disabled
        }
      ]
    })
    return {
      p,
      classList
    }
  }
})
</script>
