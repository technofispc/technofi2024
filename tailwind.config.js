/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background': "url('/src/assets/download.png')",
      },
      colors:{
        'yellow-orange': '#FEB43C',
      }
    },
  },
  plugins: [],
}