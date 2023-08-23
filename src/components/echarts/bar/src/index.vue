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
  import { type RuleType, type SeriesType } from './bar-chart'
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
      color: colorList.value,
      legend: {
        type: 'scroll'
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
      grid: {
        left: '3%',
        bottom: '3%',
        containLabel: true
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
      series:
        type === 'bars'
          ? series.value
          : [
              {
                data: chartValue.value,
                type: 'bar',
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      position: props.reverse ? 'right' : 'top',
                      textStyle: {
                        color: props.textColor,
                        fontSize: 16
                      }
                    }
                  }
                }
              }
            ]
    })
  }

  /** 处理柱子的颜色 */
  const barColorHandler = () => {
    if (type === 'bar') {
      // 处理每个柱子的颜色
      props.value.forEach((item) => {
        chartValue.value.push({
          itemStyle: {
            color: props.barColor ? props.barColor : useColor()
          },
          value: item as number
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
      ;(props.value as SeriesType[]).forEach((item) => {
        series.value.push({
          type: 'bar',
          name: item.name,
          data: item.data,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: props.reverse ? 'right' : 'top',
                textStyle: {
                  color: props.textColor,
                  fontSize: 12
                }
              }
            }
          }
        })
        if (item.color) {
          colorList.value.push(item.color)
        }
      })
      for (let i = 0; i <= props.value.length - 1; i++) {
        colorList.value.push(useColor())
      }
    }
  }

  onMounted(() => {
    getType(props.value[0]) === 'number' ? (type = 'bar') : (type = 'bars')
    if (type === 'bars') {
      ;(props.value as SeriesType[]).forEach((item) => {
        if (!item.name || !item.data) {
          console.error('多柱子柱状图的value每项应该至少包含name和data属性')
        }
      })
    }
    barColorHandler()
    initChart()
  })
</script>
