import type { RouterType } from '#/vue-router'
const realRoute: Array<RouterType> = []
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
const createRoute = (routeArr: Array<RouterType>) => {
  initRoute(routeArr)
  return realRoute
}

export default createRoute
