/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs','./views/templates/*.ejs'],
  theme: {
  extend: {},
  },
  plugins: [
  {
  tailwindcss: {},
  autoprefixer: {},
  },
  require('@tailwindcss/forms')
  ],
  };