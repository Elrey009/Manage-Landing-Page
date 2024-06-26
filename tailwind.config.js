/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: " hsl(13, 100%, 96%)",
        VaryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        BeVietnamPro: "Be Vietnam Pro",
      },
      backgroundImage: {
        mobileImg: "url('/src/assets/images/bg-mobile.svg')",
        tabletImg: "url('/src/assets/images/bg-tablet.svg')",
        DesktopImg: "url('/src/assets/images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
};
