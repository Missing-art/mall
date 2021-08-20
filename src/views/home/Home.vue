<template>
    <div id="home">
        <!-- 插槽替换的使用:现在需要用template来进行包装 -->
        <!-- 这里为nav-bar设置class是为了在home组件中设置其样式 -->
        <nav-bar class="home-nav">
            <template v-slot:center>
                <div>购物街</div>
            </template>
        </nav-bar>
       <home-swiper :banners="banners"/>
       <recommend-view :recommends="recommends"/>
    </div>
</template>

<script>
// 这里引用组件
import NavBar from '@/components/common/navbar/NavBar.vue'

// 因为导出的时候不是用default导出，所以导入要用{}
import {getHomeMultidata} from "@/network/home"
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'

export default {
    name:'Home',
    // 注册组件
    components:{
        NavBar,
        HomeSwiper,
        RecommendView
    },
    data() {
        return {
            // 设置这个变量用于存储数据
            banners:[],
            recommends:[]
        }
    },
    // 在组件创建完成后马上发送网络请求
    
    created() {
        // 1.请求多个数据,使用.then就能返回数据
        getHomeMultidata().then(res => {
            // console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        })
    }
}
</script>

<style>
.home-nav {
    /* 这里的颜色使用的的base.css文件中自己定义的颜色变量 */
    background-color: var(--color-tint);
    color: white;
}
</style>