<template>
    <y-input type="text"></y-input>
    <y-input type="number" placeholder="输入数字"></y-input>
    <y-input type="password" placeholder="输入密码"></y-input>
    <y-input type="text" :suffix="true" >
        <template #suffix>确定</template>
    </y-input>
    <y-input type="text" :suffix="true" v-model="model">
        <template #suffix>
            <y-icon icon-name="search-icon" width="100%" height="100%" color="currentColor"></y-icon>
        </template>
    </y-input>
    {{ model }}
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    import {yInput, YIcon} from '@y-animation/components'
    let model = ref()
</script>

<style>
.y_input{
    margin: 10px;
}
</style>