/* app.vue */
<template>
  <div>
    <yButton
      :loading="loading"
      @click="handleClick"
    >
      确定
    </yButton>
    <YIcon />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { yButton,YIcon } from '@y-animation/components'
const loading = ref(false)
const handleClick = () => {
  loading.value = !loading.value
}
</script>
