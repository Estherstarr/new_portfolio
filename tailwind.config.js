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
      },  
        
    },
  },
  plugins: [],
}
