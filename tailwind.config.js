const { 
  colors, 
  opacity, 
  fontFamily, 
  letterSpacing,
  boxShadow,
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'top-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.04)',
        'top-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)',
        'top-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
    colors: {
      gray: colors.gray,
      primary: colors.red,
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
