/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: 'blue', textCSec: '#686868', deepBlue: "#0b3558",
      },
    },
  },
  plugins: [],
}

