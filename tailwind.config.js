/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      wide: "1536px",
      // => @media (min-width: 1536px) { ... }

      ultra: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      screens: {
        'max-h-780px': {'raw': '(max-height: 780px)'},
        'max-h-800px': {'raw': '(max-height: 800px)'},
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
        "var-very-light-grey": "rgba(217, 217, 217, 0.28)",
        "var-light-grey": "rgba(102, 102, 102, 0.5)",
        "var-light-blue": "rgb(0, 188, 255)",
        "var-light-green": "rgb(95, 255, 255)",
        "var-dark-green": "rgb(4, 46, 86)",
        "var-dark-blue": "rgb(4, 20, 86)",
        "var-green": "rgb(4, 166, 162)",
        "var-grey-blue": "rgba(211, 216, 221, 0.5)",
      },
      backgroundImage: {
        "gradient-border-blue": `linear-gradient(138.35deg, #041456 2.75%, rgba(172,235,239,0.937255) 97.73%)`,
        "project-section-gradient": `linear-gradient(235.75deg, rgba(4, 20, 86, 0.3) 3.43%, rgba(172, 235, 239, 0.281176) 95.36%)`,
        "gradient-seated-man": `linear-gradient(90deg, rgba(4, 20, 86, 0.2) 50%, rgba(4, 20, 86, 0) 100%)`,
        "gradient-blue-horizontal-lines": `linear-gradient(120deg, rgba(4, 20, 86, 0.8) 40%, rgba(165, 255, 255, 0.8) 100%)`,
        "gradient-blue-from-left": `linear-gradient(89.35deg, rgba(4, 20, 86, 0.9) 0.54%, rgba(4, 20, 86, 0) 56.6%)`,
        "gradient-blue-from-up": `linear-gradient(181.42deg, rgba(4, 20, 86, 0.9) 1.05%, rgba(4, 20, 86, 0) 62.29%)`
      },
    },
  },
  plugins: [],
};
