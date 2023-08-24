export default {
  path: '/documents/code',
  redirect: '/documents/code/table',
  name: 'code',
  meta: {
    title: '低代码组件',
    hideMenu: false,
    keepChild: true,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
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
      component: () => import('@/views/documents/code/richEditor.vue')
    },
    {
      path: '/documents/code/table',
      name: 'table',
      meta: {
        title: '表格Table',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/documents/code/table/index.vue')
    },
    {
      path: '/documents/code/form',
      name: 'form',
      meta: {
        title: '表单Form',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/documents/code/form/index.vue')
    },
    {
      path: '/documents/code/radio',
      name: 'radio',
      meta: {
        title: '单选&多选',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/documents/code/radio-code.vue')
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
      component: () => import('@/views/documents/code/pagination.vue')
    },
    {
      path: '/documents/code/select',
      name: 'select',
      meta: {
        title: '下拉框Select',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: [],
      component: () => import('@/views/documents/code/select-code.vue')
    }
  ]
}
