/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my: {
          black: "#150C07",
          orange: "#E8865C",
          white: "#F1E9E6",
          skin: "#EDE1DC",
          gray1: "#BFB9B6",
          gray2: "#8C8886",
          gray3: "#595655",
          gray4: "#262524",
        },
      },
      fontFamily: {
        kanit: ["var(--font-kanit)", ...fontFamily.sans],
      },
      screens: {
        390: "390px",
        412: "412px",
        768: "768px",
        810: "810px",
        1280: "1280px",
        1366: "1366px",
        1440: "1440px",
        1536: "1536px",
        1600: "1600px",
        1920: "1920px",
        2560: "2560px",
        3840: "3840px",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
