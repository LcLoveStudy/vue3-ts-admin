import { nextTick } from 'vue'
export const focus = {
  name: 'focus',
  method: {
    mounted(el: HTMLElement, value: any) {
      //是否是element的input组件，如果是则获取input框并获取焦点
      if (
        el.getAttribute('class') &&
        el.getAttribute('class')?.split(' ').indexOf('el-input') !== -1 &&
        value.value
      ) {
        //vue3+element-plus写法
        if (el.getElementsByTagName('div')[0]) {
          el.getElementsByTagName('div')[0].getElementsByTagName('input')[0].focus()
        }
      } else {
        if (value.value) {
          //设置tabindex属性,让无法聚焦的元素获取聚焦功能
          el.setAttribute('tabindex', Math.floor(Math.random() * 10 + 1).toString())
          el.focus()
        }
      }
    },
    beforeUpdate(el: HTMLElement, value: any) {
      //是否是element的input组件，如果是则获取input框并获取焦点
      if (
        el.getAttribute('class') &&
        el.getAttribute('class')?.split(' ').indexOf('el-input') !== -1
      ) {
        if (value.value) {
          nextTick(() => {
            //vue3+element-plus写法
            el.getElementsByTagName('div')[0].getElementsByTagName('input')[0].focus()
          })
        } else {
          nextTick(() => {
            //vue3+element-plus写法
            el.getElementsByTagName('div')[0].getElementsByTagName('input')[0].blur()
          })
        }
      } else {
        if (value.value) {
          nextTick(() => {
            //设置tabindex属性,让无法聚焦的元素获取聚焦功能
            el.setAttribute('tabindex', Math.floor(Math.random() * 10 + 1).toString())
            el.focus()
          })
        } else {
          nextTick(() => {
            el.blur()
          })
        }
      }
    }
  }
}
