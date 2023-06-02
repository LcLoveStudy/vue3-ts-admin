import type { RouterType } from '@/type/route.type'
const SETTINGS: RouterType = {
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
      path: '/settings/lange',
      name: 'lange',
      component: () => import('@/views/settings/lange.vue'),
      meta: {
        title: '语言',
        icon: '',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        keepChild: false
      },
      children: []
    },
    {
      path: '/settings/hello',
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
          path: '/settings/hello1',
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
