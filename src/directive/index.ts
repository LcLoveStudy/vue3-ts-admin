import type { App, ObjectDirective } from 'vue'

/** 自定义指令type */
export type DirectiveObject = {
  name: string
  method: ObjectDirective
}

/** 使用export 导出的模块获取到的type */
type ExportModuleObject = {
  [key: string]: DirectiveObject
}

const directives: DirectiveObject[] = [] // 存放所有的指令
/** 循环当前目录下所有文件，自动化注册 */
const modules = import.meta.glob('./*.ts', { eager: true })
Object.keys(modules).forEach((key) => {
  const module = modules[key] as ExportModuleObject
  if (module) {
    for (const name in module) {
      directives.push(module[name])
    }
  }
})

/** 注册全局指令 */
const createDirective = (app: App<Element>) => {
  directives.forEach((item) => {
    app.directive(item.name, item.method)
  })
}
export default createDirective
