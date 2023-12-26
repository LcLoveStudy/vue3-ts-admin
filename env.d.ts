/// <reference types="vite/client" />
declare module '*.vue' {
  // 解决引入组件报错的问题
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
// 解决element-plus国际化的报错
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare let Tiff
declare module 'leaflet-minimap'
