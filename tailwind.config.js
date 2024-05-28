export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: {
          1: "#202020",
          2: "#2C2C2C",
          3: "#7E7E7E",
        },
        white: {
          1: "#ffffff",
          2: "#F2F2F2",
        },
        blue: {
          1: "#88B6F2",
          2: "#A2C5F2",
          3: "#C2D7F2",
          4: "#D5E5F2",
        },
      },
    },
  },
  plugins: [],
};
