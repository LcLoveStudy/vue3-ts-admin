import { createRouter, createWebHistory } from 'vue-router'
import HOME from './modules/home'
import SETTINGS from './modules/settings'
import type { RouterType } from '@/type/route.type'
/**
 * routes为所有菜单栏内的所有路由
 */
export const routes = [HOME, SETTINGS]

let realRoute: Array<RouterType> = []
const initRoute = (routeArr: Array<RouterType>) => {
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
  history: createWebHistory(import.meta.env.BASE_URL),
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
