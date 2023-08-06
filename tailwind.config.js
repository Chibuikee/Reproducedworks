/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: { nM: { max: "600px" } },
    // => @media (max-width: 600px) { ... },
    colors: {
      // for menubar
      primary: "#dd946f",
      primaryhover: "#cd7d7c",
      background1: "#261e5a",
      // for sidebar
      primarycolor: "#090E14",
      text: "white",
      sidebargray: "#111926",
      sidebargraylight: "#D8DCE0",
      sidebargraybackground: "#373E4A",
      success: "#00C896",
      // for gallaryDesign
      background: "#3C343D",
      backgroundBorder: "#6B626C",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
            width: "0",
            height: "0",
          },
          "100%": {
            opacity: "1",
            width: " 100%",
            height: "calc(100vh - 60px)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
            width: "100%",
            height: "calc(100vh - 60px)",
          },
          "100%": {
            opacity: "0",
            width: "0",
            height: "0",
          },
        },
      },

      animation: {
        fadein: "fadein 0.3s forwards",
        fadeout: "fadeout 300ms forwards",
      },
    },
  },
  plugins: [],
};
