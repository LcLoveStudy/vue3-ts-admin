/**
 * 是否是数组
 * @param target 目标
 * @returns true||false
 */
export const isArray = (target: unknown): boolean => {
  return target instanceof Array
}

/**
 * 返回一个被full填充的长度为length的数组
 * @param {number} length 返回数组的长度
 * @param {string | number | boolean} full 用于填充的参数
 * @return 数组
 */
export const arrFull = (
  length: number,
  full: string | number | boolean
): Array<string | number | boolean> => {
  return length >= 0 && ['string', 'number', 'boolean'].includes(typeof full)
    ? new Array(length).fill(full)
    : []
}
