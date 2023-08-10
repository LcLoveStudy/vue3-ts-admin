import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/utils/page/rem.js' // 引入rem解决方案
import '@/assets/style/reset.css' // 样式重置
import '@/assets/style/atomization.css' // 引入原子化css
import useElPlus from '@/components/useElPlus'
import createDirective from '@/directive'
import App from '@/App.vue'
import router from '@/router'
import '@/utils'
const app = createApp(App) // 实例化
createDirective(app) // main.ts中批量导入自定义指令
useElPlus(app) // 注册elementPlus

app.use(createPinia())
app.use(router)
app.mount('#app')
