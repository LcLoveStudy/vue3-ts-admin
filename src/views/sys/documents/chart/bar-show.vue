<template>
  <div class="flex justify-around items-center">
    <bar-chart
      :data="[
        { name: 'Mon', value: 120 },
        { name: 'Tue', value: 201 },
        { name: 'Wed', value: 150 },
        { name: 'Thu', value: 80, color: 'green' },
        { name: 'Fri', value: 70, color: 'yellow' },
        { name: 'Sat', value: 110 },
        { name: 'Sun', value: 130 }
      ]"
      x-axis-name="星期"
      y-axis-name="次数"
      bar-color="#000"
      :rules="[
        { min: 100, max: 199, color: 'pink' },
        { min: 200, max: 299, color: 'skyblue' }
      ]"
      reverse
    />
    <!-- 代码展示 -->
    <pre class="w-200">
        <h1>示例代码</h1>
        <code class="language-html text-sm">
        &lt;bar-chart
            :data="[
              { name: 'Mon', value: 120 },
              { name: 'Tue', value: 201 },
              { name: 'Wed', value: 150 },
              { name: 'Thu', value: 80, color: 'green' },
              { name: 'Fri', value: 70, color: 'yellow'},
              { name: 'Sat', value: 110 },
              { name: 'Sun', value: 130 }
            ]"
            x-axis-name="星期"
            y-axis-name="次数"
            bar-color="#000"
            :rules="[
              { min: 100, max: 199, color: 'pink' },
              { min: 200, max: 299, color: 'skyblue' }
            ]"
            reverse
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
      propName: 'data',
      mean: '图表数据',
      type: 'Array<{name: string;value: number;color?:string}>',
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
