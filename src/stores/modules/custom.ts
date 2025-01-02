import { ref } from 'vue'
import { LocalStorageKeys } from '@/enums/localstorage'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/hooks'

export const useCustomStore = defineStore('custom', () => {
  const asideMenuFold = ref(false)
  const theme = useLocalStorage<'dark' | 'light'>(LocalStorageKeys.THEME, 'light') // 主题色
  const menuPosition = useLocalStorage<'aside' | 'top'>(LocalStorageKeys.MENUPOSITION, 'aside')
  return { menuPosition, asideMenuFold, theme }
})
