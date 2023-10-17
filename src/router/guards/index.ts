import type { Router } from 'vue-router'
import { getItem } from '@/utils'
import { LocalStorageKeys } from '@/enums/localstorage'
/** 初始化路由导航守卫 */
export const setupRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const userinfo = getItem<{ username: string }>(LocalStorageKeys.USERINFO)
    if (to.path === '/login') {
      next()
    } else {
      if (userinfo && userinfo.username) {
        next()
      } else {
        next('/login')
      }
    }
  })
}
