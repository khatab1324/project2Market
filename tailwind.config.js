/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    keyframes: {
      colorCycle: {
        "0%, 100%": { color: "#004356" },
        "25%": { color: "#00ffff" },
        "50%": { color: "#ffffff" },
        "75%": { color: "#00ffff" },
      },
    },
    animation: {
      colorCycle: "colorCycle 5s linear infinite", // Adjust the duration as needed
    },
    backgroundImage: {
      "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      "conic-gradient":
        "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
    },
    dropShadow: {
      glowForTitle: [
        "0 0px 20px rgba(5,150, 255, 0.30)",
        "0 0px 65px rgba(255, 255,255, 0.3)",
      ],
    },

    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },
  plugins: [],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
