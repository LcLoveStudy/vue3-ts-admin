import type { DirectiveObject } from '.'

export const clickoutside: DirectiveObject = {
  name: 'clickoutside',
  method: {
    mounted(el: HTMLUnknownElement, value: any) {
      window.addEventListener('click', (e) => eventHander(value.value, el, e))
    },
    unmounted(el: HTMLUnknownElement, value: any) {
      window.removeEventListener('click', (e) => eventHander(value.value, el, e))
    }
  }
}

const eventHander = (callback: Function, el: HTMLUnknownElement, e: Event) => {
  if (!el.contains(e.target as HTMLElement)) {
    callback()
  }
}
