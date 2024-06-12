import type { Router } from 'vue-router'
import { hasRole } from '@/utils'
import { LocalStorageKeys } from '@/enums/localstorage'
import { ElMessage } from 'element-plus'
import { useLocalStorage } from '@/hooks'
/** 初始化路由导航守卫 */
export const setupRouterGuards = (router: Router) => {
  router.beforeEach(
    (
      to: {
        path: string
        meta: any
      },
      from,
      next
    ) => {
      const userinfo = useLocalStorage<{ username: string; userType: string }>(
        LocalStorageKeys.USERINFO
      )
      if (to.path === '/login') return next()
      if (!userinfo.value || !userinfo.value.username) return next('/login')
      if (to.meta.role && !hasRole(userinfo.value.userType, to.meta.role)) {
        ElMessage.error('没有权限')
        return next('/')
      } else {
        return next()
      }
    }
  )
}
