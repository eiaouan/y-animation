<template>
  <input
    :type="type"
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
    const { type = 'text' } = props
    return {
      type
    }
  }
}

</script>
