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

/**
 * 粘贴图片到指定元素
 * @param el 指定容器盒子元素，图片会占满元素
 */
export const pasteImg = (el: HTMLElement) => {
  el.setAttribute('contenteditable', 'true')
  el.addEventListener('paste', (e) => {
    if (e.clipboardData?.files.length !== 0) {
      e.preventDefault() // 阻止默认行为
      const file = e.clipboardData!.files[0] // 拿到文件
      const reader = new FileReader()
      reader.onload = (e) => {
        const width = el.scrollWidth
        const height = el.scrollHeight
        const img = document.createElement('img')
        img.style.width = `${width}px`
        img.style.height = `${height}px`
        img.src = e.target?.result as string
        el.append(img)
      }
      reader.readAsDataURL(file)
    }
  })
}
