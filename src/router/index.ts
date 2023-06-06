import { createRouter, createWebHashHistory } from 'vue-router'
import HOME from './modules/home'
import SETTINGS from './modules/settings'
import type { interRouter } from '@/type/route.type'
/**
 * routes为所有菜单栏内的所有路由
 */
export const routes = [HOME, SETTINGS]

let realRoute: Array<interRouter> = []
const initRoute = (routeArr: Array<interRouter>) => {
  routeArr.forEach((item) => {
    if (item.meta.keepChild) {
      realRoute.push(item)
    } else {
      realRoute.push({
        path: item.path,
        redirect: item?.redirect,
        name: item.name,
        meta: item.meta,
        children: [],
        component: item.component ? item.component : () => {}
      })
      if (item.children.length !== 0) {
        initRoute(item.children)
      }
    }
  })
}
initRoute(routes)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('@/views/Layout.vue'),
      children: realRoute as never
    }
  ]
})

export default router
