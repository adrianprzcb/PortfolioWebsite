/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ 
    "./index.html",
    "./android_apps.html",
    "./scripts.js"
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: '#f9f9f9',
        lightText: '#111827',
        darkBackground: '#1f2937',
        darkText: '#f3f4f6',
      },
    },
  },
  plugins: [],
};