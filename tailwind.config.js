/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#232f3e",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#0F1111",
      orange: "#f08804",
      lightYellow: "#febd69",
      lightBlue: "#37475A",
      lightRed: "#CC0C39",
      skyblue: "#007185",
      link: "#007185",
      gray: "#565959",
    },
    screens: {
      sm: { min: "385px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {},
  },
  plugins: [],
};
