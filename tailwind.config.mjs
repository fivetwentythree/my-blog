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
          "-apple-system", // Apple system font
          "BlinkMacSystemFont",
          "Inter", // Fallback for non-Apple devices
          ...defaultTheme.fontFamily.sans
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
