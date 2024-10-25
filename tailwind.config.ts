import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       dark:"#1e1e1e",
       border:"#3a3a3a"
      },
      borderWidth:{
        '0.5':'0.5px'
      },
      screens:{
        xs:"480px"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
