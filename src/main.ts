// vue core
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
// init
import useElPlus from '@/components/useElPlus'
import setupGlobDirectives from '@/directive'
// css
import './tailwind.css'
import '@/utils/page/rem'
import '@/design/index.less'
import '@/assets/style/reset.css'
import '@/assets/style/dark.less'
import 'highlight.js/styles/github-dark-dimmed.css' // 代码着色

const app = createApp(App)

// register global directive
setupGlobDirectives(app)

/** mount element-plus and custom components */
useElPlus(app)

app.use(createPinia()).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
