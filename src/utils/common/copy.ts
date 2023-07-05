import { ElMessage } from 'element-plus'
/**
 * 复制内容到剪贴板
 * @param {string} content 要复制的内容
 * @example
 * getCopy('这是测试文字')
 */
const getCopy = (content: string) => {
  const textArea = document.createElement('textarea') //创建一个文本域节点
  textArea.textContent += content //把要复制的内容插入到上面创建的文本域节点里
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea) //把创建的文本节点插入到body里
  textArea.select() //选择创建的文本域节点
  try {
    document.execCommand('copy') // 把要复制的内容拷贝到剪贴板
    ElMessage.success('复制成功')
  } catch (ex) {
    return false
  } finally {
    document.body.removeChild(textArea) // 移除插入的文本域节点
  }
}

export default getCopy
