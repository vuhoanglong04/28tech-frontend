/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#0a033c",
        "blue-primary": "#00ADEF",
        'heading': "#192335",
        "white-bg": "#f6fcff",
        'stars': "#FF9747",
        'sky': '#def5fd'
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #001C66, #0a033c, #00ADEF, #0a033c)",
        "blue-light":
          "linear-gradient(155.28deg, #83d7f7 9.26%, #23b8f1 92.24%)",
      },
      fontFamily: {
        "be-vietnam": ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin") ,   require('daisyui')],
};
