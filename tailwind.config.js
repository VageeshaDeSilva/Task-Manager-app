/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#1B1A41',
        primaryColor: '#845AFC',
        primaryColorDark:"#6042bc",
        fontColor: '#FFFEF8',
      }
    },
  },
  plugins: [],
}