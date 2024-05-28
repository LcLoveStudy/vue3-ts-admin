import { ConstEnums } from '@/enums/const-enums'
import type { LocalStorageKeys } from '@/enums/localstorage'

/**
 * 传入key，返回对应的localstorage值
 * @param key
 * @returns 返回一个ref对象，修改该对象会同步到localstorage中，赋值为null时清空该localstorage
 */
export const useLocalStorage = <T>(key: LocalStorageKeys, defaultValue?: T): Ref<T | undefined> => {
  const storageItem = ref<T>()
  const initValue = localStorage.getItem(key + ConstEnums.PROJECT_NAME)
  if (initValue === null && defaultValue) {
    storageItem.value = defaultValue
  } else if (initValue) {
    storageItem.value = JSON.parse(initValue)
  }
  watch(
    () => storageItem.value,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key + ConstEnums.PROJECT_NAME)
      } else {
        localStorage.setItem(key + ConstEnums.PROJECT_NAME, JSON.stringify(newValue))
      }
    },
    {
      immediate: true,
      deep: true
    }
  )
  return storageItem
}
