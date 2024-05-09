/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/exceleration/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stripes': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbfdff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(157deg, #e1f3ff 0%, #e1f3ff 450%);`,
      },
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
