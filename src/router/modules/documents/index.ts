import directives from './directives'
import components from './components'
const DOCUMENTS: RouterType = {
  path: '/documents',
  name: 'documents',
  meta: {
    orderNo: 3,
    title: '内置工具',
    icon: 'CopyDocument',
    hideMenu: false,
    hideBreadcrumb: false,
    hideChildrenInMenu: false,
    role: ['admin', 'superadmin', 'user']
  },
  children: [components, directives]
}
export default DOCUMENTS
