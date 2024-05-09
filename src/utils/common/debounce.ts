/**
 * 防抖函数,在相应的时间后会执行一次,如果再次触发会重新计时
 * @param cb 回调函数
 * @param delay 延迟的时间
 * @param immediate 是否立刻执行
 * @returns
 */
export const debounce = (cb: Function, delay: number, immediate: boolean = false) => {
  let timer: number = 0 // timer计算器
  let runNow = true // 是否立刻执行一次
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate && runNow) {
      // 如果立刻执行,执行完一次后将runNow改为false则不会再次立刻调用
      cb()
      timer = setTimeout(cb, delay)
      runNow = false
    } else {
      timer = setTimeout(cb, delay)
    }
  }
}
