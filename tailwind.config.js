const customTheme = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    plugins: [],
    extend: {
      size: { 18: '72px' },
      spacing: { 18: '72px' },
      colors: { ...customTheme }
    }
  }
}
