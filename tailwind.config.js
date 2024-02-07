/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#61daaf',
        secondary: '#215277',
        background: '#040918',
      }
    },
  },
  plugins: [],
}

