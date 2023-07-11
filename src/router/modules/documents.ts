import type { interRouter } from '@/type/vue-router'
const DOCUMENTS: interRouter = {
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
        icon: '',
        hideMenu: false,
        keepChild: true,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role:['admin','superadmin','user'],
      },
      children: [
        {
          path: '/documents/directive/lazyshow',
          name: 'lazyshow',
          component: () => import('@/views/documents/directiveShow/lazyShow.vue'),
          meta: {
            title: '图片懒加载',
            icon: '',
            hideMenu: false,
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
          component: () => import('@/views/documents/directiveShow/focusShow.vue'),
          meta: {
            title: '聚焦',
            icon: '',
            hideMenu: false,
            keepChild: false,
            hideBreadcrumb: false,
            hideChildrenInMenu: true,
            role:['admin','superadmin','user'],
          },
          children: []
        },
        {
          path: '/documents/directive/clickoutside',
          name: 'clickoutside',
          component: () => import('@/views/documents/directiveShow/clickoutside.vue'),
          meta: {
            title: '点击外部',
            icon: '',
            hideMenu: false,
            keepChild: false,
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
        icon: '',
        hideMenu: false,
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
        icon: '',
        hideMenu: false,
        keepChild: true,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role:['admin','superadmin','user'],
      },
      component:() => import('@/views/documents/styleShow/index.vue'),
      children:[]
    },
    {
      path: '/documents/code',
      name: 'code',
      meta: {
        title: '低代码组件',
        icon: '',
        hideMenu: false,
        keepChild: true,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role:['admin','superadmin','user'],
      },
      children:[
        {
          path: '/documents/code/table',
          name: 'table',
          meta: {
            title: '表格Table',
            icon: '',
            hideMenu: false,
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
            icon: '',
            hideMenu: false,
            keepChild: true,
            hideBreadcrumb: false,
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
            title: '单选Radio',
            icon: '',
            hideMenu: false,
            keepChild: true,
            hideBreadcrumb: false,
            hideChildrenInMenu: false,
            role:['admin','superadmin','user'],
          },
          children:[],
          component:()=>import('@/views/documents/code/radioCode.vue')
        }
      ]
    }
  ]
}
export default DOCUMENTS
