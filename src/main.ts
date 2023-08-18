// vue core
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
// init
import useElPlus from '@/components/useElPlus'
import createDirective from '@/directive'
// css
import '@/utils/page/rem.js'
import '@/assets/style/reset.css'
import '@/assets/style/atomization.css'
import 'nprogress/nprogress.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
/** 自定义指令 */
createDirective(app)
/** 挂载element-plus */
useElPlus(app)

app.use(createPinia()).use(router)
app.mount('#app')
