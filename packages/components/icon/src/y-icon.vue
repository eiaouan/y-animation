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
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    }
  },

}

</script>

<style>
.y_icon {
  /* color: red; */
  overflow: hidden;
}
</style>