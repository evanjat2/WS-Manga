/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('/src/assets/images/login/background.png')",
      },
      fontFamily: {
        notoseriftc: ["NotoSerifTC"],
        reemkufiink: ["ReemKufiInk"],
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
