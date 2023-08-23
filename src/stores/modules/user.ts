import { ref } from 'vue'
import { type UserType } from '#/userinfo'
import { LocalStorageKeys } from '@/enums/localstorage'
import { getItem, setItem, removeItem } from '@/utils'
import { defineStore } from 'pinia'

interface LoginRequestData {
  username: string
  password: string
}

export const useUserStore = defineStore('user', () => {
  const userinfo = ref<UserType | null>(getItem(LocalStorageKeys.USERINFO))
  /** 登录操作 */
  const login = async ({ username, password }: LoginRequestData) => {
    console.log('用户名:' + username, '密码:' + password)
    setItem(LocalStorageKeys.USERINFO, { username, password, user_type: 'admin' })
    userinfo.value = getItem(LocalStorageKeys.USERINFO)
  }
  /** 退出登录操作 */
  const logout = async () => {
    removeItem()
    userinfo.value = null
  }
  return { userinfo, login, logout }
})
