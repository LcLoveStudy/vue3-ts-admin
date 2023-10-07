/**
 * 判断是否是字符串
 * @param {*} targetString
 * @returns true||false
 */
export const isString = (targetString: unknown): boolean => {
  return typeof targetString === 'string'
}
