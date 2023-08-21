/**
 * 获取变量的类型
 * @param variable 目标变量
 * @returns 变量类型
 * @example getType({}) //object
 */
export const getType = (variable: unknown): string => {
  return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
}
