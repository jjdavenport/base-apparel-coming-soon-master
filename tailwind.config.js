/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["josefin sans, sans-serif"],
      },
      backgroundPosition: {
        customBg: "center right 6rem",
      },
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        error: "url('./images/icon-error.svg')",
        gradientLinear1:
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        gradientLinear2:
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
};
