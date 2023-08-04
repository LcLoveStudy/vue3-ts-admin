import error from '@/assets/images/error.png'
export const lazy = {
  name: 'lazy',
  method: {
    mounted(el: HTMLElement, value: any) {
      el.setAttribute('src', error)
      el.setAttribute('data-src', value.value)
      observe.observe(el)
    }
  }
}
//监听处理函数
const handler = (entries: Array<IntersectionObserverEntry>) => {
  entries.forEach((item) => {
    //进入视野后进一步处理
    if (item.isIntersecting) {
      //把真正的地址赋值给src
      item.target.setAttribute('src', item.target.getAttribute('data-src') as string)
      //如果已经赋值过则取消监听
      observe.unobserve(item.target)
    }
  })
}

//监听器
const observe = new IntersectionObserver(handler, { threshold: [0.25, 1] })
