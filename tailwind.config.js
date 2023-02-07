/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1f253a",
          "200": "#21242b",
          "300": "#1a1b20",
          "400": "rgba(0, 0, 0, 0.4)",
        },
        white: "#fff",
        darkslategray: "#322f3b",
        steelblue: "#515b85",
        "blue-grey-4": "#747eaa",
        lightskyblue: "#9ac7fd",
        goldenrod: "#f1b103",
        khaki: "#ffe49b",
      },
      fontFamily: {
        inter: "Inter",
        "open-sans": "'Open Sans'",
        montserrat: "Montserrat",
      },
      borderRadius: { xxs: "1px", small: "3px", base: "14px", large: "20px" },
    },
    fontSize: {
      "3xs": "12px",
      "2xs": "14px",
      xs: "18px",
      sm: "20px",
      base: "24px",
    },
  },
  corePlugins: { preflight: false },
};
