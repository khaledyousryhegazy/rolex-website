/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "var(--first-color)",
        buttonColor: "var(--button-color)",
        actionColor: "var(--action-color)",
        titleColor: "var(--title-color)",
        textColor: "var(--text-color)",
        textColorLight: "var(--text-color-light)",
        bodyColor: "var(--body-color)",
        boxColor: "var(--box-color)",
        borderColor: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
