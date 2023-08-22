<template>
  <div class="main">
    <div class="flex justify-around">
      <bar-chart
        type="bars"
        :x-data="['Brazil', 'Indonesia', 'USA', 'China']"
        x-axis-name="国家"
        y-axis-name="人数"
        width="400px"
        height="400px"
        :value="[
          {
            name: '2011',
            data: [18203, 23489, 29034, 104970],
            color: 'red'
          },
          {
            name: '2012',
            data: [18224, 23600, 30000, 124970],
            color: 'skyblue'
          }
        ]"
      />
      <!-- 代码展示 -->
      <pre class="width-800">
        <h1>示例代码</h1>
        <code class="language-html fs-14">
        &lt;bar-chart
            type="bars"
            :x-data="['Brazil', 'Indonesia', 'USA', 'China']"
            x-axis-name="国家"
            y-axis-name="人数"
            width="400px"
            height="400px"
            :value="[
                {
                    name: '2011',
                    data: [18203, 23489, 29034, 104970],
                    color: 'red'
                },
                {
                    name: '2012',
                    data: [18224, 23600, 30000, 124970],
                    color: 'skyblue'
                }
            ]"
        />
        </code>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { BarChart } from '@/components/echarts'
</script>

<style scoped lang="less">
  .main {
    padding: 0 0 0 100px;
  }
</style>
