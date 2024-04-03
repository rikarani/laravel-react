import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./resources/views/*.blade.php",
    "./resources/ts/components/**/*.tsx",
    "./resources/ts/components/*.tsx",
    "./resources/ts/pages/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...fontFamily.sans],
      },
      keyframes: {
        rotate: {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
      },
      animation: {
        rotate: "rotate 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
