import type { interRouter } from '@/type/route.type'
const SETTINGS: interRouter = {
  path: '/settings',
  name: 'settings',
  meta: {
    hideChildrenInMenu: false,
    icon: 'CopyDocument',
    title: '使用手册',
    hideBreadcrumb: false,
    hideMenu: false,
    keepChild: false
  },
  children: [
    {
      path: '/directiveShow',
      redirect:'/directiveShow/lazyshow',
      name: 'directive',
      meta: {
        title: '指令',
        icon: '',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        keepChild: true
      },
      children: [
        {
          path: '/directiveShow/lazyshow',
          name: 'lazyshow',
          component: () => import('@/views/settings/directiveShow/lazyShow.vue'),
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
          path: '/directiveShow/focusshow',
          name: 'focusshow',
          component: () => import('@/views/settings/directiveShow/focusShow.vue'),
          meta: {
            title: '聚焦',
            icon: '',
            hideMenu: false,
            hideBreadcrumb: false,
            hideChildrenInMenu: true,
            keepChild: false
          },
          children: []
        },
      ]
    }
  ]
}
export default SETTINGS
