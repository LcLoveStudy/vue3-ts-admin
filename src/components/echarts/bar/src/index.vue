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
  import {
    type RuleType,
    type SeriesType,
    type SingBarDataType,
    type MultiBarDataType
  } from './bar-chart'
  import * as echarts from 'echarts'
  import type { PropType } from 'vue'

  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = Math.random().toString()
  const props = defineProps({
    // x轴的坐标
    data: {
      type: Array as PropType<SingBarDataType[] | MultiBarDataType[]>,
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
    // 柱子颜色规则
    rules: {
      type: Array as PropType<RuleType[]>
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

  // 图表键名
  let xAxisData: string[] = []

  // 判断类型
  let type = 'bar'

  // 颜色列表
  const colorList = ref<string[]>([])

  // 当type为bar时用于显示series
  const chartValue = ref<
    {
      itemStyle: {
        color: string
      }
      value: number
    }[]
  >([])

  // 当type为bars时用于显示series
  const series = ref<Array<{ type: string } & SeriesType>>([])
  const chartDom = ref()
  /** 初始化chart */
  const initChart = () => {
    chartDom.value = echarts.init(document.getElementById(chartId) as HTMLDivElement)
    setOptions()
  }
  const setOptions = () => {
    chartDom.value.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      color: colorList.value,
      legend: {
        type: 'scroll'
      },
      xAxis: {
        type: props.reverse ? 'value' : 'category',
        data: props.reverse ? [] : xAxisData,
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
      grid: {
        left: '3%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: props.reverse ? 'category' : 'value',
        data: props.reverse ? xAxisData : [],
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
      series:
        type === 'bars'
          ? series.value
          : [
              {
                data: chartValue.value,
                type: 'bar',
                label: {
                  show: true,
                  position: props.reverse ? 'right' : 'top',
                  color: props.textColor,
                  fontSize: 12
                }
              }
            ]
    })
  }
  /** 对传递来的数据进行处理 */
  const initPropsDataHandler = () => {
    xAxisData = []
    props.data.forEach((item) => {
      // 通过是否有series属性判断是单柱还是多柱
      if (!Object.keys(item).includes('series')) {
        type = 'bar'
        xAxisData.push((item as SingBarDataType).name)
      } else {
        type = 'bars'
        const muliteItem = item as MultiBarDataType
        xAxisData = muliteItem.names
        series.value.push({
          type: 'bar',
          name: muliteItem.series,
          data: muliteItem.values,
          label: {
            show: true,
            position: props.reverse ? 'right' : 'top',
            color: props.textColor,
            fontSize: 12
          }
        })
      }
    })
  }

  /** 处理柱子的颜色 */
  const barColorHandler = () => {
    if (type === 'bar') {
      // 处理每个柱子的颜色
      ;(props.data as SingBarDataType[]).forEach((item) => {
        chartValue.value.push({
          itemStyle: {
            color: item.color
              ? (item.color as string)
              : props.barColor
              ? props.barColor
              : useColor()
          },
          value: item.value
        })
      })
      // 通过规则设置柱子颜色
      if (props?.rules) {
        props.rules.forEach((rule) => {
          chartValue.value.forEach((item) => {
            if (item.value >= rule.min && item.value <= rule.max) {
              item.itemStyle.color = rule.color
            }
          })
        })
      }
    } else if (type === 'bars') {
      // 对多柱图的颜色进行处理，是否指定了颜色，若没有就随机
      ;(props.data as MultiBarDataType[]).forEach((item) => {
        if (item.color) {
          colorList.value.push(item.color as string)
        } else {
          for (let i = 0; i <= props.data!.length - 1; i++) {
            colorList.value.push(useColor())
          }
        }
      })
    }
  }
  watch(
    () => props.data,
    () => {
      initPropsDataHandler()
      barColorHandler()
      setOptions()
    },
    {
      deep: true
    }
  )

  onMounted(() => {
    initPropsDataHandler()
    barColorHandler()
    initChart()
  })
</script>
