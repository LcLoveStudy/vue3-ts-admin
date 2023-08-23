<template>
  <div class="main">
    <div class="flex justify-around">
      <line-chart
        :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
        x-axis-name="星期"
        y-axis-name="次数"
        :value="[120, 200, 150, 80, 70, 110, 130]"
        :smooth="true"
        :area="true"
        width="400px"
        height="400px"
      />
      <!-- 代码展示 -->
      <pre class="width-800">
        <h1>示例代码</h1>
        <code class="language-html fs-14">
        &lt;line-chart
            :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
            x-axis-name="星期"
            y-axis-name="次数"
            :value="[120, 200, 150, 80, 70, 110, 130]"
            :smooth="true"
            :area="true"
            width="400px"
            height="400px"
        />
        </code>
      </pre>
    </div>
    <HowToUseTable :how-to-use="howToUse" />
  </div>
</template>

<script setup lang="ts">
  import HowToUseTable from '../../components/how-to-use-table.vue'
  import { LineChart } from '@/components/echarts'
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
      default: '300px'
    },
    {
      propName: 'height',
      mean: '整个图标的高度',
      type: 'string',
      default: '300px'
    }
  ]
</script>

<style scoped lang="less">
  .main {
    padding: 0 0 0 100px;
  }
</style>
