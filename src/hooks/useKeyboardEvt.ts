/**
 * 键盘事件hook,onMounted注册,onBeforeUnmount卸载
 * @param keyCode 键盘码
 * @param callBack 回调函数
 * @example
 * useKeyboardEvt(13,() => console.log('回车了'))
 */
export const useKeyboardEvt = (keyCode: number, callBack: Function) => {
  const handler = (e: { keyCode: number }) => {
    if (e.keyCode === keyCode) {
      callBack()
    }
  }
  onMounted(() => {
    document.addEventListener('keydown', handler)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handler)
  })
}
