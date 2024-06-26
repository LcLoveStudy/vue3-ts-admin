/**
 * 获取某个日期位于当年的第几天
 * @param {Date} date 日期对象
 * @example
 * dayOfYear(new Date('2023-2-1')) --> 32
 */
export const dayOfYear = (date: Date) => {
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
  )
}

/** 判断参数是否是Date或者是否能被转换为Date类型
 * @param {unknown} param 参数
 * @returns {boolean} 是否是Date类型
 */
export const isDateLike = (param: unknown): boolean => {
  if (param instanceof Date) return true
  const date = new Date(param as string | number)
  return date instanceof Date && !isNaN(date.getTime())
}
