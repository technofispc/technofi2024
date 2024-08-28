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
        'oppen': "url('/public/oppen.jpg')",
      },
      colors:{
        'yellow-orange': '#FEB43C',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}