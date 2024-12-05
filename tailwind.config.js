/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6405A7",
        secondary: "#0B3F5D",
        tertiary: "#020617",
        quaternary: "#9b59b6",

        white1: "#ffffff",
        white2: "#F9F9F9",
        white3: "#F4F4F4",
        white4: "#EBEBEB",
        white5: "#D9D9D9",
        white6: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
