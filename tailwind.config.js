/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        lightBlue: '#e1f3ff',
        darkBlue: '#00416b',
      }
    },
  },
  plugins: [],
}

