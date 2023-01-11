const customTheme = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: { ...customTheme }
    },
    plugins: []
  }
}
