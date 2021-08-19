<template>
     <div id="tab-bar">
         <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f3f3f3;
  /* 设置其位置，这个位置是绝对定位，不会随着网页的变化而发生改变 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 设置虚化阴影 :第一个参数：x的偏移量；第二个参数：y的偏移量；第三个参数：模糊程度；第四个参数：模糊颜色*/
  box-shadow: 0 -1px 1px rgba(100,100, 100,1);
}

</style>