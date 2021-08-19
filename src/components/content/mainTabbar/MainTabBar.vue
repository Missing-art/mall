<template>
  <tab-bar>
    <tab-bar-item path='/home'>
       <!-- 因为这里面有两个插条,所以需要指定替换的插条名 -->
       <!-- 在url中或者dom中使用别名，需要在前面添加 ~ -->
       <template v-slot:item-icon>
       <img src="@/assets/img/tabbar/home.svg" alt="">
       </template>
       <template v-slot:item-icon-active>
       <img src="@/assets/img/tabbar/home_active.svg" alt="">
       </template>
       <template v-slot:item-text>
       <div slot="item-text">首页</div>
       </template>
     </tab-bar-item>
     <tab-bar-item path='/category'>
       <template v-slot:item-icon>
       <img src="@/assets/img/tabbar/category.svg" alt="">
       </template>
        <template v-slot:item-icon-active>
       <img src="@/assets/img/tabbar/category_active.svg" alt="">
       </template>
       <template v-slot:item-text>
       <div slot="item-text">分类</div>
       </template>
     </tab-bar-item>
     <tab-bar-item path='/cart'>
       <template v-slot:item-icon>
       <img src="@/assets/img/tabbar/shopcart.svg" alt="">
       </template>
        <template v-slot:item-icon-active>
       <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
       </template>
       <template v-slot:item-text>
       <div slot="item-text">购物车</div>
       </template>
     </tab-bar-item>
     <tab-bar-item path='/profile'>
       <template v-slot:item-icon>
       <img src="@/assets/img/tabbar/profile.svg" alt="">
       </template>
        <template v-slot:item-icon-active>
       <img src="@/assets/img/tabbar/profile_active.svg" alt="">
       </template>
       <template v-slot:item-text>
       <div slot="item-text">我的</div>
       </template>
     </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
