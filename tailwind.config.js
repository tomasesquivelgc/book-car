// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'dark-blue': '#211951',
        'light-green': '#74E291',
        'dark-green': '#274931',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
