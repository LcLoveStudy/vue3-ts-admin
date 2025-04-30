<template>
  <div class="phone:text-7xl tablet:text-2xl font-semibold">点击目标外(v-clickoutside)</div>
  <div
    class="phone:mt-[24px] tablet:mt-6 flex flex-col phone:text-6xl tablet:text-xl phone:gap-[20px] tablet:gap-5"
  >
    <span class="inline-block">应用场景：</span>
    <span>当点击目标元素外的时候会执行该指令的回调函数</span>
    <span class="tablet:mt-5 inline-block">用法说明:</span>
    <span>在需要的地方使用v-clickoutside指令</span>
    <span class="text-red-700 bgc-lightgray">(指令的值为一个回调函数)</span>
    <span class="mt-5 inline-block">示例:</span>
    <pre>
      <code>
        &lt;div <span class="text-red-700">v-clickoutside="clickoutside"</span>&gt;
            点我外面的任何地方都会+1
            { {num} }
        &lt;/div&gt;

        &lt;script setup lang="ts"&gt;
          const num = ref(0)
          const clickoutside = () => {
            num.value += 1
          }
        &lt;/script&gt;
      </code>
    </pre>
  </div>
  <el-card
    shadow="hover"
    class="absolute tablet:top-[100px] tablet:right-[100px] phone:p-[24px] tablet:p-24 phone:text-6xl tablet:text-xl"
    v-clickoutside="clickoutside"
  >
    <div>点我外面的任何地方都会+1</div>
    <div class="mt-5">{{ num }}</div>
  </el-card>
</template>

<script setup lang="ts">
  import highlight from 'highlight.js'
  const num = ref(0)
  const clickoutside = () => {
    num.value += 1
  }
  onMounted(() => {
    highlight.highlightAll()
  })
</script>

<style scoped lang="less">
  .code {
    width: 500px;
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #ccc;
    color: rgb(0, 132, 255);
  }
</style>
