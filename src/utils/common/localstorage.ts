import { LocalStorageKeys } from '@/enums/localstorage'
import { ConstEnums } from '@/enums/const-enums'

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
