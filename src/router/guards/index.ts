import type { Router } from 'vue-router'
import { getItem, hasRole } from '@/utils'
import { LocalStorageKeys } from '@/enums/localstorage'
import { ElMessage } from 'element-plus'
/** 初始化路由导航守卫 */
export const setupRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const userinfo = getItem<{ username: string; user_type: string }>(LocalStorageKeys.USERINFO)
    if (to.path === '/login') {
      next()
    } else {
      if (userinfo && userinfo.username) {
        if (
          !(to.meta as { role: string[] }).role ||
          ((to.meta as { role: string[] }).role &&
            hasRole(userinfo.user_type, (to.meta as { role: string[] }).role))
        ) {
          next()
        } else {
          next('/')
          ElMessage.error('没有权限')
        }
      } else {
        next('/login')
      }
    }
  })
}
