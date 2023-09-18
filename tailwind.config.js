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
      'xs': '540px',      // example new smaller breakpoint
      'sm': '640px',
      'smd': '768px',     // replacing the old 'md' with 'smd'
      'md': '1024px',     // your new 'md'
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

