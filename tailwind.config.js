/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ant-regular": ["ant-regular", "sans-serif"],
        "ant-bold": ["ant-bold", "sans-serif"],
        "ant-light": ["ant-light", "sans-serif"],
      },
      colors: {
        "var-sky-blue": "rgb(187, 255, 255)",
        "var-light-blue": "rgb(0, 188, 255)",
        "var-light-green": "rgb(95, 255, 255)",
        "var-dark-green": "rgb(4, 46, 86)",
        "var-dark-blue": "rgb(4, 20, 86)",
        "var-green": "rgb(4, 166, 162)",
      },
    },
  },
  plugins: [],
};
