const realRoute: Array<RouterType> = []
/** 对菜单参数进行处理，生成合理的路由 */
const initRoute = (routeArr: Array<RouterType>) => {
  routeArr.forEach((item) => {
    if (item.meta.keepChild) {
      realRoute.push(item)
    } else {
      realRoute.push({
        path: item.path,
        redirect: item?.redirect,
        name: item.name,
        meta: item.meta,
        children: [],
        component: item.component ? item.component : () => {}
      })
      if (item.children.length !== 0) {
        initRoute(item.children)
      }
    }
  })
}
const setupRouter = (routeArr: Array<RouterType>) => {
  initRoute(routeArr)
  return realRoute
}

export default setupRouter
