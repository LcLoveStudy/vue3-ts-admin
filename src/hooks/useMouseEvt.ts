export const useMouseEvt = (
  type:
    | 'click'
    | 'dbclick'
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
    target.addEventListener(type, handler)
    onBeforeUnmount(() => {
      target.removeEventListener(type, handler)
    })
  } else {
    document.addEventListener(type, handler)
    onBeforeUnmount(() => {
      document.removeEventListener(type, handler)
    })
  }
}
