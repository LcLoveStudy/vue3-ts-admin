/** 鼠标经过hook的回调函数类型 */
export type HoverHandlerType = () => void

/** 鼠标经过hook
 * @param element 监听的元素
 * @param callBack 鼠标经过时的回调函数(可选)
 * @returns {boolean} 是否鼠标经过
 */
export const useHover = (element: HTMLElement, callBack?: HoverHandlerType): Ref<boolean> => {
  const hovered = ref(false)
  element.addEventListener('mouseenter', () => {
    hovered.value = true
    callBack && callBack()
  })
  element.addEventListener('mouseleave', () => {
    hovered.value = false
    callBack && callBack()
  })
  onUnmounted(() => {
    // 清除监听器
    element.removeEventListener('mouseenter', () => {
      hovered.value = true
    })
    element.removeEventListener('mouseleave', () => {
      hovered.value = false
    })
  })
  return hovered
}
