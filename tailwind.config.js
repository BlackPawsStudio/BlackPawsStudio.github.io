/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#01dbdb",
        shadeColor: "#00a2a2",
        mainDarkColor: "#001314",
        lightColor: "#01dbdb",
      },
      backgroundImage: {
        shadeGradient:
          "linear-gradient(90deg, shadeColor) 0%, transparent 15%, transparent 85%, shadeColor) 100%)",
      },
    },
  },
  plugins: [],
};

// const plugin = require("tailwindcss/plugin");

// // const backfaceVisibility = plugin(function ({ addUtilities }) {
// //   addUtilities({
// //     ".backface-visible": {
// //       "backface-visibility": "visible",
// //     },
// //     ".backface-hidden": {
// //       "backface-visibility": "hidden",
// //     },
// //   });
// // });

// // module.exports = {
// //   plugins: [backfaceVisibility],
// // };
