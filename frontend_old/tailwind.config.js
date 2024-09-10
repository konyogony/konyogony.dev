/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,rs}", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        "sans-serif": ["sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Figtree"],
      },
      colors: {
        gray: {
          ...colors.zinc,
          500: "#30363d",
          600: "#252A35",
          700: "#161b22",
          800: "#0d1117",
          900: "#010409",
        },
      },
      width: {
        "1/20": "5%",
        "3/10": "30%",
        "7/20": "35%",
      },
      animation: {
        enter: "enter .2s ease-out",
        leave: "leave .15s ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": {
            opacity: "0",
            transform: "scale(.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        leave: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(.9)",
          },
        },
      },
      screens: {
        lg: "1400px",
        xl: "1921px",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
