/// <reference types="vite/client" />
// 解决element-plus类型丢失的问题
/// <reference types="element-plus/global.d.ts" />
// 解决element-plus国际化的报错
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module '*.vue' {
  // 解决引入组件报错的问题
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
