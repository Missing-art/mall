<template>
  <div id="app">
    <main-tab-bar/>
    <router-view/>
  </div>
</template>

<script>
/*组件的使用：
    1.创建组件：详情在components文件中
    2.在使用的文件中引用组件并进行组件的注册：components
    3.然后在template中将组件的id作为标签进行使用
    4.最后需要<router-view>才能显示 
 */
import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'
export default {
  name:'app',
  components:{
    MainTabBar
  }
}
</script>

<style>
/* 样式的引用 */
/* 这里已经使用了配置的路径 */
@import "assets/css/base.css";
</style>
