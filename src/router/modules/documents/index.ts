import directives from './directives'
import components from './components'
import echarts from './echarts'
const DOCUMENTS: RouterType = {
  path: '/documents',
  name: 'documents',
  meta: {
    orderNo: 3,
    title: '使用手册',
    icon: 'CopyDocument',
    hideMenu: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [components, echarts, directives]
}
export default DOCUMENTS
