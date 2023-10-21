/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
        "spin-slow":"spin 300s linear infinite",
        "bounce-slow":"bounce 3s linear infinite"
      },
    },
  },
  plugins: [],
};
