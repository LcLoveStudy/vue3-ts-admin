/// <reference types="vite/client" />
declare module '*.vue' {
  //解决引入组件报错的问题
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}