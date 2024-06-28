import { ElMessage } from 'element-plus'
import { copyTxt as copy } from '@lichang666/utils'
/**
 * 复制内容到剪贴板
 * @param {string} content 要复制的内容
 * @example
 * getCopy('这是测试文字')
 */
export const copyTxt = (content: string) => {
  copy(content)
    .then(() => {
      ElMessage.success('复制成功')
    })
    .catch(() => {
      ElMessage.error('复制失败')
    })
}
