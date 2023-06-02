import './loading.css'
let child: any = []
export const Ownloading = {
  name: 'ownloading',
  method: {
    mounted(el: HTMLElement, bind: any, node: any) {
      if (bind.value) {
        //复制原本的child
        child = [...new Set(el.childNodes)]
        //元素滞空
        el.innerHTML = ''
        //添加loading效果
        // vue3
        el.appendChild(createHTML(el, node.el.offsetHeight))
        // vue2
        // el.appendChild(createHTML(el, node.elm.offsetHeight))
      }
    },
    // 元素更新时，若loading为false则清空loading效果并添加原child
    // vue3
    updated: function (el: HTMLElement, bind: any) {
      if (bind.value == false) {
        el.innerHTML = ''
        child.forEach((item: any) => {
          el.appendChild(item)
        })
      }
    },
    // vue2
    // update: function (el, bind) {
    //   if (bind.value == false) {
    //     el.innerHTML = ''
    //     child.forEach((item) => {
    //       el.appendChild(item)
    //     })
    //   }
    // }
  },
}

// 创建loading元素
const createHTML = (el: HTMLElement, height: number) => {
  //创建蒙层
  let divBox = document.createElement('div')
  divBox.setAttribute('class', 'loading_box')
  divBox.style.width = el.offsetWidth + 'px'
  if (height) {
    divBox.style.height = height + 'px'
  } else {
    divBox.style.height = el.offsetHeight + 'px'
  }
  //创建loading效果
  let loadingbox = document.createElement('div')
  loadingbox.setAttribute('class', 'loading')
  divBox.appendChild(loadingbox)
  //提示文本
  let text = document.createElement('div')
  text.innerHTML = '拼命加载中'
  divBox.appendChild(text)
  text.setAttribute('class', 'loading_text')
  return divBox
}
