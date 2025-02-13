// vue core
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
// init
import setupGlobDirectives from '@/directive'
import initPlugins from './plugins'
// css
import 'element-plus/dist/index.css'
import './tailwind.css'
import '@/utils/page/rem'
import '@/design/index.less'
import '@/assets/style/reset.css'
import '@/assets/style/dark.less'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'highlight.js/styles/github-dark-dimmed.css' // 代码着色

const app = createApp(App)

// register global directive
setupGlobDirectives(app)

/** mount element-plus and custom components */
initPlugins(app)

app.use(createPinia()).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
