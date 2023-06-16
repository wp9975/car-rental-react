/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      
      'black': {
        DEFAULT: '#000000',
        50: '#8A8A8A',
        100: '#7A7A7A',
        200: '#5C5C5C',
        300: '#3D3D3D',
        400: '#1F1F1F',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000'
      },
      'silver': '#c0b7b1',
      'darkgray': '#433e3f',
      'gray': '#393435',
      'grayLavender': '#c8c6d7',
      'bone': '#d9cab3',
      'blue': '#4C60AB',
      'white': '#f9f4f5',
      'primary': '#EDEDE9',
      'male': '#D6CCC2',
      'blackCoffee': '#3a3238',
      'premium': '#C39C50',
      'basic': '#3B738B',
      'medium': '#B92833',
      'standard': '#135D37',
      grays: {
          100: "#ebedef",
          200: "#d7dadf",
          300: "#c4c8cf",
          400: "#b0b5bf",
          500: "#9ca3af",
          600: "#7d828c",
          700: "#5e6269",
          800: "#3e4146",
          900: "#1f2123"
},
    },
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'imgcar': "url('/assets/img/cars/ferrari.jpg')",
      },
      height: {
        '128':'32rem',
        '192':'48rem',
        '256':'64rem',
      },
    },
  },
  plugins: [],
}
