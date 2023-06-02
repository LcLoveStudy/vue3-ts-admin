// 路由的类型规范
/**
 * path:路径(如果有子路由需要和子路由第一项保持一致)
 * name:名称(要和路径最后一级保持一致)
 * component:要渲染的组件
 * meta:{
 *  hideChildrenInMenu:是否在菜单中隐藏子项
 *  icon：图标
 *  title：菜单上显示的名称
 *  hideMenu:是否在菜单上隐藏
 *  hideBreadcrumb：是否在面包屑上隐藏
 *  keepChild : 是否是嵌套路由
 * }
 * children:子路由配置
 */
export interface RouterType {
  path: String
  name: String
  component?: Function
  meta: {
    hideChildrenInMenu: Boolean
    icon: String
    title: String
    hideMenu: Boolean
    hideBreadcrumb: Boolean
    keepChild: Boolean
  }
  children: Array<RouterType>
}
