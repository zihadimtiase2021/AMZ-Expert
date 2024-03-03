/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html", "**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1280px",
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif'],
        Montserrat: ['"Montserrat", sans-serif'],
      },
      colors: {
        yellow: "#F19E38",
      },
    },
  },
  plugins: [],
};
