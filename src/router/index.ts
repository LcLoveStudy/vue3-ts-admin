import { createRouter, createWebHashHistory } from 'vue-router'
import setupRouter from './setupRouter'
import { getItem } from '@/utils'
import { LocalStorageKeys } from '@/enums/localstorage'

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/index.ts', { eager: true })
/** routes为所有菜单栏内的所有路由 */
export const routes: RouterType[] = []
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  const routeItem = modList[0] as RouterType
  if (routeItem.meta.order) {
    routes[routeItem.meta.order - 1] = routeItem
  }
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('@/views/Layout.vue'),
      children: [
        ...(setupRouter(routes) as never),
        {
          path: '/404',
          name: '404',
          meta: {
            title: '404'
          },
          component: () => import('@/views/error-page/404.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      children: []
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

// 路由导航守卫，暂时工具用户名判断，请根据业务场景修改
router.beforeEach((to, from, next) => {
  const userinfo = getItem(LocalStorageKeys.USERINFO)
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

export default router
