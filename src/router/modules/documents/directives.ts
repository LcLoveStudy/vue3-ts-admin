export default {
  path: '/documents/directive',
  redirect: '/directive/lazyshow',
  name: 'directive',
  meta: {
    title: '指令',
    hideMenu: false,
    icon: '',
    keepChild: true,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/documents/directive/lazy-show',
      name: 'lazyshow',
      component: () => import('@/views/documents/directive-show/lazy-show.vue'),
      meta: {
        title: '图片懒加载',
        hideMenu: false,
        icon: '',
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    },
    {
      path: '/documents/directive/focus-show',
      name: 'focusshow',
      component: () => import('@/views/documents/directive-show/focus-show.vue'),
      meta: {
        title: '聚焦',
        hideMenu: false,
        keepChild: false,
        icon: '',
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    },
    {
      path: '/documents/directive/clickoutside',
      name: 'clickoutside',
      component: () => import('@/views/documents/directive-show/clickoutside.vue'),
      meta: {
        title: '点击外部',
        hideMenu: false,
        keepChild: false,
        icon: '',
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    }
  ]
}
