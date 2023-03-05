<template>
    <div class="icons">
        <div class="icon-box" v-for="(iconName,index) in iconList " :key="index">
        <YIcon  :icon-name="iconName"></YIcon>
        <p>{{ iconName }}</p>
    </div>
    </div>
</template>

<script setup lang="ts">
import {YIcon,yButton} from '@y-animation/components'
import { iconList } from '@y-animation/components/assets/icons';
</script>

<style scoped>
.icons {
    display: flex;
    flex-direction: row;
}
.icon-box {
    margin: 10px;
    cursor: pointer;
}
</style>