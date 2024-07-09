/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./Project/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'display' : ['Poppins', 'sans-serif'],
        'body' : ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#3238f2',
      }
    },
  },
  plugins: [],
}

