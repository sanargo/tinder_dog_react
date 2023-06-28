/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ['Poppins', 'ui-sans-serif']

    },
    extend: {
      rotate: {
        '30': '-30deg'
      }
    },
  },
  plugins: [],
}

