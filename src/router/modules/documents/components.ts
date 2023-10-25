export default {
  path: '/documents/code',
  redirect: '/documents/code/table',
  name: 'code',
  meta: {
    title: '组件封装',
    hideMenu: false,
    keepChild: true,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/documents/code/slider-verify',
      name: 'slider-verify',
      meta: {
        title: '滑块验证SliderVerify',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/sys/documents/code/slider-verify.vue')
    },
    {
      path: '/documents/code/rich',
      name: 'rich',
      meta: {
        title: '富文本RichEditor',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/sys/documents/code/richEditor.vue')
    },
    {
      path: '/documents/code/pagination',
      name: 'pagination',
      meta: {
        title: '分页Pagination',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/sys/documents/code/pagination.vue')
    },
    {
      path: '/documents/code/count-to',
      name: 'count-to',
      meta: {
        title: '数字动画CountTo',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/sys/documents/code/count-to-code.vue')
    }
  ]
}
