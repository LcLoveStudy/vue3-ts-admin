import type { App, ObjectDirective } from 'vue'

export type DirectiveObject = {
  name: string
  method: ObjectDirective
}

type ExportModuleObject = {
  [key: string]: DirectiveObject
}

const directives: DirectiveObject[] = []
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
