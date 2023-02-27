/* app.vue */
<template>
  <yButton :loading="loading" @click="handleClick">确定</yButton>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { yButton } from '@y-animation/components';
let loading= ref(false)
const handleClick =()=>{
  loading.value=!loading.value
}
</script>