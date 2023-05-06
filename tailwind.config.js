/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx}"],
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#5851DB",
        accent: "#F5A623",
        dark: "#2C3E50",
        light: "#F1F1F1",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
