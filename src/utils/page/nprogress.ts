import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 配置进度条
NProgress.configure({ showSpinner: false, minimum: 0.2, speed: 500 })
let loadingNum = 0
/** 头部进度条开始加载 */
export const startProcess = () => {
  if (loadingNum === 0) {
    NProgress.start()
  }
  loadingNum++
}
/** 头部进度条结束加载 */
export const endProcess = () => {
  loadingNum--
  if (loadingNum <= 0) {
    NProgress.done()
  }
}
