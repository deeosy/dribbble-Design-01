/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

