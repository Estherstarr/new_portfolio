/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-purple': '#6070ff',
        'ash-grey': '#344563',
        'bold-ash': '#172b4d',
        'light-purple': '#7f8cff',
        'body-gray': '#e5e5e5',
        'blue-dark': '#172b4d'
      },  
        
    },
  },
  plugins: [],
}
