/** @type {import('tailwindcss').Config} */

export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'xsm': '340px',      
      'sm': '640px',
      'smd': '768px',     
      'md': '1024px',     
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px',
      },
      fontFamily:{
        'sans': ['barlow','Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

