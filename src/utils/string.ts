/**
 * 切割字符串方法
 * @param {string} target 目标字符串
 * @param {string} flat 以该字符切割
 * @param {number} index 想要获取的下标
 * @returns 如果下标存在则返回对应字符，目标不是字符串则返回'目标不是字符串'，否则返回undefined
 * @example stringSplit('2023-05-31','-',1)  返回05
 * @email dotb116393@163.com
 * @author lichang
 */
export const stringSplit = (target: any, flat: string, index: number): string => {
  return isString(target) ? target.split(flat)[index] : '目标不是字符串'
}

/**
 * 判断是否是字符串
 * @param {*} targetString
 * @returns true||false
 */
export const isString = (targetString: unknown): boolean => {
  return typeof targetString === 'string'
}
