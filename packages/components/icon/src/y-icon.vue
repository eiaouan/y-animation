<template>
  <component
    :is="iconName"
    :fill="color"
    class="y_icon"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
// 导入全部的svg模块
 import  svgComponents from '../../assets/icons'
export default {
  components: {
    ...svgComponents 
  },
  props: {
    iconName: {
      type:String,
      require: true,
      default: ''
    },
    color: {
      type: String,
      default: '#999'
    },
    width: {
      type: String,
      default: '50'
    },
    height: {
      type: String,
      default: '50'
    }
  },

}

</script>
