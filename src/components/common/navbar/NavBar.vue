<template>
<!-- 因为每一页都有导航，所以这里就不适合设置 ID -->
    <div class="nav-bar">
    <!-- 为了方便为插槽布局，所以这里我们要用div将起包起来 ,因为有三个插槽，所以要使用name 便于区分-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>
 .nav-bar {
     display: flex;
     /* 导航栏一般都是44px */
     height: 44px;
     line-height: 44px;
     text-align: center;
     box-shadow: 0 1px 1px rgba(100,100,100,.1);
     
 }
 .left,.right {
     width: 60px;
 }
 .center {
     flex: 1;
 }
</style>