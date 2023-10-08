<template>
  <div class="flex justify-around items-center">
    <bar-chart
      :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
      x-axis-name="星期"
      y-axis-name="次数"
      bar-color="#000"
      :rules="[
        { min: 100, max: 199, color: 'pink' },
        { min: 200, max: 299, color: 'skytext-sky-600' }
      ]"
      :value="[120, 200, 150, 80, 70, 110, 130]"
      :reverse="true"
    />
    <!-- 代码展示 -->
    <pre class="w-200">
        <h1>示例代码</h1>
        <code class="language-html text-sm">
        &lt;bar-chart
            :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
            x-axis-name="星期"
            y-axis-name="次数"
            bar-color="#000"
            :rules="[
              { min: 100, max: 199, color: 'pink' },
              { min: 200, max: 299, color: 'skytext-sky-600' }
            ]"
            :value="[120, 200, 150, 80, 70, 110, 130]"
            :reverse="true"
        />
        </code>
      </pre>
  </div>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import { BarChart } from '@/components/echarts'
  import HowToUseTable from '../components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  const howToUse = [
    {
      propName: 'xData',
      mean: 'x轴上的刻度(必填)',
      type: 'Array<string>',
      default: '-'
    },
    {
      propName: 'value',
      mean: '显示的值,与xData的长度和下标保持一致(必填)',
      type: 'Array<number>',
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
      propName: 'reverse',
      mean: 'x轴和y轴是否反转',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'barColor',
      mean: '柱子颜色，未设置则随机显示',
      type: 'string',
      default: '-'
    },
    {
      propName: 'rules',
      mean: '柱子颜色显示的规则,每一项包含min,max,color,值在min~max之间的柱子会显示color颜色',
      type: 'array',
      default: '-'
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
  onMounted(() => {
    highlight.highlightAll()
  })
</script>
