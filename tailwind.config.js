/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '52': '52px',
      },
      gap: {
        '28': '28px',
        '48': '48px',
      },
      padding:{
        '48': '48px',
      },
      height: {
        '289': '289.33px',
        '63': '63.33px',
        '31': '31.33px',
        '20.89': '20.89px',
        '22.52': '22.52px',
      },
      width: {
        '392': '392px',
        '63': '63.33px',
        '31': '31.33px',
        '22.52': '22.52px',
        '20.89': '20.89px'
      },
      fontWeight: {
        "w-regular": 400,
        "w-bold": 600,
        "w-light": 300,
      },
      fontFamily: {
        "ant-regular": ["ant-regular", "sans-serif"],
        "ant-bold": ["ant-bold", "sans-serif"],
        "ant-light": ["ant-light", "sans-serif"],
      },
      colors: {
        "var-black": "rgba(0, 7, 30, 1)",
        "var-sky-blue": "rgb(187, 255, 255)",
        "var-light-blue": "rgb(0, 188, 255)",
        "var-light-green": "rgb(95, 255, 255)",
        "var-dark-green": "rgb(4, 46, 86)",
        "var-dark-blue": "rgb(4, 20, 86)",
        "var-green": "rgb(4, 166, 162)",
        "var-grey-blue": "rgba(211, 216, 221, 0.25)",
      },
    },
  },
  plugins: [],
};
