/**
 * 数组去除重复项
 * @param {Array} arr  目标数组
 * @return 去重后的数组;false:参数为非数组数据结构
 * @example const newArr = arrNoRepeat(myArr)
 * @author 李畅
 * @emial dotb116393@163.com
 */
export const arrNoRepeat = (arr: Array<any>): Array<any> | boolean => {
  if (arr instanceof Array) {
    return [...new Set(arr)]
  } else {
    return false
  }
}

/**
 * 对数组排序，不改变原数组
 * @param {Array} arr 目标数组
 * @param {boolean} flag 不填或者true是从升序；false为降序;
 * @param {string} valueName 对象数组中的某个值进行排序;填了此项时，flag必填
 * @returns 返回排序后的新数组；flase:数组为空不是数组
 * @example 对this.arr中每个对象的time属性进行降序排序
 * const newArr = arrSort(oldArr,false,'time')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const arrSort = (
  arr: Array<any>,
  flag: boolean,
  valueName: string
): Array<any> | boolean => {
  if (flag == undefined) {
    flag = true
  }
  //判断是否是数组
  if (isArray(arr)) {
    //判断数组长度是否为0
    if (arr.length !== 0) {
      let newArr = []
      newArr = JSON.parse(JSON.stringify(arr))
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
 * 数组合并（去重）
 * @param {Array} 数组1
 * @param {Array} 数组2
 * @returns 合并后的数组
 */
export const arrMerge = (
  arr1: Array<string | number>,
  arr2: Array<string | number>
): Array<string | number> => {
  return [...new Set([...arr1, ...arr2])]
}
