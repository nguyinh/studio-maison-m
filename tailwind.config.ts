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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)"],
        chango: ["var(--font-chango)"],
      },
      colors: {
        "main-background": "#FFFAEC",
        booking: "#FFCECE",
        "background-remote-recording-1": "#C9EFFF",
        "background-remote-recording-2": "#B8DAE8",
        "background-about-1": "#CDFFC9",
        "background-about-2": "#E4FFE2",
        "background-gear-1": "#93A0CF",
        "background-gear-2": "#A5C4FF",
        "background-gear-3": "#A5B9FF",
        "background-gear-4": "#B2A5FF",
        "background-gear-5": "#CDA5FF",
        "background-gear-6": "#E2A5FF",
        "text-gear-1": "#000000",
        "text-gear-2": "#5775AE",
        "text-gear-3": "#6C79C1",
        "text-gear-4": "#7366BF",
        "text-gear-5": "#8E67C0",
        "text-gear-6": "#A76FC1",
      },
    },
  },
  plugins: [],
};

export default config;
