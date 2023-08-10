import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/utils/page/rem.js' // 引入rem解决方案
import '@/assets/style/reset.css'
import '@/assets/style/atomization.css' // 引入原子化css
import useElPlus from '@/components/useElPlus'
import createDirective from '@/directive'
import App from '@/App.vue'
import router from '@/router'
const app = createApp(App)
createDirective(app)
useElPlus(app)

app.use(createPinia())
app.use(router)
app.mount('#app')
