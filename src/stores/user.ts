import { ref } from 'vue'
import { type UserType } from '#/userinfo'
import { getItem } from '@/utils'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref<UserType>(getItem('userinfo'))
  return { userinfo }
})
