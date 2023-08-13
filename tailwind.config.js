/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity = function (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else return `rgba(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        car: "url(../assets/img/background.jpg)",
      },
      colors: {
        black06: "rgba(0, 0, 0, 0.6)",
        white04: "rgba(255, 255, 255, 0.4)",
        white10: "rgba(255, 255, 255, 0.1)",
        goldCustom: "#FFB620",
        blueCustom: "rgb(28, 117, 253)",
      },
      boxShadow: {
        grayCustom: "0 0 6px 2px rgba(219, 188, 159, 0.3)",
        blueCustom: "0 0 6px 2px rgba(28, 117, 253, 0.3)",
      },
      keyframes: {
        fadeOut: {
          "0%": { visbility: "visbile" },
          "100%": { visbility: "hidden" },
        },
        fadeIn: {
          "0%": { visbility: "visible" },
          "100%": { visbility: "visible" },
        },
      },
      animation: {
        fadeOut: "fadeOut 500ms linear",
        fadeIn: "fadeIn 500ms linear",
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
