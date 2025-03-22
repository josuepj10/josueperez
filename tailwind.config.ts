// tailwind.config.js o tailwind.config.mjs
export default {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/i18n/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          primary: ["var(--font-poppins)"],
          secondary: ["var(--font-jetbrainsMono)"],
        },
      },
    },
    plugins: [],
  };
  