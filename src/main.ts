import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/reset.css'
import '@/assets/style/common.css'
import 'nprogress/nprogress.css'
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
app.use(ElementPlus)
app.mount('#app')

