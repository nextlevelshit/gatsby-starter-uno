const { colors, opacity, fontFamily, letterSpacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
    },
    colors: {
      gray: colors.gray,
      primary: colors.gray,
      secondary: colors.orange,
      black: '#2D2D2A',
      white: colors.white,
    },
    fontSize: {
      sm: '.675rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '5rem',
      'r1': '1.5vw',
      'r2': '4vw',
      'r3': '9vw',
    },
    opacity: {
      ...opacity,
      '5': '.05',
      '10': '.1',
      '90': '.9',
    },
    fontFamily: {
      ...fontFamily,
      sans: ['Open Sans', ...fontFamily.sans],
      display: ['Be Vietnam', ...fontFamily.sans],
    },
    letterSpacing: {
      ...letterSpacing,
      wider: '0.6rem',
      widest: '1rem',
    }
  },
  container: {
    center: true,
    padding: '2rem'
  },
  variants: {
    textColor: ['hover'],
  },
  plugins: []
}
