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
      },
      backgroundImage: {
        'img-dark': `radial-gradient(
            circle at center,
            black 0%,
            black 25%,
            #1e2a47 50%,
            black 75%,
            black 100%
          )`,
        'img-light': `radial-gradient(
            circle at center,
            #f8fafc 0%,
            #f8fafc 25%,
            #dbeafe 50%,
            #f8fafc 75%,
            #f8fafc 100%
          )`
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
