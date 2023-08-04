/**
 * 滚动到目标元素
 * (vue3滚动到element-plus元素时不能使用ref，请使用docment.querySelect())
 * @param {HTMLElement} endDom 目标元素的dom
 * @param {number} delay 滚动时间(毫秒),不传或者小于10为没有过度
 * @example 800毫秒滚动到mybtn所在的位置
 * pageScroll(this.$refs.mybtn.$el,800)
 * //vue3+element-plus
 * <el-button id="mybtn">按钮</el-button>
 * const mybtn = document.querySelector('#mybtn') as HTMLElement
 * pageScroll(mybtn,800)
 * @author 李畅
 * @email dotb116393@163.com
 */
export const pageScroll = (endDom: HTMLElement, delay?: number) => {
  if (endDom.offsetTop == undefined) {
    return '元素不存在'
  } else {
    // 获取起始位置到页面顶部的距离
    const startDistance = document.documentElement.scrollTop
    // 获取目标元素距离页面顶部距离
    const endDistance = endDom.offsetTop
    // 计算真正滚动的距离
    const realDistance = startDistance - endDistance
    //计算需要多少步
    let step = 0
    if (delay == undefined || delay < 10) {
      delay = 10
    }
    step = delay / 10
    //每次滚动的距离
    const everyDistance = realDistance / step
    // console.log(everyDistance)
    //创建定时器
    let timer: any = null
    //当可视区域到页面顶部距离减去下一次滚动的距离<目标元素到页面顶部距离时，清空定时器，并直接跳到目标元素位置
    timer = setInterval(() => {
      if (everyDistance > 0) {
        if (document.documentElement.scrollTop - everyDistance < endDistance) {
          clearInterval(timer)
          document.documentElement.scrollTop = endDistance
        } else {
          document.documentElement.scrollTop -= everyDistance
        }
      } else {
        if (
          document.documentElement.scrollTop - everyDistance >
          endDistance - document.documentElement.clientHeight
        ) {
          clearInterval(timer)
          document.documentElement.scrollTop = endDistance
        } else {
          document.documentElement.scrollTop -= everyDistance
        }
      }
    }, 10)
  }
}
