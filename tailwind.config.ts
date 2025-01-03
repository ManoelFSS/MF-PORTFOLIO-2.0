import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "1xl": "321px",
        "2xl": "376px",
        "3xl": "450px",
        "4xl": "590px",
        "5xl": "890px",
      }
    },
  },
  plugins: [],
} satisfies Config;
