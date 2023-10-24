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
  import { type MultiLineSeriesType, type SingleLineDataType } from './line-chart'
  import * as echarts from 'echarts'
  import type { PropType } from 'vue'
  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = Math.random().toString()
  const props = defineProps({
    // x轴的坐标
    data: {
      type: Array as PropType<SingleLineDataType[] | MultiLineSeriesType[]>,
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
  /** x轴的数据 */
  let xData: string[] = []
  const singleLineValue: number[] = []

  // 判断是多条还是一条
  let type = 'line'
  // 用于显示多折线的legend
  const legend = {
    type: 'scroll',
    data: [] as string[]
  }
  // 用于显示多折线的series
  let series: Array<{
    name: string
    data: number[]
    label: {}
    type: string
    stack: string
    smooth: boolean
    areaStyle: object | null
    emphasis: { focus: string }
  }> = []
  // 用于显示多折线的颜色
  const colorList: string[] = []
  let chartDom: echarts.ECharts
  /** 初始化chart */
  const initChart = () => {
    chartDom = echarts.init(document.getElementById(chartId) as HTMLDivElement)
    setOptions()
    window.addEventListener('resize', resetDom)
  }

  /** 重置图表大小 */
  const resetDom = () => {
    chartDom.resize()
  }

  /** 设置图表配置和数据 */
  const setOptions = () => {
    chartDom.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend:
        type === 'lines'
          ? legend
          : {
              type: 'scroll'
            },
      xAxis: {
        type: 'category',
        data: xData,
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
                data: singleLineValue,
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

  /** 处理数据 */
  const propDataHandler = () => {
    series = []
    xData = []
    props.data.forEach((item) => {
      if (!Object.keys(item).includes('series')) {
        const singleItem = item as SingleLineDataType
        type = 'line'
        xData.push(singleItem.name)
        singleLineValue.push(singleItem.value)
      } else {
        const multiItem = item as MultiLineSeriesType
        type = 'lines'
        legend.data.push(multiItem.series)
        xData = multiItem.names
        series.push({
          name: multiItem.series,
          type: 'line',
          stack: 'Total',
          data: multiItem.values,
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
        if (multiItem.color) {
          colorList.push(multiItem.color)
        }
      }
    })
  }

  /** 处理折线的颜色 */
  const lineColorHandler = () => {
    if (type === 'line' && props.lineColor) {
      colorList.push(props.lineColor)
    }
    for (let i = 0; i <= singleLineValue.length - 1; i++) {
      colorList.push(useColor())
    }
  }
  watch(
    () => props.data,
    () => {
      propDataHandler()
      lineColorHandler()
      setOptions()
    },
    {
      deep: true
    }
  )

  onMounted(() => {
    propDataHandler()
    lineColorHandler()
    initChart()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resetDom)
  })
</script>
