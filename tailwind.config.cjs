/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
      },
    },
  },
  plugins: [],
};
