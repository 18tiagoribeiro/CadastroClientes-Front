/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulCelcoin: '#0073FF',
        roxoCelcoin: '#6B00F5',
        branco: '#FFFFFF',
        cinzaClaro: '#F3F4F6',
        cinzaMedio: '#E5E7EB',
      }
    },
  },
  plugins: [],
}
