<template>
  <div class="flex justify-around items-center">
    <PieChart
      :data="[
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email', color: 'red' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads', color: 'blue' }
      ]"
      :rose="true"
    />
    <!-- 代码展示 -->
    <pre class="width-800">
        <h1>示例代码</h1>
        <code class="language-html fs-14">
        &lt;PieChart
          :data="[
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email', color: 'red' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads', color: 'blue' }
          ]"
          :rose="true"
        />
        </code>
      </pre>
  </div>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import { PieChart } from '@/components/echarts'
  import HowToUseTable from '../components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = [
    {
      propName: 'data(必填)',
      mean: '展示的值',
      type: 'Array<{name:string,value:number[],color?:string}>',
      default: '-'
    },
    {
      propName: 'ring',
      mean: '是否环状',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'rose',
      mean: '是否开启南丁格尔玫瑰图',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'textColor',
      mean: '头部每项颜色',
      type: 'string',
      default: '#000'
    },
    {
      propName: 'width',
      mean: '整个图标的宽度',
      type: 'string',
      default: '400px'
    },
    {
      propName: 'height',
      mean: '整个图标的高度',
      type: 'string',
      default: '400px'
    }
  ]
</script>
