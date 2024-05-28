import type { Router } from 'vue-router'
import { hasRole } from '@/utils'
import { LocalStorageKeys } from '@/enums/localstorage'
import { ElMessage } from 'element-plus'
import { useLocalStorage } from '@/hooks'
/** 初始化路由导航守卫 */
export const setupRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const userinfo = useLocalStorage<{ username: string; user_type: string }>(
      LocalStorageKeys.USERINFO
    )
    if (to.path === '/login') {
      next()
    } else {
      if (userinfo.value && userinfo.value.username) {
        if (
          !(to.meta as { role: string[] }).role ||
          ((to.meta as { role: string[] }).role &&
            hasRole(userinfo.value.user_type, (to.meta as { role: string[] }).role))
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
