/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primarycolor: "#090E14",
      text: "white",
      sidebargray: "#111926",
      sidebargraylight: "#D8DCE0",
      sidebargraybackground: "#373E4A",
      success: "#00C896",
      background: "#3C343D",
      backgroundBorder: "#6B626C",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
