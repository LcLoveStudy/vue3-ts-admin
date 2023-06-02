import type { interRouter } from '@/type/route.type'
const SETTINGS: interRouter = {
  path: '/settings',
  name: 'settings',
  meta: {
    hideChildrenInMenu: false,
    icon: 'Setting',
    title: '设置',
    hideBreadcrumb: false,
    hideMenu: false,
    keepChild: false
  },
  children: [
    {
      path: '/lazyshow',
      name: 'lange',
      component: () => import('@/views/settings/lazyShow.vue'),
      meta: {
        title: '图片懒加载',
        icon: '',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        keepChild: false
      },
      children: []
    },
    {
      path: '/hello',
      name: 'hello',
      meta: {
        title: '你好',
        icon: '',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        keepChild: false
      },
      children: [
        {
          path: '/hello1',
          name: 'hello1',
          component: () => import('@/views/settings/holle.vue'),
          meta: {
            title: '你好1',
            icon: '',
            hideMenu: false,
            hideChildrenInMenu: true,
            hideBreadcrumb: false,
            keepChild: false
          },
          children: []
        }
      ]
    }
  ]
}
export default SETTINGS
