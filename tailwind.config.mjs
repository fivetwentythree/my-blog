import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Gill Sans",
          "Gill Sans MT",
          "Calibri",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          ...defaultTheme.fontFamily.sans
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
