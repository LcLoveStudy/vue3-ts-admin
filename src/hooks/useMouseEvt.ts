/**
 * 使用鼠标事件
 * @param type 鼠标默认事件类型
 * @param callback 回调函数
 * @param target 目标dom
 */
export const useMouseEvt = (
  type:
    | 'click'
    | 'dblclick'
    | 'mousedown'
    | 'mouseenter'
    | 'mouseleave'
    | 'mousemove'
    | 'mouseout'
    | 'mouseover'
    | 'mouseup'
    | 'contextmenu',
  callback: Function,
  target?: HTMLElement | Document
) => {
  const handler = (e: Event) => {
    callback(e)
  }
  if (target) {
    onMounted(() => {
      target.addEventListener(type, handler)
    })
    onBeforeUnmount(() => {
      target.removeEventListener(type, handler)
    })
  } else {
    onMounted(() => {
      document.addEventListener(type, handler)
    })
    onBeforeUnmount(() => {
      document.removeEventListener(type, handler)
    })
  }
}
