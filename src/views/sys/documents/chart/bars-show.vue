<template>
  <div class="flex justify-around items-center">
    <bar-chart
      :data="[
        {
          series: '2022',
          names: ['Brazil', 'Indonesia', 'USA', 'Chain'],
          values: [18203, 23489, 29034, 104970],
          color: 'skyblue'
        },
        {
          series: '2023',
          names: ['Brazil', 'Indonesia', 'USA', 'Chain'],
          values: [18224, 23600, 30000, 124970],
          color: 'red'
        }
      ]"
      x-axis-name="星期"
      y-axis-name="次数"
      zoomable
      reverse
    />
    <!-- 代码展示 -->
    <pre class="w-200">
        <h1>示例代码</h1>
        <code class="language-html text-sm">
        &lt;bar-chart
            :data="[
              {
                series: '2022',
                names: ['Brazil', 'Indonesia', 'USA', 'Chain'],
                values: [18203, 23489, 29034, 104970],
                color: 'skyblue'
              },
              {
                series: '2023',
                names: ['Brazil', 'Indonesia', 'USA', 'Chain'],
                values: [18224, 23600, 30000, 124970],
                color: 'red'
              }
            ]"
            x-axis-name="星期"
            y-axis-name="次数"
            zoomable
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
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = [
    {
      propName: 'data(必填)',
      mean: 'x轴上的刻度',
      type: 'Array<{series: string;names: string[];values: number[];color?: string}>',
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
      propName: 'zoomable',
      mean: '是否允许滚动缩放',
      type: 'boolean',
      default: 'false'
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
