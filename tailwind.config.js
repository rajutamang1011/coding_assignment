/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f15a29',
        secondary: '#ffe58c',
        supportive: '#ffd540',
      },
    },
  },
  plugins: [],
}
