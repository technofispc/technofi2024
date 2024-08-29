/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "broch2016": "url('/src/assets/BrochureIMG/T2016.jpg')",
        "broch2017": "url('/src/assets/BrochureIMG/T2017.jpg')",
        "broch2018": "url('/src/assets/BrochureIMG/T2018.jpg')",
        "broch2019": "url('/src/assets/BrochureIMG/T2019.jpg')",
        "broch2022": "url('/src/assets/BrochureIMG/T2022.jpg')",
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