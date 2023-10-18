/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //#1B1B1E dark
        //#242425 light
        // bgcolor: "#191919",
        bgcolor2: "#242425",
        bgcolor: "#1B1B1E",
        custom: {
          50: "#F2F2F2", // Lightest
          100: "#E6E6E6",
          200: "#BFBFBF",
          300: "#999999",
          400: "#666666",
          500: "#333333", // Base/Darkness
          600: "#2E2E2E",
          700: "#262626",
          800: "#1A1A1A",
          900: "#0D0D0D", // Darkest
        },
      },
    },
  },
  plugins: [],
};
