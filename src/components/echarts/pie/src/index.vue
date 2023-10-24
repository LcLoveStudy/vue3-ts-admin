<template>
  <div
    :id="chartId"
    :style="{
      width: props.width,
      height: props.height
    }"
  ></div>
</template>

<script setup lang="ts">
  import { useColor } from '@/utils'
  import * as echarts from 'echarts'
  import { type PieDataType } from './pie-chart'
  import { initChartById, addReset, removeReset } from '../../utils'
  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = Math.random().toString()
  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    // 是否环状
    ring: {
      type: Boolean,
      default: false
    },
    // 是否开启南丁格尔玫瑰图
    rose: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#000'
    },
    width: {
      type: String,
      default: '400px'
    },
    height: {
      type: String,
      default: '400px'
    }
  })

  // 颜色列表
  const colorList: string[] = []
  // 用于显示的data
  let chartData: any[] = []
  let chartDom: echarts.ECharts
  /** 初始化chart */
  const initChart = () => {
    chartDom = initChartById(chartId)
    setOptions()
    addReset(chartDom)
  }

  /** 设置图表配置和数据 */
  const setOptions = () => {
    chartDom.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll'
      },
      textStyle: {
        color: props.textColor
      },
      color: colorList,
      series: [
        {
          data: chartData,
          type: 'pie',
          radius: props.ring || props.rose ? ['30%', '60%'] : ['0%', '70%'],
          roseType: props.rose ? 'area' : null,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }

  /** 处理data数据 */
  const dataHandler = () => {
    chartData = []
    ;(props.data as PieDataType[]).forEach((item, index) => {
      if (item.color) {
        colorList[index] = item.color
      }
      chartData.push({
        value: item.value,
        name: item.name,
        label: {
          color: colorList[index]
        }
      })
    })
  }

  /** 处理颜色 */
  const pieColorHandler = () => {
    for (let i = 0; i <= props.data.length - 1; i++) {
      colorList.push(useColor())
    }
    ;(props.data as PieDataType[]).forEach((item) => {
      if (!item.name || !item.value) {
        console.error('饼图的data每项应该至少包含name和value属性')
      }
    })
  }

  watch(
    () => props.data,
    () => {
      dataHandler()
      pieColorHandler()
      setOptions()
    },
    {
      deep: true
    }
  )
  onBeforeUnmount(() => {
    removeReset(chartDom)
  })

  onMounted(() => {
    pieColorHandler()
    dataHandler()
    initChart()
  })
</script>
