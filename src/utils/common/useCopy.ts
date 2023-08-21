import { ElMessage } from 'element-plus'
/**
 * 复制内容到剪贴板
 * @param {string} content 要复制的内容
 * @example
 * getCopy('这是测试文字')
 */
export const useCopy = (content: string) => {
  try {
    navigator.clipboard.writeText(content) // 把要复制的内容拷贝到剪贴板
    ElMessage.success('复制成功')
  } catch (ex) {
    return false
  }
}
