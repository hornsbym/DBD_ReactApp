/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/exceleration/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        background: "#404e5a",
        interactiveLayerPrimary: "#123456",
        interactiveLayerSecondary: "#123456",
        interactiveLayerTertiary: "#123456",
        interactiveTextPrimary: "#ffffff",
        interactiveTextSecondary: "#ffffff",
        interactiveTextTertiary: "#ffffff",
      },
      fontFamily: {
        primary: ["Graphik", "sans-serif"],
        secondary: ["Merriweather", "serif"],
      },
      colors: {
        lightBlue: "#e1f3ff",
        darkBlue: "#00416b",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
