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
  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = Math.random().toString()
  const props = defineProps({
    data: {
      type: Array,
      required: true
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
  const chartData: any[] = []

  /** 初始化chart */
  const initChart = () => {
    const chartDom = document.getElementById(chartId) as HTMLDivElement
    echarts.init(chartDom).setOption({
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
    ;(props.data as PieDataType[]).forEach((item, index) => {
      chartData.push({
        value: item.value,
        name: item.name,
        label: {
          color: colorList[index]
        }
      })
      if (item.color) {
        colorList[index] = item.color
      }
    })
  }

  onMounted(() => {
    for (let i = 0; i <= props.data.length - 1; i++) {
      colorList.push(useColor())
    }
    ;(props.data as PieDataType[]).forEach((item) => {
      if (!item.name || !item.value) {
        console.error('饼图的data每项应该至少包含name和value属性')
      }
    })
    dataHandler()
    initChart()
  })
</script>
