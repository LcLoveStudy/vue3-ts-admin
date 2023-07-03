import type { interRouter } from '@/type/route.type'
const DOCUMENTS: interRouter = {
  path: '/documents',
  name: 'documents',
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
      path: '/directive',
      redirect:'/directive/lazyshow',
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
          path: '/directive/lazyshow',
          name: 'lazyshow',
          component: () => import('@/views/documents/directiveShow/lazyShow.vue'),
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
          path: '/directive/focusshow',
          name: 'focusshow',
          component: () => import('@/views/documents/directiveShow/focusShow.vue'),
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
        {
          path: '/directive/clickoutside',
          name: 'clickoutside',
          component: () => import('@/views/documents/directiveShow/clickoutside.vue'),
          meta: {
            title: '点击外部',
            icon: '',
            hideMenu: false,
            hideBreadcrumb: false,
            hideChildrenInMenu: true,
            keepChild: false
          },
          children: []
        },
      ]
    },
    {
      path: '/utils',
      name: 'utils',
      meta: {
        title: '工具函数',
        icon: '',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        keepChild: true
      },
      component:() => import('@/views/documents/utils/index.vue'),
      children:[]
    },
    {
      path: '/style',
      name: 'style',
      meta: {
        title: '原子化css',
        icon: '',
        hideMenu: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        keepChild: true
      },
      component:() => import('@/views/documents/styleShow/index.vue'),
      children:[]
    }
  ]
}
export default DOCUMENTS
