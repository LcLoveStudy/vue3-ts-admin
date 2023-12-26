const LEAFLET: RouterType = {
  path: '/leaflet',
  name: 'leaflet',
  meta: {
    orderNo: 4,
    title: 'Leaflet',
    icon: 'MapLocation',
    hideMenu: false,
    keepChild: true,
    hideBreadcrumb: false,
    hideChildrenInMenu: true,
    role: ['admin', 'superadmin', 'user']
  },
  children: [
    {
      path: '/leaflet',
      name: 'leaflet',
      component: () => import('@/views/sys/leaflet/index.vue'),
      meta: {
        title: 'leaflet',
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
export default LEAFLET
