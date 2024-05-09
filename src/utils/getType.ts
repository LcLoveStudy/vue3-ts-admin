/** 类型 */
export type AllType =
  | 'number'
  | 'string'
  | 'boolean'
  | 'undefined'
  | 'null'
  | 'function'
  | 'array'
  | 'object'
  | 'set'
  | 'map'
  | 'weakmap'
  | 'weakset'
  | 'date'
  | 'promise'

/**
 * 获取变量的类型
 * @param variable 目标变量
 * @returns 变量类型
 * @example getType({}) //object
 */
export const getType = (variable: unknown): AllType => {
  if (variable === null) return 'null'
  if (variable === undefined) return 'undefined'
  return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase() as AllType
}
