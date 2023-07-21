import { ref } from 'vue'
import {type userInterface} from '@/type/userinfo'
import { getItem } from '@/utils'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref<userInterface>(getItem('userinfo'))
  return { userinfo }
})
