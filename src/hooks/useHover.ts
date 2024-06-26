/** 鼠标经过hook的回调函数类型 */
export type HoverHandlerType = () => void

/** 鼠标经过hook
 * @param elementId 监听的元素id
 * @param callBack 鼠标经过时的回调函数(可选)
 * @returns {boolean} 是否鼠标经过
 */
export const useHover = (elementId: string, callBack?: HoverHandlerType): Ref<boolean> => {
  const hovered = ref(false)
  let element: null | HTMLElement = null
  onMounted(() => {
    element = document.getElementById(elementId)
    if (element) {
      element.addEventListener('mouseenter', () => {
        hovered.value = true
        callBack && callBack()
      })
      element.addEventListener('mouseleave', () => {
        hovered.value = false
      })
    }
  })
  onUnmounted(() => {
    if (element) {
      // 清除监听器
      element.removeEventListener('mouseenter', () => {
        hovered.value = true
      })
      element.removeEventListener('mouseleave', () => {
        hovered.value = false
      })
    }
  })
  return hovered
}
