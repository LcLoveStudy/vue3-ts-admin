import { ElMessage } from "element-plus"
/**
 * 通过url下载
 * @param {*} url 文件的下载地址
 * @param {*} fileName 下载后的文件名
 * @example dowmLoad('http://www.baidu.xxx','测试文件')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const downLoad = async (url: string, fileName: string):Promise<void> => {
  try {
    const res = await new Promise(() => {
      let a = document.createElement('a') as unknown as HTMLLinkElement
      a.href = url
      a.setAttribute('class', url)
      a.setAttribute('download', fileName)
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
    ElMessage.success('下载完成')
  } catch (err) {
    ElMessage.warning('下载出错啦')
  }
}

//以blob下载
export const downloadBlob = (blob:Blob,fileName:string)=>{
  const href = URL.createObjectURL(blob)
  downLoad(href,fileName)
  //释放blob对象
  URL.revokeObjectURL(href)
}