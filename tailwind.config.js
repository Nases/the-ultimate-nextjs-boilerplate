const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
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
    require('@tailwindcss/typography')
  ]
}