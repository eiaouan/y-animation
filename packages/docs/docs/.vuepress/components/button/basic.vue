<template>
    <y-button type="text">文字按钮</y-button>
    <y-button type="primary" >普通按钮</y-button>
    <y-button type="success" >成功</y-button>
    <y-button type="danger" >失败</y-button>
    <y-button type="warning" >警告</y-button>
    <y-button type="primary" >普通按钮</y-button>
    <y-button type="primary" size="meduim" >中等大小</y-button>
    <y-button type="primary" size="big" >大按钮</y-button>
    <y-button type="primary" size="small" >小按钮</y-button>
    <y-button type="primary" size="mini" >mini按钮</y-button>
    <y-button type="primary" :loading="true">加载中</y-button>
    <y-button type="primary" :disabled="true">禁用中</y-button>
    
</template>

<style>
.y_button {
    margin: 10px
}
</style>