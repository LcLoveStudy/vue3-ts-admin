import { createRouter, createWebHashHistory } from 'vue-router'
import setupRouter from './setupRouter'
import { setupRouterGuards } from './guards'

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/index.ts', { eager: true })
/** routes为所有菜单栏内的所有路由 */
export const routes: RouterType[] = []
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  const routeItem = modList[0] as RouterType
  if (routeItem.meta.orderNo) {
    routes[routeItem.meta.orderNo - 1] = routeItem
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
      meta: {
        title: '登录'
      },
      component: () => import('@/views/login/index.vue'),
      children: []
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

// 初始化路由导航守卫
setupRouterGuards(router)

export default router
