import { ref } from 'vue'
import { type UserType } from '#/userinfo'
import { LocalStorageKeys } from '#/localstorage'
import { getItem } from '@/utils'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref<UserType>(getItem(LocalStorageKeys.USERINFO))
  return { userinfo }
})
