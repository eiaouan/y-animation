<template>
  <div class="y_input">
    <input
      :type="type"
      :placeholder="placeholder"
      class="y_input_plain"
      :value="modelValue"
    @input="handleInput"
    >
    <!-- 这里是input 元素可能会有value 报错解决，类型断言 -->
    <!-- 后缀 -->
    <div
      v-if="suffix"
      class="y_input_suffix"
      @click="$emit('clickSuffix')"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>

<script lang="ts">

// import { defineProps } from 'vue'
import { yInputProps }  from './types'
export default {
  props: yInputProps,
  setup (props, context) {
    const handleInput = (evt:Event)=>{
      let target = evt.target as HTMLInputElement
      context.emit('update:modelValue',target.value)
    }

    const { type = 'text',placeholder,suffix } = props

    return {
      type,
      placeholder,
      suffix,
      handleInput
    }
  }
}

</script>
