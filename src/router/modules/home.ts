import type { interRouter } from '@/type/route.type'
const HOME: interRouter = {
  path: '/home',
  name: 'home',
  meta: {
    hideChildrenInMenu: true,
    icon: 'EditPen',
    title: '首页',
    hideBreadcrumb: false,
    hideMenu: false,
    keepChild: true
  },
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/Home.vue'),
      meta: {
        title: '首页',
        icon: '',
        hideMenu: true,
        hideBreadcrumb: true,
        hideChildrenInMenu: true,
        keepChild: false
      },
      children: []
    }
  ]
}
export default HOME
