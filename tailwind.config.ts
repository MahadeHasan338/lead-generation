import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "service-bg": "url('/back-min.png')",
      },
      backgroundSize: {
        "auto-100": "auto calc(100%)",
      },
      colors: {
        primary: "#FFC80A",
        "light-yellow": "#E0BC74",
      },
    },
  },
  plugins: [],
};
export default config;
