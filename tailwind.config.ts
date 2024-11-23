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
        "about-bg": "url('/shahriar.png')",
        "testimonial-bg": "url('/testimonials.webp')",
      },
      backgroundSize: {
        "auto-100": "auto calc(100%)",
      },
      colors: {
        primary: "#FFC80A",
        paragraph: "#6e6e6e",
        "light-yellow": "#E0BC74",
      },
    },
  },
  plugins: [],
};
export default config;
