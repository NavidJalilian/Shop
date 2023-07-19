/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        purple: "#8A33FD",
        darkGray: "#3C4242",
        gray: "#807D7E",
        white: "White",
        lightGray: "#BEBCBD",
        backgroundGray: "#EDEEF2",
        offWhite: "#F6F6F6",
      },
    },
  },
  variants: {},
  plugins: [],
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
