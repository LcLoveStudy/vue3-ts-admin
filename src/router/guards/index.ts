import type { Router } from 'vue-router'
import { hasRole } from '@/utils'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores'
/** 初始化路由导航守卫 */
export const setupRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const { token, userinfo } = useUserStore()
    if (to.path === '/login') return next()
    if (!token || !userinfo) return next('/login')
    const routerMeta: RouterMetaType = to.meta as RouterMetaType
    if (routerMeta.role && !hasRole(userinfo.userType, routerMeta.role)) {
      ElMessage.error('没有权限')
      return next('/')
    } else {
      return next()
    }
  })
}
