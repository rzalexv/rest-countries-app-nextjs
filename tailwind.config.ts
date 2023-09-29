import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(207, 26%, 17%)",
        "dark-soft": "hsl(209, 23%, 22%)",
        light: "hsl(0, 0%, 98%)",
        "light-gray": "hsl(0, 0%, 52%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
