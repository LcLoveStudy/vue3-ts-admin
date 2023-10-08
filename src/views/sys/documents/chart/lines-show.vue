<template>
  <div class="flex justify-around items-center">
    <line-chart
      :x-data="['Brazil', 'Indonesia', 'USA', 'China']"
      x-axis-name="人数"
      y-axis-name="国家"
      :value="[
        {
          name: '2011',
          data: [18203, 23489, 29034, 104970],
          color: 'red'
        },
        {
          name: '2012',
          data: [18224, 23600, 30000, 124970],
          color: 'skytext-sky-600'
        }
      ]"
      :smooth="true"
      :area="true"
    />
    <!-- 代码展示 -->
    <pre class="w-200">
        <h1>示例代码</h1>
        <code class="language-html text-sm">
        &lt;line-chart
            :x-data="['Brazil', 'Indonesia', 'USA', 'China']"
            x-axis-name="人数"
            y-axis-name="国家"
            :value="[
              {
                name: '2011',
                data: [18203, 23489, 29034, 104970],
                color: 'red'
              },
              {
                name: '2012',
                data: [18224, 23600, 30000, 124970],
                color: 'skytext-sky-600'
              }
            ]"
            :smooth="true"
            :area="true"
        />
        </code>
      </pre>
  </div>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import { LineChart } from '@/components/echarts'
  import HowToUseTable from '../components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = [
    {
      propName: 'xData(必填)',
      mean: 'x轴上的刻度',
      type: 'Array<string>',
      default: '-'
    },
    {
      propName: 'value(必填)',
      mean: '显示的值,与xData的长度和下标保持一致',
      type: 'Array<{name:string,data:number[],color?:string}>',
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
