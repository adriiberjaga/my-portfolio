/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    sm: '640px',
    md: '768px',
    custom: '1000px',
    lg: '1024px',
    xl: '1280px',
  },
  
}

