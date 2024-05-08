import type { App } from 'vue'
import LcPagination from './lc-pagination'
import LcUpload from './lc-upload/index.vue'
const myComps = [
  { name: 'LcPagination', component: LcPagination },
  { name: 'LcUpload', component: LcUpload }
]

/** 注册自定义组件 */
const useMyComponents = (app: App<Element>) => {
  myComps.forEach((comp) => {
    app.component(comp.name, comp.component)
  })
}

export default useMyComponents
