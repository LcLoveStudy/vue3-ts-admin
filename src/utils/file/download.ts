import { ElMessage } from 'element-plus'
import { saveAs } from 'file-saver'
/**
 * 通过url下载
 * @param {*} url 文件的下载地址
 * @param {*} fileName 下载后的文件名
 * @example dowmLoad('http://www.baidu.xxx','测试文件')
 * @author 李畅
 * @email dotb116393@163.com
 */
export const downLoad = async (url: string | Blob, fileName: string): Promise<void> => {
  return new Promise(() => {
    saveAs(url, fileName)
  })
    .then(() => {
      ElMessage.success('下载成功')
    })
    .catch(() => {
      ElMessage.warning('下载出错了')
    })
}
