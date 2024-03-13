/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '90': '90px',
      },
      borderRadius: {
        '52': '52px',
        '25': '25px',
      },
      gap: {
        '8': '8px',
        '28': '28px',
        '48': '48px',
        '128': '128px',
        52: "52px",
      },
      padding: {
        '21': "21px",
        '25': "25px",
        '48': "48px",
        '83': "83px",
      },
      margin: {
        43.5: "43.5px",
      },
      borderWidth: {
        0.2: "0.2px",
      },
      height: {
        '289': '289.33px',
        '63': '63.33px',
        '66': '66px',
        '51': '51px',
        '56': '56px',
        '31': '31.33px',
        '32': '32px',
        '20.89': '20.89px',
        '22.52': '22.52px',
      },
      width: {
        '392': '392px',
        '63': '63.33px',
        '66': '66px',
        '99': '99px',
        '31': '31.33px',
        '22.52': '22.52px',
        '20.89': '20.89px',
        '123': '123px',
        '198': '198px',
        '205': '205px',
        '229': '229px',
        '400': '400px',
        '617': '617px',
        '702': '702px'
      },
      fontSize: {
        '20': '20px',
        '22': '22px',
        '60': '60px',
        '70': '70px',
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
        "var-light-grey": "rgba(102, 102, 102, 0.5)",
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
