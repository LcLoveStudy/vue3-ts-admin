<template>
  <div class="flex justify-around items-center">
    <line-chart
      :data="[
        { name: 'Mon', value: 120 },
        { name: 'Tue', value: 200 },
        { name: 'Wed', value: 150 },
        { name: 'Thu', value: 80 },
        { name: 'Fri', value: 70 },
        { name: 'Sat', value: 110 },
        { name: 'Sun', value: 130 }
      ]"
      x-axis-name="星期"
      y-axis-name="次数"
      smooth
      area
    />
    <!-- 代码展示 -->
    <pre class="w-200">
        <h1>示例代码</h1>
        <code class="language-html text-sm">
        &lt;line-chart
            :data="[
              { name: 'Mon', value: 120 },
              { name: 'Tue', value: 200 },
              { name: 'Wed', value: 150 },
              { name: 'Thu', value: 80 },
              { name: 'Fri', value: 70 },
              { name: 'Sat', value: 110 },
              { name: 'Sun', value: 130 }
            ]"
            x-axis-name="星期"
            y-axis-name="次数"
            smooth
            area
        />
        </code>
      </pre>
  </div>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import HowToUseTable from '../components/how-to-use-table.vue'
  import { LineChart } from '@/components/echarts'
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = [
    {
      propName: 'data(必填)',
      mean: '图表数据',
      type: 'Array<{name: string;value: number}>',
      default: '-'
    },
    {
      propName: 'xAxisName',
      mean: 'x轴的名字',
      type: 'string',
      default: '-'
    },
    {
      propName: 'yAxisName',
      mean: 'y轴的名字',
      type: 'string',
      default: '-'
    },
    {
      propName: 'smooth',
      mean: '是否平滑',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'area',
      mean: '是否显示阴影',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'lineColor',
      mean: '折线的颜色',
      type: 'string',
      default: '随机'
    },
    {
      propName: 'textColor',
      mean: '所有字体和轴线的颜色',
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
