import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import '@/utils/page/rem.js'            //引入rem解决方案
import 'element-plus/dist/index.css'
import '@/assets/style/reset.css'       //样式重置
import '@/assets/style/atomization.css' //引入原子化css
import 'nprogress/nprogress.css'        //引入顶部进度条样式
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import router from './router'
import createDirective from '@/directive'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

// 自动引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// main.ts中批量导入自定义指令
createDirective(app)

app.use(createPinia())
app.use(router)
app.use(ElementPlus,{
  locale: zhCn,
})
app.mount('#app')

