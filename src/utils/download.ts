/**
 * 通过url下载
 * @param {*} url 文件的下载地址
 * @param {*} fileName 下载后的文件名
 * @example dowmLoad('http://www.baidu.xxx','测试文件')
 * @author 李畅
 * @email dotb116393@163.com
 */
const downLoad = (url: string, fileName: string) => {
  let a = document.createElement('a') as unknown as HTMLLinkElement
  a.href = url
  a.setAttribute('class', url)
  a.setAttribute('download', fileName)
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default downLoad
