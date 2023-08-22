<template>
  <div :id="chartId" class="chart_dom"></div>
</template>

<script setup lang="ts">
  import { useColor } from '@/utils'
  import * as echarts from 'echarts'
  const props = defineProps({
    // x轴的坐标
    xData: {
      type: Array,
      required: true
    },
    // 值
    value: {
      type: Array,
      required: true
    },
    // x轴的名称
    xAxisName: {
      type: String,
      default: ''
    },
    // y轴的名称
    yAxisName: {
      type: String,
      default: ''
    },
    // x轴和y轴是否反转
    reverse: {
      type: Boolean,
      default: false
    },
    // 柱子颜色，未设置则随机显示
    barColor: {
      type: String,
      default: ''
    },
    // 所有的字体颜色
    textColor: {
      type: String,
      default: '#000'
    },
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '300px'
    }
  })

  const chartValue = ref<
    {
      itemStyle: {
        color: string
      }
      value: number
    }[]
  >([])

  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = Math.random().toString()

  /** 初始化chart */
  const initChart = () => {
    const chartDom = document.getElementById(chartId) as HTMLDivElement
    echarts.init(chartDom).setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: props.reverse ? 'value' : 'category',
        data: props.reverse ? [] : props.xData,
        name: props.reverse ? props.yAxisName : props.xAxisName,
        nameTextStyle: {
          color: props.textColor
        },
        nameGap: 5,
        axisLine: {
          show: true,
          lineStyle: {
            color: props.textColor
          }
        },
        z: props.reverse ? 0 : 3
      },
      yAxis: {
        type: props.reverse ? 'category' : 'value',
        data: props.reverse ? props.xData : [],
        name: props.reverse ? props.xAxisName : props.yAxisName,
        nameTextStyle: {
          color: props.textColor
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: props.textColor
          }
        },
        axisLabel: {
          margin: 2
        },
        z: props.reverse ? 3 : 0
      },
      series: [
        {
          data: chartValue.value,
          type: 'bar'
        }
      ]
    })
  }
  onMounted(() => {
    // 处理每个柱子的颜色
    props.value.forEach((item) => {
      chartValue.value.push({
        itemStyle: {
          color: props.barColor ? props.barColor : useColor()
        },
        value: item as number
      })
    })
    initChart()
  })
</script>

<style scoped lang="less">
  .chart_dom {
    width: v-bind(width);
    height: v-bind(height);
  }
</style>
