module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(192 132 252)",
        darkmode: "#2F3136",
        darkmode_secondary: "#393939",
        text: "#656565",
        light: "#F0F1F2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
