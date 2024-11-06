/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'textarea': '200px',
        'textarea-mobile': '150px'
      },
      keyframes: {
        show: {
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'show': 'show .3s ease-out forwards'
      },
      colors: {
        'movistar-green': '#00A950',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

