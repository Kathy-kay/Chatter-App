/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "auth-800": "#06283d",
        "auth-500": "#163855",
        "coral-red": "#fe5000",
        "primary-blue": "#001233",
        biege: "#efe0ca",
      },
    },
  },
  plugins: [],
};
