import { focus } from './v-focus'
import { Ownloading } from './loading/v-loading'
export const directives = [focus, Ownloading]

// main.ts中批量导入自定义指令
// directives.forEach((item) => {
//   app.directive(item.name, item.method)
// })
