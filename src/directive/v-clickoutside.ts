export const clickoutside = {
  name: 'clickoutside',
  method: {
    mounted(el: HTMLUnknownElement, value: any) {
      window.addEventListener('click', (e) => eventHnader(value.value, el, e))
    },
    unmounted(el: HTMLUnknownElement, value: any) {
      window.removeEventListener('click', (e) => eventHnader(value.value, el, e))
    }
  }
}

const eventHnader = (callback: Function, el: HTMLUnknownElement, e: Event) => {
  if (!el.contains(e.target as HTMLElement)) {
    callback()
  }
}
