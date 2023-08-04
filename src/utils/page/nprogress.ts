import NProgress from 'nprogress'
//配置进度条
NProgress.configure({ showSpinner: false, minimum: 0.2, speed: 500 })
let loadingNum = 0
//进度条开始加载
export const startLoading = () => {
  if (loadingNum == 0) {
    NProgress.start()
  }
  loadingNum++
}
//进度条结束加载
export const endLoading = () => {
  loadingNum--
  if (loadingNum <= 0) {
    NProgress.done()
  }
}
