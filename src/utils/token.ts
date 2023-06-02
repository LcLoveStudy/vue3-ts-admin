//本项目的token在localStorage里的名称
const tokenName = 'example'

/**
 * 用于在localstorage中存储token的函数
 * @param {*} tokenValue token值
 * @example setToken(tokenValue)
 * @author 李畅
 * @email dotb116393@163.com
 */
export const setToken = (tokenValue: string) => {
  localStorage.setItem(tokenName, tokenValue)
}

/**
 * 用于获取当前项目存储在localstorage中的token，当token不存在时返回空字符串''
 * @returns 当前项目的token值
 * @example console.log(getToken())
 * @author 李畅
 * @email dotb116393@163.com
 */
export const getToken = (): string => {
  return JSON.stringify(localStorage.getItem(tokenName) || '')
}

/**
 * 从localstorage中删除token
 * @example removeToken()
 * @author 李畅
 * @email dotb116393@163.com
 */
export const removeToken = () => {
  localStorage.removeItem(tokenName)
}
