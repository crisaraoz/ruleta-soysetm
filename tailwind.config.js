/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'show': 'show .3s ease-out forwards'
      },
    },
  },
  plugins: [],
}

