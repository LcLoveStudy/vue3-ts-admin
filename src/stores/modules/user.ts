import { ref } from 'vue'
import { type UserType } from '#/userinfo'
import { LocalStorageKeys } from '#/localstorage'
import { getItem, setItem, removeItem } from '@/utils'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref<UserType | null>(getItem(LocalStorageKeys.USERINFO))
  /** 登录操作 */
  const login = async ({ username, password }: UserType) => {
    await new Promise(() => {})
    console.log('用户名:' + username, '密码:' + password)
    setItem(LocalStorageKeys.USERINFO, { username, password })
    userinfo.value = getItem(LocalStorageKeys.USERINFO)
  }
  /** 退出登录操作 */
  const logout = async () => {
    await new Promise(() => {})
    removeItem()
    userinfo.value = null
  }
  return { userinfo, login, logout }
})
