const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    backgroundColor: theme => ({
      'primary': '#FF3847',
      'secondary': '#0E1A2A',
      'neutral': '#FDFDFD',
      ...theme('colors'),
    }),
    screen: {
      'x2': '320px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
