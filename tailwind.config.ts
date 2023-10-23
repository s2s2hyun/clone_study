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
      screens: {
        xs: { min: "340px", max: "389px" },
        sm: { min: "390px", max: "768px" },
        ms: { min: "769px", max: "819px" },
        md: { min: "820px", max: "1023px" },
        lg: { min: "1024px", max: "1536px" },
        xl: { min: "1537px", max: "1920px" },
        "2xl": { min: "1921px" },
      },
      spacing: {
        "1/2": "50%",
        "49": "49%",
        "1/3": "33%",

        "1/4:": "25%", // This adds a utility for 50% spacing
      },
      fontFamily: {
        "lato-bold": ["Lato-Bold"],
        abel: ["Abel", "SpoqaHanSans", "sans-serif"],
        sans: ["Droid Sans", "AppleSDGothicNeo", "sans-serif"],
      },
      backgroundImage: {
        "middle-bg": "url('/assets/dividerImg/abc8ac48.jpg')",
        "middleTwo-bg": "url('/assets/dividerImg/85b7a34.png')",
        "event-bg": "url(/assets/dividerImg/d8bd377cb.jpg)",
        "market-bg": "url(/assets/dividerImg/makefolio-middle-banner.jpg)",
        "dog-bg":
          "url(/assets/exprience/c1637321e6972b05a4fa73a85ecb534bb9e56944.jpg)",
        "read-book-bg":
          "url(/assets/exprience/81a3ca71b3e62261308dcadb1769b118fe93920f.jpg)",
        "fire-look-bg":
          "url(/assets/exprience/c20009b68857334c9291cfa2548c6280c6db8b92.jpg)",
        "drink-bg":
          "url(/assets/exprience/c553881dec7abd0383a0962bc8c9cdf0b355d5fe.jpg)",
        "outdoor-bg":
          "url(/assets/exprience/87387cb2e5ad2db1c4ec1cf41b333fdc30c73826.jpg)",
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
