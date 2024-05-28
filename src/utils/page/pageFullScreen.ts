import { ElMessage } from 'element-plus'
/** 判断目前是否为全屏 */
export const isFullScreen = (): boolean => {
  return !(
    (document as any).fullscreen ||
    (document as any).mozFullScreen ||
    (document as any).webkitIsFullScreen ||
    (document as any).webkitFullScreen ||
    (document as any).msFullScreen
  )
}

/** 如果是全屏就退出全屏，否则就进入全屏 */
export const pageFullScreen = () => {
  const element = document.documentElement
  if (!isFullScreen()) {
    try {
      document.exitFullscreen()
    } catch (e) {
      ElMessage.error('浏览器不支持全屏')
    }
  } else {
    try {
      element.requestFullscreen()
    } catch (e) {
      ElMessage.error('浏览器不支持全屏')
    }
  }
}
