<template>
  <div
    class="y_loading"
    :class="classList"
  />
</template>

<script lang="ts">

import { defineComponent,computed} from 'vue';
import { LoadingProps } from './types';

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

<style lang="scss">
.y_loading{
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;
    &--primary {
    width: 1em;
    height: 1em;
    border: 2px solid currentColor ;
    border-top-color: transparent;
    border-radius: 100%;
    animation: circle infinite 0.75s linear;
    }
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>