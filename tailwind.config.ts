import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "body",
  theme: {
    extend: {
      fontFamily: {
        "lato-bold": ["Lato-Bold"],
        abel: ["Abel", "SpoqaHanSans", "sans-serif"],
        sans: ["Droid Sans", "AppleSDGothicNeo", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    // 추가
    preflight: false,
  },
};
export default config;
