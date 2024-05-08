/**
 * 判断是否是字符串
 * @param {*} targetString
 * @returns true||false
 */
export const isString = (targetString: unknown): boolean => {
  return typeof targetString === 'string'
}

/** 获取随机长度的字符串 */
export const getRandomString = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
