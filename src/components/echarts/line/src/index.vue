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
  import { getType, useColor } from '@/utils'
  import { type LineSeriesType } from './line-chart'
  import * as echarts from 'echarts'
  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = Math.random().toString()
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
    // 是否平滑
    smooth: {
      type: Boolean,
      default: false
    },
    // 是否显示阴影
    area: {
      type: Boolean,
      default: false
    },
    lineColor: {
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
      default: '400px'
    },
    height: {
      type: String,
      default: '400px'
    }
  })

  // 判断是多条还是一条
  let type = 'line'
  // 用于显示多折线的legend
  const legend = {
    type: 'scroll',
    data: [] as string[]
  }
  // 用于显示多折线的series
  const series: Array<
    {
      type: string
      stack: string
      smooth: boolean
      areaStyle: object | null
      emphasis: { focus: string }
    } & LineSeriesType
  > = []
  // 用于显示多折线的颜色
  const colorList: string[] = []

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
      legend: type === 'lines' ? legend : {},
      xAxis: {
        type: 'category',
        data: props.xData,
        name: props.xAxisName,
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
        z: 3
      },
      color: colorList,
      grid: {
        left: '3%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        data: [],
        name: props.yAxisName,
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
        z: 0
      },
      series:
        type === 'lines'
          ? series
          : [
              {
                data: props.value,
                type: 'line',
                smooth: props.smooth,
                areaStyle: props.area ? {} : null,
                label: {
                  show: true,
                  position: 'top',
                  color: props.textColor,
                  fontSize: 12
                }
              }
            ]
    })
  }

  /** 处理折线的颜色 */
  const lineColorHandler = () => {
    if (type === 'lines') {
      ;(props.value as LineSeriesType[]).forEach((item) => {
        legend.data.push(item.name)
        series.push({
          name: item.name,
          type: 'line',
          stack: 'Total',
          data: item.data,
          smooth: props.smooth,
          areaStyle: props.area ? {} : null,
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            position: 'top',
            color: props.textColor,
            fontSize: 12
          }
        })
        if (item.color) {
          colorList.push(item.color)
        }
      })
    } else if (type === 'line' && props.lineColor) {
      colorList.push(props.lineColor)
    }
    for (let i = 0; i <= props.value.length - 1; i++) {
      colorList.push(useColor())
    }
  }

  onMounted(() => {
    getType(props.value[0]) === 'number' ? (type = 'line') : (type = 'lines')
    if (type === 'lines') {
      ;(props.value as LineSeriesType[]).forEach((item) => {
        if (!item.data || !item.name) {
          console.error('多折线图的value每项应该至少包含name和data属性')
        }
      })
    }
    lineColorHandler()
    initChart()
  })
</script>
