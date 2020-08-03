const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'active']
  },
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