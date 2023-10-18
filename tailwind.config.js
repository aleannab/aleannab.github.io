/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'Roboto', 'sans'], // Replace 'Your-Font-Family' with your desired font 
        serif: ['Comfortaa', 'serif'], // Specify the font for headers
      },
      aspectRatio: {
        '3/1': '3 / 1',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5B3580",
          "secondary": "#63D5FF",
          "secondary-focus": "#114B5F",
          "accent": "#E9D2F4",
          "accent-focus": "#F5DD90",
          "neutral": "#EAEAE7",
          "base-100": "#EAEAE7",
          "info": "#24003C",
          "success": "#587e4c",
          "warning": "#d56e14",
          "error": "#f44336"
        },
      },
      "dracula", 
      "cmyk"],
  },
  plugins: [require("daisyui")],
}

