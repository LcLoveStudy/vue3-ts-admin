import type { interRouter } from '@/type/vue-router'
let realRoute: Array<interRouter> = []
const initRoute = (routeArr: Array<interRouter>) => {
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
const createRoute = (routeArr: Array<interRouter>)=>{
  initRoute(routeArr)
  return realRoute
}

export default createRoute