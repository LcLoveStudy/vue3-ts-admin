import type { App } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const useElPlus = (app:App<Element>)=>{
  app.use(ElementPlus,{
    locale: zhCn,
  })
  // 自动引入图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component)
  }
}

export default useElPlus