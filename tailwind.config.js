module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-mobile": "url('/src/assets/images/bg-header-mobile.svg')",
        "header-desktop": "url('/src/assets/images/bg-header-desktop.svg')",
      },
      colors: {
        gray: {
          DEFAULT: "hsl(180, 8%, 52%)",
        },
        cyan: {
          DEFAULT: "hsl(180, 31%, 95%)",
          light: "hsl(180, 52%, 96%)",
          dark: "hsl(180, 29%, 50%)",
          darkest: "hsl(180, 14%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
