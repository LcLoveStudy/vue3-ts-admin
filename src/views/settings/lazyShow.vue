<template>
  <div class="page_main flex-row flex-wrap">
    <img v-lazy="'https://img2.baidu.com/it/u=2098302066,1207295454&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=343'">
    <img v-lazy="'https://img1.baidu.com/it/u=2676533820,1803958359&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400'">
    <img v-lazy="'https://img2.baidu.com/it/u=3196968309,1319515521&fm=253&fmt=auto&app=138&f=PNG?w=751&h=500'">
    <img v-lazy="'https://img2.bianews.com/image/bianews/news/imgs/1632407012152.jpeg?imageView2/0/format/jpg/q/75'">
    <img v-lazy="'https://img0.baidu.com/it/u=3664273503,2975533171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=298'">
    <img v-lazy="'https://p6.itc.cn/images01/20200917/7656d7a7ea3f4aeaa97d302b94a5190e.png'">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.page_main {
  width: 100%;
  height: 80vh;
  overflow-y: auto;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>