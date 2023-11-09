/** 使用暗黑主题 */
export const useDark = () => document.documentElement.setAttribute('theme', 'dark')

/** 使用默认主题 */
export const useDefaultTheme = () => document.documentElement.removeAttribute('theme')
