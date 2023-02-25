/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#008bc9",
        "primary-200": "#4ae184",
        "primary-300": "#ebded9",
        "primary-400": "#d5dfe8",
        "primary-500": "#1F2833",
        footer: "#eee",
        "footer-text": "#616161",
        "main-100": "#11100f",
        "main-200": "#21201f",
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
      height: {
        "6vh": "6vh",
      },
      keyframes: {
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "100",
          },
        },
        float: {
          from: {
            transform: 'translateY(0px)',
          },
          to: {
            transform: 'translateY(20px)',
          },
        },
      },
      animation: {
        "fade-in": "fade 1s ease-in-out",
        'float-0': "float 3s infinite ease-in-out alternate",
        'float-2': "float 3s infinite 2s ease-in-out alternate",
        'float-4': "float 3s infinite 4s ease-in-out alternate",
        'float-6': "float 3s infinite 6s ease-in-out alternate",
        'float-8': "float 3s infinite 8s ease-in-out alternate",
      }
    },
  },
  plugins: [],
};
