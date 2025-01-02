/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      screens: {
        phone: '320px', // 自定义断点
        tablet: '640px',
        desktop: '1280px'
      },
      colors: {
        'dark-primary': '#1d2025'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false // 取消对element-plus的影响
  }
}
