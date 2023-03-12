<template>
    <!-- 展示组件内容 -->
    <div class="box">
        <slot name="component"></slot>
        <div class="box-footer">
            <y-icon iconName="code-icon" class="icon"></y-icon>
            <y-icon iconName="copy-icon" class="icon"></y-icon>
        </div>
        <div class="code">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {YIcon} from '@y-animation/components'
let props = defineProps<{filePath:{type:String}}>()
</script>

<style>
    .box{
        margin: 20px;
        background-color: var(--c-bg);
        border: 1px solid var(--c-border)
    }
    .box-footer {
        display: flex;
        flex-direction: row-reverse;
    }
    .icon {
        color: var(--c-text);
        width:20px;
        height:20px;
        margin-right: 10px;
        cursor: pointer
    }
</style>