/**
 * 防抖函数,在相应的时间后会执行一次,如果再次触发会重新计时
 * @param fn 回调函数
 * @param delay 延迟的时间
 * @returns
 */
export const debounce = (fn: Function, delay = 500) => {
  let timer: number | null = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}
