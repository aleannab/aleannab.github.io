/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#730B44",
          "secondary": "#7677A2",
          "accent": "#D0975A",
          "neutral": "#faf7f9",
          "base-100": "#faf7f9",
          "info": "#15151E",
          "success": "#587e4c",
          "warning": "#d56e14",
          "error": "#f44336",
        },
      },
      "dracula", 
      "cmyk"],
  },
  plugins: [require("daisyui")],
}

