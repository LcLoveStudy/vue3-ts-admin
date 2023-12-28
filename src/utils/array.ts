/**
 * 对数组排序，不改变原数组
 * @param {Array} arr 目标数组
 * @param {string} valueName 对象数组中的某个值进行排序;填了此项时，flag必填
 * @param {boolean} flag 不填或者true是从升序；false为降序;
 * @returns 返回排序后的新数组；flase:数组为空不是数组
 * @example 对this.arr中每个对象的time属性进行降序排序
 * const newArr = arrSort(oldArr,false,'time')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const arrSort = <T>(arr: Array<T>, valueName: string, flag: boolean): Array<T> | boolean => {
  if (flag === undefined) {
    flag = true
  }
  // 判断是否是数组
  if (isArray(arr)) {
    // 判断数组长度是否为0
    if (arr.length !== 0) {
      let newArr = []
      newArr = JSON.parse(JSON.stringify(arr)) as Array<T>
      // 对属性排序
      if (valueName) {
        if (flag) {
          newArr.sort((a: any, b: any) => Date.parse(a[valueName]) - Date.parse(b[valueName]))
        } else {
          newArr.sort((a: any, b: any) => Date.parse(b[valueName]) - Date.parse(a[valueName]))
        }
      } else {
        if (flag) {
          newArr.sort((a: any, b: any) => a - b)
        } else {
          newArr.sort((a: any, b: any) => b - a)
        }
      }
      return newArr
    } else {
      return false
    }
  } else {
    return false
  }
}

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
