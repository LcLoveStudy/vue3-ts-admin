const NOTFOUND: RouterType = {
  path: '/404',
  name: 'notFound',
  meta: {
    orderNo: 1,
    title: '页面找不到啦',
    icon: '',
    hideMenu: true,
    keepChild: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: true,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/404',
      name: 'notFound',
      component: () => import('@/views/sys/error-page/404.vue'),
      meta: {
        title: '页面找不到啦',
        hideMenu: true,
        keepChild: false,
        hideBreadcrumb: true,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    }
  ]
}
export default NOTFOUND
