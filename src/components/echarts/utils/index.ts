import * as echarts from 'echarts'
/**
 * 通过id传回一个Echart实例
 * @param chartId dom的id
 * @returns echarts实例
 */
export const initChartById = (chartId: string): echarts.ECharts => {
  return echarts.init(document.getElementById(chartId) as HTMLDivElement)
}
/** window添加监听窗口大小改变事件 */
export const addReset = (echartDom: echarts.ECharts) => {
  window.addEventListener('resize', () => {
    echartDom.resize()
  })
}
/** window移除监听窗口大小改变事件 */
export const removeReset = (echartDom: echarts.ECharts) => {
  window.removeEventListener('resize', () => {
    echartDom.resize()
  })
}
