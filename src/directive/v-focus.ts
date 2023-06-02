export const focus = {
  name: 'focus',
  method: {
    mounted(el: HTMLElement) {
      //是否是element的input组件，如果是则获取input框并获取焦点
      if (
        el.getAttribute('class') &&
        el.getAttribute('class')?.split(' ').indexOf('el-input') !== -1
      ) {
        //vue3+element-plus写法
        if (el.getElementsByTagName('div')[0]) {
          el.getElementsByTagName('div')[0]
            .getElementsByTagName('input')[0]
            .focus()
        }
      } else {
        //设置tabindex属性,让无法聚焦的元素获取聚焦功能
        el.setAttribute(
          'tabindex',
          Math.floor(Math.random() * 10 + 1).toString()
        )
        el.focus()
      }
    },
  },
}

// vue2+element-ui写法
// //自动聚焦指令
// Vue.directive('focus', {
//   inserted: function (el) {
//     //是否是element的input组件，如果是则获取input框并获取焦点
//     if (el.getAttribute('class').split(' ').indexOf('el-input') !== -1) {
//       //vue3+element-plus写法
//       if (el.getElementsByTagName('div')[0]) {
//         el.getElementsByTagName('div')[0]
//           .getElementsByTagName('input')[0]
//           .focus()
//       } else {
//         //vue2+element-ui写法
//         el.getElementsByTagName('input')[0].focus()
//       }
//     } else {
//       //设置tabindex属性,让无法聚焦的元素获取聚焦功能
//       el.setAttribute('tabindex', Math.floor(Math.random() * 10 + 1))
//       el.focus()
//     }
//   }
// })
