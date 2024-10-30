/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444"
      },
      screens: {
        screen1: "480px",
        screen2: "640px",
        screen3: "860px",
        screen4: "1120px",
        screen5: "1280px",
      }
    }
  },
  plugins: [],
};
