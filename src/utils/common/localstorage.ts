import { LocalStorageKeys } from '@/enums/localstorage'
import { ConstEnums } from '@/enums/const-enums'
/**
 * 用于在localstorage中存储item的函数
 * @param {*} key   键名
 * @param {*} value 值
 * @example setItem('userid','12345')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const setItem = (key: LocalStorageKeys, value: any) => {
  localStorage.setItem(key + ConstEnums.PROJECT_NAME, JSON.stringify(value))
}

/**
 * 用于获取当前项目存储在localstorage中的item，当item不存在时返回空字符串''
 * @param {*} key 要获取的键名
 * @returns 当前项目的item值
 * @example getItem('userid')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const getItem = <T>(key: LocalStorageKeys): T => {
  return JSON.parse(localStorage.getItem(key + ConstEnums.PROJECT_NAME) || JSON.stringify(''))
}

/**
 * 从localstorage中删除item
 * @param {*} key 不传则删除所有｜｜要删除的键名
 * @example removeItem('userid')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const removeItem = (key?: LocalStorageKeys) => {
  if (key) {
    localStorage.removeItem(key + ConstEnums.PROJECT_NAME)
  } else {
    localStorage.clear()
  }
}
