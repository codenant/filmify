/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mango: "#FCA311",
        flatBlack: "#1F1F1F",
        faded: "#242424",
        flatWhite: "#F2F2F2",
        mySlate: "#E5E5E5",
        blink: "#1249C0",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
