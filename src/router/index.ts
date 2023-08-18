import { createRouter, createWebHashHistory } from 'vue-router'
import HOME from './modules/home'
import DOCUMENTS from './modules/documents'
import createRoute from './createRoute'
import { getItem } from '@/utils'
/**
 * routes为所有菜单栏内的所有路由
 */
export const routes = [HOME, DOCUMENTS]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('@/views/Layout.vue'),
      children: [
        ...(createRoute(routes) as never),
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

router.beforeEach((to, from, next) => {
  const userinfo = getItem('userinfo')
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
