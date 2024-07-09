/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#212A31",
        text: "#11EABB",
      },
      fontFamily: {
        luxurious: ['"Luxurious Roman"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'roboto-500': 500,
        'luxurious-700': 700,
      },
    },
  },
  plugins: [],
};
