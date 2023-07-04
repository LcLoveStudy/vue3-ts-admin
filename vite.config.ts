import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'] //打包后去掉console，debugger
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [vue(), vueJsx()],
  resolve: {
    //配置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true // 开启局域网
  }
})
