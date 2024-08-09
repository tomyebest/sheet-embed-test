/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Optimise branding
        lightestOrange: "#fff7ed",
        lightOrange: "#fcd34d",
        darkOrange: "#fcb321",
        altOrange: "#de9f21",
        darkBlue: "#082f49",
        midBlue: "#075985",
        lightBlue: "#174870",
        lightestBlue: "#eff6ff",
        darkerBlue: "#0c1d2c",
        darkText: "#000000",
      },
    },
  },
  plugins: [],
};
