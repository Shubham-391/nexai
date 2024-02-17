/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url(/src/assets/images/headerbg.webp)",
        globebg: "url(/src/assets/images/globe.webp)",
        hexagonbg: "url(/src/assets/images/hexagon.webp)",
        section5bg: "url(/src/assets/images/section5bg.webp)",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
