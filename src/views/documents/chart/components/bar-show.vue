<template>
  <div class="main">
    <div class="flex justify-around">
      <bar-chart
        :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
        x-axis-name="星期"
        y-axis-name="次数"
        width="400px"
        height="400px"
        :value="[120, 200, 150, 80, 70, 110, 130]"
        :reverse="true"
      />
      <pre class="width-800">
        <h1>示例代码</h1>
        <code class="language-html fs-14">
        &lt;bar-chart
            :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
            x-axis-name="星期"
            y-axis-name="次数"
            width="400px"
            height="400px"
            :value="[120, 200, 150, 80, 70, 110, 130]"
            :reverse="true"
        />
        </code>
      </pre>
    </div>
    <HowToUseTable :how-to-use="howToUse" />
  </div>
</template>

<script setup lang="ts">
  import BarChart from '@/components/ss-echarts/bar-chart.vue'
  import HowToUseTable from '../../components/how-to-use-table.vue'
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
