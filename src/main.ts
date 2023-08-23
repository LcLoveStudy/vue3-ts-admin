// vue core
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
// init
import useElPlus from '@/components/useElPlus'
import setupGlobDirectives from '@/directive'
// css
import '@/utils/page/rem.js'
import '@/design/index.less'
import '@/assets/style/reset.css'
import '@/assets/style/atomization.css'
import 'nprogress/nprogress.css'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/github-dark-dimmed.css'

const app = createApp(App)

// Register global directive
// 注册全局指令
setupGlobDirectives(app)

/** 挂载element-plus */
useElPlus(app)

app.use(store).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
