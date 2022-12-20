/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        nuni: ["Nunito"],
      },
      colors: {
        "theme-gray": "#F5F7FA",
      },
    },
  },
  plugins: [],
};
