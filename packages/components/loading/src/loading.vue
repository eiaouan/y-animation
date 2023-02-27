<template>
    <div class="y_loading" :class="classList"></div>
</template>

<script lang="ts" setup>
export type LoadingProps ={
    type: String
}
import { defineProps,computed} from 'vue';
const {type='primary'} = defineProps<LoadingProps>()
let classList = computed(()=>{
    return {
        [`y_loading--${type}`]:type
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