import { ref } from 'vue'
import { LocalStorageKeys } from '@/enums/localstorage'
import { getItem } from '@/utils'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/hooks'

export const useLayoutStore = defineStore('layout', () => {
  const asideMenuFold = ref(false)
  const menuPosition = useLocalStorage<'aside' | 'top'>(LocalStorageKeys.MENUPOSITION)
  /** 设置菜单位置 */
  const setMenuPosition = (position: 'aside' | 'top') => {
    menuPosition.value = position
  }
  /**
   * 获取菜单位置
   * @returns true:顶部;false:侧边
   */
  const getMenuPosition = () => {
    menuPosition.value = getItem(LocalStorageKeys.MENUPOSITION) || 'aside'
    return getItem<'top' | 'aside'>(LocalStorageKeys.MENUPOSITION) === 'top'
  }
  return { menuPosition, setMenuPosition, getMenuPosition, asideMenuFold }
})
