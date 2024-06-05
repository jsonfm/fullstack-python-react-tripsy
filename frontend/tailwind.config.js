/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B49FF",
        secondary: "#e0274a",
        accent: "#e0274a",
        success: "#4dcb52",
        warning: "#fabd37",
        base: "#eceff6",
      },
    },
  },
  plugins: [],
};

export default config;
