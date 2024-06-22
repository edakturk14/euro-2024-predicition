import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Courier Prime", "monospace"],
      },
      colors: {
        customBlue: '#0000FF',
        brightYellow: '#FFFF00',
        neonGreen: '#39FF14',
        electricBlue: '#7DF9FF',
        magenta: '#FF00FF',
        cyan: '#00FFFF',
        brightOrange: '#FFA500',
        hotPink: '#FF69B4',
        lime: '#00FF00',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
