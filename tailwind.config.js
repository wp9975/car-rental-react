/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'silver': '#c0b7b1',
      'darkgray': '#433e3f',
      'gray': '#393435',
      'grayLavender': '#c8c6d7',
      'bone': '#d9cab3',
      'white': '#f9f4f5',
      'primary': '#EDEDE9',
      'male': '#D6CCC2',
      'blackCoffee': '#3a3238',
      'premium': '#C39C50',
      'basic': '#3B738B',
      'medium': '#B92833',
      'standard': '#135D37',
    },
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    },
    extend: {
      height: {
        '128':'32rem',
        '192':'48rem',
        '256':'64rem',
      },
    },
  },
  plugins: [],
}
