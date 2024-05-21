/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require('tailwindcss/plugin')

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#272727'
      },
      fontFamily: {
        inter: 'Inter',
        walsheim: 'GT Walsheim'
      },
      maxWidth: {
        max: '1248px'
      }
    },
  },
  plugins: [

  ],
})