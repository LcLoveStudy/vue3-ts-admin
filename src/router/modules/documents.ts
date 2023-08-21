const DOCUMENTS: RouterType = {
  path: '/documents',
  name: 'documents',
  meta: {
    title: '使用手册',
    icon: 'CopyDocument',
    hideMenu: false,
    keepChild: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
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
    },
    {
      path: '/documents/utils',
      name: 'utils',
      meta: {
        title: '工具函数',
        hideMenu: false,
        icon: '',
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/documents/utils/index.vue'),
      children: []
    },
    {
      path: '/documents/style',
      name: 'style',
      meta: {
        title: '原子化css',
        hideMenu: false,
        keepChild: true,
        icon: '',
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      component: () => import('@/views/documents/style-show/index.vue'),
      children: []
    },
    {
      path: '/documents/code',
      name: 'code',
      meta: {
        title: '低代码组件',
        hideMenu: false,
        keepChild: true,
        icon: '',
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
            keepChild: true,
            icon: '',
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
            icon: '',
            keepChild: true,
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
            keepChild: true,
            hideBreadcrumb: false,
            icon: '',
            hideChildrenInMenu: false,
            role: ['admin', 'superadmin', 'user']
          },
          children: [],
          component: () => import('@/views/documents/code/form-code.vue')
        },
        {
          path: '/documents/code/radio',
          name: 'radio',
          meta: {
            title: '单选&多选',
            hideMenu: false,
            icon: '',
            keepChild: true,
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
            keepChild: true,
            icon: '',
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
            keepChild: true,
            icon: '',
            hideBreadcrumb: false,
            hideChildrenInMenu: false,
            role: ['admin', 'superadmin', 'user']
          },
          children: [],
          component: () => import('@/views/documents/code/select-code.vue')
        }
      ]
    }
  ]
}
export default DOCUMENTS
