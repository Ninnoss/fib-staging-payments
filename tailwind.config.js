/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#56B89D',
        darkerGreen: '#139E9E',
        darkerBlue: '#041C2D',
        darkBlue: '#014368',
        highlightBlack: '#202020',
        highlightGrey: '#FAFBFA',
      },
      fontFamily: {
        EnglishPoppins: ['English-poppins', 'sans-serif'],
      },
    },
  },
};
