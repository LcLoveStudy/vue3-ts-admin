// vue core
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
// init
import useElPlus from '@/components/useElPlus'
import useMyComponents from '@/components/useMyComponents'
import setupGlobDirectives from '@/directive'
// css
import './tailwind.css'
import '@/utils/page/rem'
import '@/design/index.less'
import '@/assets/style/reset.css'
import 'highlight.js/styles/github-dark-dimmed.css' // 代码着色

const app = createApp(App)

// register global directive
setupGlobDirectives(app)

/** mount element-plus and custom components */
useElPlus(app)
useMyComponents(app)

app.use(store).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
