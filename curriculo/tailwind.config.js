/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F0FF', // lilás clarinho
        accent: '#A15AFF',  // roxo elegante
      },
    },
  },
  plugins: [],
};
