import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue'
/**
 * 通过id传回一个Echart实例
 * @param chartId dom的id
 * @returns echarts实例
 */
export const initChartById = (chartId: string): echarts.ECharts => {
  return echarts.init(document.getElementById(chartId) as HTMLDivElement)
}

/**
 * 监听屏幕大小改变的hook
 * @param echartDom echarts实例
 */
export const useReset = (echartDom: echarts.ECharts) => {
  window.addEventListener('resize', () => {
    echartDom.resize()
  })
  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      echartDom.resize()
    })
  })
}
/** 获取随机id */
export const getRandomId = () => Math.random().toString()
