/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c2541',
        secondary: '#001c55',
        background: '#040918',
        text_cyan: '#6fffe9'
      }
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
      scale: ['hover', 'focus'],
    },
  },
  
  plugins: [],
}

