const colors = require('tailwindcss/colors')

module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'game-purple': {
        100: '#462638',
        200: '#190E1E'
      },
      'game-beige': '#CFA49A',
      'game-white': '#DFEFD4',
      'game-blue': {
        0:'#ABCDEF',
        100: '#6DC3CA',
        200: '#5680D1',
        300: '#32366E'
      },
      'game-shadow': 'rgba(0,0,0,0.35)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      neutral: colors.neutral
    },
    fontFamily: {
      'night': ['night_machine', 'sans-serif'],
      'second': ['vermin_vibes', 'sans-serif'],
      'general': ['Lato', 'sans-serif'],
    },
    extend: {
      animation: {
        boingmove: 'boingmove 0.8s ease-in-out infinite',
      },
      keyframes: {
        boingmove: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      }
    },
  },
  plugins: [],
}
