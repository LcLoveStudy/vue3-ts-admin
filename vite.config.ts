import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [] // 打包后去掉console，debugger
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [
    vue(),
    vueJsx(),
    // 自动引入依赖
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['.src/components'],
      dts: './src/auto-imports.d.ts'
    })
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#': fileURLToPath(new URL('./types', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        // js和css分离
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 分包
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          elementIcons: ['@element-plus/icons-vue']
        }
      }
    },
    sourcemap: false
  },
  server: {
    host: true // 开启局域网
  }
})
