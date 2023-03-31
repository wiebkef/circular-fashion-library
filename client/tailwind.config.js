/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7CDEDC",
          hover: "#55D4D2",
          bluegray: "#A9B3CE",
        },
      },
    },
  },
};
