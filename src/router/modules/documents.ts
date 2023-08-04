import type { customRoute } from '#/vue-router'
const DOCUMENTS: customRoute = {
  path: '/documents',
  name: 'documents',
  meta: {
    title: '使用手册',
    icon: 'CopyDocument',
    hideMenu: false,
    keepChild: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role:['admin','superadmin','user']
  },
  children: [
    {
      path: '/documents/directive',
      redirect:'/directive/lazyshow',
      name: 'directive',
      meta: {
        title: '指令',
        hideMenu: false,
        icon: '',
        keepChild: true,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role:['admin','superadmin','user'],
      },
      children: [
        {
          path: '/documents/directive/lazyshow',
          name: 'lazyshow',
          component: () => import('@/views/documents/directive-show/lazyShow.vue'),
          meta: {
            title: '图片懒加载',
            hideMenu: false,
            icon: '',
            keepChild: false,
            hideBreadcrumb: false,
            hideChildrenInMenu: true,
            role:['admin','superadmin','user'],
          },
          children: []
        }, 
        {
          path: '/documents/directive/focusshow',
          name: 'focusshow',
          component: () => import('@/views/documents/directive-show/focusShow.vue'),
          meta: {
            title: '聚焦',
            hideMenu: false,
            keepChild: false,
            icon: '',
            hideBreadcrumb: false,
            hideChildrenInMenu: true,
            role:['admin','superadmin','user'],
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
            role:['admin','superadmin','user'],
          },
          children: []
        },
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
        role:['admin','superadmin','user'],
      },
      component:() => import('@/views/documents/utils/index.vue'),
      children:[]
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
        role:['admin','superadmin','user'],
      },
      component:() => import('@/views/documents/style-show/index.vue'),
      children:[]
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
        role:['admin','superadmin','user'],
      },
      children:[
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
            role:['admin','superadmin','user'],
          },
          children:[],
          component:()=>import('@/views/documents/code/richEditor.vue')
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
            role:['admin','superadmin','user'],
          },
          children:[],
          component:()=>import('@/views/documents/code/tableCode.vue')
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
            role:['admin','superadmin','user'],
          },
          children:[],
          component:()=>import('@/views/documents/code/formCode.vue')
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
            role:['admin','superadmin','user'],
          },
          children:[],
          component:()=>import('@/views/documents/code/radioCode.vue')
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
            role:['admin','superadmin','user'],
          },
          children:[],
          component:()=>import('@/views/documents/code/pagination.vue')
        }
      ]
    }
  ]
}
export default DOCUMENTS
