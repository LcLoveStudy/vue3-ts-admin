<template>
  <div class="phone:w-full tablet:w-[40vw]">
    <div class="phone:text-6xl tablet:text-xl font-semibold">图片懒加载(v-lazy)</div>
    <div
      class="phone:mt-[24px] tablet:mt-6 flex flex-col phone:text-6xl tablet:text-xl phone:gap-[20px] tablet:gap-5"
    >
      <span>应用场景：</span>
      <span>
        当页面开始加载时，会请求所有的图片资源，当前屏幕没显示的图片也会请求，如果用户只看到当前屏幕内的图片后就去到其他页面，其他图片就会浪费请求资源，影像一定的性能。
      </span>
      <span class="text-red-700 bgc-lightgray">
        (避免和flex使用，当使用flex布局后会立刻请求网络)
      </span>
      <span>用法说明:</span>
      <span>
        在图片过多的地方使用v-lazy指令,进行图片懒加载，当往下滚动页面时,图片进入视线后才会发送请求
      </span>
      <span class="text-red-700 bgc-lightgray">
        (只适用于请求服务器的图片，项目assets文件夹中的不可用)
      </span>
      <span>示例:</span>
      <div class="code mt-5">
        &lt;img
        <span class="text-red-700">v-lazy="'请求地址'"</span>
        /&gt;
      </div>
    </div>
  </div>
  <!-- 图片列表 -->
  <el-card
    class="page_main phone:h-[40vh] tablet:h-[80vh] phone:mt-[3vh] tablet:top-[10vh] tablet:right-[1vw] phone:w-[90vw] tablet:w-[40vw]"
  >
    <img
      class="phone:h-[20vh] tablet:h-[60v] desktop:h-[50vh]"
      v-lazy="
        'https://img2.baidu.com/it/u=2098302066,1207295454&fm=253&fmt=auto&app=138&f=JPEG?w=562&h=343'
      "
    />
    <img
      class="phone:h-[20vh] tablet:h-[60v] desktop:h-[50vh]"
      v-lazy="
        'https://img1.baidu.com/it/u=2676533820,1803958359&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400'
      "
    />
    <img
      class="phone:h-[20vh] tablet:h-[60v] desktop:h-[50vh]"
      v-lazy="
        'https://img2.baidu.com/it/u=3196968309,1319515521&fm=253&fmt=auto&app=138&f=PNG?w=751&h=500'
      "
    />
    <img
      class="phone:h-[20vh] tablet:h-[60v] desktop:h-[50vh]"
      v-lazy="
        'https://img2.bianews.com/image/bianews/news/imgs/1632407012152.jpeg?imageView2/0/format/jpg/q/75'
      "
    />
    <img
      class="phone:h-[20vh] tablet:h-[60v] desktop:h-[50vh]"
      v-lazy="
        'https://img0.baidu.com/it/u=3664273503,2975533171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=298'
      "
    />
    <img
      class="phone:h-[20vh] tablet:h-[60v] desktop:h-[50vh]"
      v-lazy="'https://p6.itc.cn/images01/20200917/7656d7a7ea3f4aeaa97d302b94a5190e.png'"
    />
  </el-card>
  <lc-scrollbar target=".page_main" />
</template>

<script setup lang="ts">
  import LcScrollbar from '@/components/lc-scrollbar'
</script>

<style scoped lang="less">
  .page_main {
    position: absolute;
    overflow-y: auto;

    img {
      width: 100%;
    }
  }

  .code {
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #ccc;
    color: rgb(0, 132, 255);
  }
</style>
