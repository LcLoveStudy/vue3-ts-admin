/**
 * 深度对象冻结，阻止vue劫持对象，提升性能。
 * 当数据只是用于展示不需要修改时，使用该函数
 * 注意：当使用该方法后，原对象和新对象都不可以被改变
 * @param {*} obj 目标对象
 * @returns 被深度冻结的对象
 * @example this.list = deepFreeze(res.data.data)
 * @author 李畅
 * @email dotb116393@163.com
 */
export const deepFreeze = (obj: NObject): NObject => {
  if (Object.isFrozen(obj)) {
    //Object.isFrozen()用来检测对象是否被冻结Object自带方法
    return obj
  }
  Object.keys(obj).forEach((key) => {
    //Object.keys(obj)获取所有的键名
    //如果是object类型，递归深度冻结
    typeof obj[key] === 'object' && (obj[key] = deepFreeze(obj[key]))
  })
  return Object.freeze(obj) //Object自带的冻结方法
}

//键名必须为string ｜ number ｜ symbol
interface NObject {
  [key: string | number | symbol]: NObject
}

/**
 * 深拷贝对象，不会改变原对象
 * @param {*} oldObj 目标对象
 * @returns 复制后的对象
 * @example let newObj = objectCopy(oldObj)
 * @author 李畅
 * @email dotb116393@163.com
 */
export const objectCopy = (oldObj: object): object => {
  return JSON.parse(JSON.stringify(oldObj))
}
