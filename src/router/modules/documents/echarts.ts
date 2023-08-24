export default {
  path: '/documents/echarts',
  redirect: '/documents/echarts/bar',
  name: 'echarts',
  meta: {
    title: '图表',
    hideMenu: false,
    keepChild: true,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/documents/echarts/bar',
      name: 'bar',
      component: () => import('@/views/documents/chart/bar-show.vue'),
      meta: {
        title: '柱状图Bar',
        hideMenu: false,
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    },
    {
      path: '/documents/echarts/bars',
      name: 'bars',
      component: () => import('@/views/documents/chart/bars-show.vue'),
      meta: {
        title: '多柱状图Bars',
        hideMenu: false,
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: true,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    },
    {
      path: '/documents/echarts/line',
      name: 'line',
      component: () => import('@/views/documents/chart/line-show.vue'),
      meta: {
        title: '折线图Line',
        hideMenu: false,
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    },
    {
      path: '/documents/echarts/lines',
      name: 'lines',
      component: () => import('@/views/documents/chart/lines-show.vue'),
      meta: {
        title: '多折线图Lines',
        hideMenu: false,
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    },
    {
      path: '/documents/echarts/pie',
      name: 'pie',
      component: () => import('@/views/documents/chart/pie-show.vue'),
      meta: {
        title: '饼状图Pie',
        hideMenu: false,
        keepChild: false,
        hideBreadcrumb: false,
        hideChildrenInMenu: false,
        role: ['admin', 'superadmin', 'user']
      },
      children: []
    }
  ]
}
