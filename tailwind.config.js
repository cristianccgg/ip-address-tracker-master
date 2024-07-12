/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "1-Very-Dark-Gray": "hsl(0, 0%, 17%)",
        "2-Dark-Gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubik: "Rubik",
      },
      backgroundImage: {
        "small-pattern": "url('/images/pattern-bg-mobile.png')",
        "large-pattern": "url('/images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
