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
        popin: ["Poppins"],
      },
      colors: {
        "theme-gray": "#2A3042",
        "body-gray": "#F8F8FB",
      },
      fontSize: {
        s: "13px",
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
