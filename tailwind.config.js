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
        white: "White", // You can add the actual color value if needed
        lightGray: "#BEBCBD",
        backgroundGray: "#EDEEF2",
        offWhite: "#F6F6F6",
      },
      fontSize: {
        56: "56px",
        48: "48px",
        40: "40px",
        32: "32px",
        24: "24px",
        20: "20px",
        16: "16px",
      },
      lineHeight: {
        "67.20": "67.20px",
        "57.60": "57.60px",
        48: "48px",
        "38.40": "38.40px",
        "28.80": "28.80px",
        28: "28px",
        24: "24px",
      },
      fontFamily: {
        "core-sans-c": "Core Sans C",
      },
      wordWrap: {
        "break-word": "break-word",
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
