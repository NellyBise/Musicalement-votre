/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabella: ['Arabella', 'sans-serif'],
        default: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      'main-color': '#072550',
      'title-color': '#E5232E',
      'light-blue': '#A8E2E3',
      'light-color': '#FBF9F9',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
  },
  plugins: [],
}
