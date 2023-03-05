<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="y_input"
  >
</template>

<script lang="ts">

// import { defineProps } from 'vue'
import { yInputProps } from './types'
export default {
  props: yInputProps,
  setup (props, context) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { type = 'text',placeholder } = props
    return {
      type,
      placeholder
    }
  }
}

</script>
