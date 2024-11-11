/* eslint-disable @typescript-eslint/no-explicit-any */



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dot-bg': '#0A0A0A',
        'dot-color': '#848282',
      },
      spacing: {
        'dot-size': '1px',
        'dot-space': '50px',
      },
      fontFamily: {
         "Doto": ["Doto"],
         "Rampart": ["Rampart One", "cursive"],
         "Jersey 25":["Jersey 25"],
       },
    },
  },
  plugins: [],
};

