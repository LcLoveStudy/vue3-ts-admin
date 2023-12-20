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
  import { type PropType } from 'vue'
  import { initChartById, useReset, getRandomId } from '../../utils'
  import type { StackDataItemType, StackSeriesType } from './stack-chart'
  import { objectCopy } from '@/utils'
  // 获取随机id，防止一个页面多个echarts时，id重复
  const chartId = getRandomId()
  let chartDom: echarts.ECharts
  const props = defineProps({
    // x轴的坐标
    data: {
      type: Array as PropType<StackDataItemType[]>,
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
    colorList: {
      type: Array as PropType<string[]>
    },
    // 所有的字体颜色
    textColor: {
      type: String,
      default: '#000'
    },
    labelColor: {
      type: String,
      default: '#fff'
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
  /** 用于存储category的数组 */
  let categoryList: string[] = []
  let legendList: string[] = []
  let dataList: StackDataItemType[] = []
  /** 用于存储series的数组 */
  const seriesList: StackSeriesType[] = []

  /** 初始化chart */
  const initChart = () => {
    chartDom = initChartById(chartId)
    setOptions()
    useReset(chartDom)
  }
  const setOptions = () => {
    categoryHandler()
    specifyDataHandler()
    seriesHandler()
    chartDom.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type: 'scroll'
      },
      xAxis: {
        type: props.reverse ? 'value' : 'category',
        data: props.reverse ? [] : categoryList,
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
        z: props.reverse ? 0 : 3
      },
      grid: {
        left: '3%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: props.reverse ? 'category' : 'value',
        data: props.reverse ? categoryList : [],
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
        z: props.reverse ? 3 : 0
      },
      series: seriesList
    })
  }

  /** 处理category */
  const categoryHandler = () => {
    categoryList = []
    legendList = []
    props.data.forEach((item) => {
      categoryList.push(item.name)
      item.data.forEach((item) => {
        if (!legendList.includes(item.name)) {
          legendList.push(item.name)
        }
      })
    })
  }

  /** 规范化处理data,让没有数据的一项value为0，防止某一个缺失 */
  const specifyDataHandler = () => {
    dataList = objectCopy(props.data)
    dataList.forEach((item) => {
      const itemLegendList: string[] = []
      item.data.forEach((l) => {
        itemLegendList.push(l.name)
      })
      legendList.forEach((l) => {
        if (!itemLegendList.includes(l)) {
          item.data.push({ name: l, value: 0 })
        }
      })
    })
  }

  /** 处理series */
  const seriesHandler = () => {
    /** 将有的legend都初始化 */
    legendList.forEach((item, index) => {
      seriesList.push({
        name: item,
        type: 'bar',
        stack: 'total',
        color: props.colorList ? props.colorList[index] : '',
        label: {
          show: true,
          position: ['40%', '40%'],
          color: props.labelColor,
          fontSize: 12
        },
        emphasis: {
          focus: 'series'
        },
        data: (() => {
          const values: number[] = []
          dataList.forEach((data) => {
            const d = data.data.find((l) => l.name === item)
            values.push(d ? d.value : 0)
          })
          return values
        })()
      })
    })
  }

  onMounted(() => {
    initChart()
  })
</script>
