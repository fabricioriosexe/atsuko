/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif'],
      },
      colors: {
        'custom-red': '#AD0505',
      },
    },
  },
  plugins: [],
}
