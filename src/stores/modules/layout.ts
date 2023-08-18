import { ref } from 'vue'
import { LocalStorageKeys } from '#/localstorage'
import { getItem, setItem } from '@/utils'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const menuPosition = ref<'aside' | 'top'>(getItem(LocalStorageKeys.MENUPOSITION) || 'aside')
  /** 设置菜单位置 */
  const setMenuPosition = (position: 'aside' | 'top') => {
    setItem(LocalStorageKeys.MENUPOSITION, position)
    menuPosition.value = position
  }
  /** 获取菜单位置 */
  const getMenuPosition = () => {
    menuPosition.value = getItem(LocalStorageKeys.MENUPOSITION) || 'aside'
    return getItem(LocalStorageKeys.MENUPOSITION) === 'top'
  }
  return { menuPosition, setMenuPosition, getMenuPosition }
})
