/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1040",
        },
      },
      colors: {
        sar: "#FFFF00",
        secondary: "#FCE700",
        primary: "#222831",
        ıtem: "#F1F2F3",
        suat: "#39816A",
        stbg: "#8AC481",
        danger: "#ff0000",
        git: "#25316D"
      },
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
