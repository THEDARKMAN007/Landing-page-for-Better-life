/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bride-groom": "url('/dist/assets/images/bride-groom.jpg')",
      },
    },
  },
  plugins: [],
};
