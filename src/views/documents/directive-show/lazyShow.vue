<template>
  <div class="document">
    <div class="fs-25 fw-600">图片懒加载(v-lazy)</div>
    <div class="mt-25">
      <span class="fs-20 inline-block">应用场景：</span>
      <br />
      当页面开始加载时，会请求所有的图片资源，当前屏幕没显示的图片也会请求，如果用户只看到当前屏幕内的图片后就去到其他页面，其他图片就会浪费请求资源，影像一定的性能。
      <span class="tomato bgc-lightgray">(避免和flex使用，当使用flex布局后会立刻请求网络)</span>
      <br />
      <span class="fs-20 mt-20 inline-block">用法说明:</span>
      <br />
      在图片过多的地方使用v-lazy指令,进行图片懒加载，当往下滚动页面时,图片进入视线后才会发送请求
      <span class="tomato bgc-lightgray">
        (只适用于请求服务器的图片，项目assets文件夹中的不可用)
      </span>
      <br />
      <span class="fs-20 mt-20 inline-block">示例:</span>
      <br />
      <div class="code mt-20">
        &lt;img
        <span class="tomato">v-lazy="'请求地址'"</span>
        /&gt;
      </div>
    </div>
  </div>
  <!-- 图片列表 -->
  <el-card class="page_main width-800 height-800 overflow-y-auto">
    <img
      v-lazy="
        'https://img2.baidu.com/it/u=2098302066,1207295454&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=343'
      "
    />
    <img
      v-lazy="
        'https://img1.baidu.com/it/u=2676533820,1803958359&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400'
      "
    />
    <img
      v-lazy="
        'https://img2.baidu.com/it/u=3196968309,1319515521&fm=253&fmt=auto&app=138&f=PNG?w=751&h=500'
      "
    />
    <img
      v-lazy="
        'https://img2.bianews.com/image/bianews/news/imgs/1632407012152.jpeg?imageView2/0/format/jpg/q/75'
      "
    />
    <img
      v-lazy="
        'https://img0.baidu.com/it/u=3664273503,2975533171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=298'
      "
    />
    <img v-lazy="'https://p6.itc.cn/images01/20200917/7656d7a7ea3f4aeaa97d302b94a5190e.png'" />
  </el-card>
  <ScrollBar target=".page_main" />
</template>

<script setup lang="ts">
  import ScrollBar from '@/components/scroll-bar/index.vue'
</script>

<style scoped lang="less">
  .document {
    width: 40vw;
  }

  .page_main {
    position: absolute;
    top: 100px;
    right: 0;

    img {
      width: 100%;
      height: 60vh;
    }
  }

  .code {
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #ccc;
    color: rgb(0, 132, 255);
  }
</style>
