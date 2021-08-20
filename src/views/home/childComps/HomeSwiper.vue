<template>
     <swiper>
            <!-- :key='item.id'这个是vue要求添加的，说是可以提高效率 -->
            <swiper-item v-for="item in banners" :key='item.id'>
                <template v-slot>
                    <a :href="item.link">
                        <img :src="item.image" alt="">
                    </a>
                </template>
            </swiper-item>
        </swiper>
</template>

<script>
// 因为在该文件中的js文件中定义过，所以可以这样导出
import {Swiper,SwiperItem} from '@/components/common/swiper'

export default {
    name:'HomeSwiper',
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>