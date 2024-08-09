/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font: ['"font"', "sans-serif"],
      },
      backgroundImage: {
        "background-noise": "url('./assets/images/background_noise.png')",
      },
      keyframes: {
        wave: {
          "0%, 100%": {
            background: "linear-gradient(to right, #9A1A87, #E423C8)",
          },
          "50%": { background: "linear-gradient(to left, #9A1A87, #E423C8)" },
        },
      },
      animation: {
        wave: "wave 3s linear infinite ",
      },
    },
    colors: {
      white: "#FFFFFF",
      white_smoke: "#F5F5F5",
      dark: "#222222",
      light_dark: "#464646",
      grey: "#8F8F8F",
      grey2: "#939393",
      purple: "#9a1a87",
      pink: "#e423c8",
      light_pink: "#f9e5f6",
      light_purple: "#8b4b82",
      red: "#ff0033",
      green: "#00a725",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".bg-gd": {
            backgroundImage: "linear-gradient(to right, #9A1A87, #E423C8)",
          },
          ".text-gd": {
            backgroundImage: "linear-gradient(to right, #9A1A87, #E423C8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
          ".border-gd": {
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #9A1A87, #E423C8)",
            borderImageSlice: 1,
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
