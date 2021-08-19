<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- 使用一个div标签将其包裹,然后属性可以在div中进行定义操作 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div> 
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- <div :class="{active: isActive}"> <slot name="item-text"></slot></div> -->
        <div :style="activeStyle"> <slot name="item-text"></slot></div>
       
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    // 动态设置path
    props:{
        path: String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // 用于修改点击后的颜色
            // isActive:true
        }
    },
    computed:{
        isActive() {
            // 用于动态判断路径是否相同来决定其颜色的变化
            return this.$route.path.indexOf(this.path) !==-1
        },
        activeStyle() {
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick() {
            //监听点击,然后跳转至其它页面
            this.$router.replace(this.path)
        }
    }
}
</script>

// 这里style中有个参数 scoped 这个参数是限制样式范围的
<style>

.tab-bar-item {
  /* flex:1表示可以居中表示 */
  flex: 1;
  /* 用于设置文本对齐方式，不然会紧贴着左边 */
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 去除图片和文字之间的间隔 */
    vertical-align: middle;
    /* 重新设置图片与文字间的间隔 */
    margin-bottom: 2px;
}

/* .active{
    color: red;
} */
</style>