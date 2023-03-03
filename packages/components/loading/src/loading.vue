<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="y_loading"
    :class="classList"
  />
</template>

<script lang="ts">

import { defineComponent,computed} from 'vue';
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const {type='primary'} = props
    let classList = computed(()=>{
      return {
          [`y_loading--${type}`]:type
    }
  })
  return {
    classList
  }
  }
}) 

</script>
