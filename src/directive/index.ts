import { focus } from './v-focus'
import { lazy } from './v-lazy'
import { Ownloading } from './loading/v-loading'
import { clickoutside } from './v-clickoutside'
export const directives = [focus, Ownloading, lazy, clickoutside]

// main.ts中批量导入自定义指令
// directives.forEach((item) => {
//   app.directive(item.name, item.method)
// })
