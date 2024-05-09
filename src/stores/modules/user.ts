import { type UserType } from '#/userinfo'
import { LocalStorageKeys } from '@/enums/localstorage'
import { removeItem } from '@/utils'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/hooks'
interface LoginRequestData {
  username: string
  password: string
}

export const useUserStore = defineStore('user', () => {
  const userinfo = useLocalStorage<UserType | null>(LocalStorageKeys.USERINFO)
  /** 登录操作 */
  const login = async ({ username, password }: LoginRequestData) => {
    userinfo.value = { username, password, user_type: 'admin' }
  }
  /** 退出登录操作 */
  const logout = async () => {
    removeItem()
    userinfo.value = null
  }
  return { userinfo, login, logout }
})
