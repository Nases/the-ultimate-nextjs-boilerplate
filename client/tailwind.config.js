const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '440px': '440px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}