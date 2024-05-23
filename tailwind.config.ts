/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Customize the colors to your liking
        primary: '#1DA1F2', // Twitter blue
        dark: '#15202B',
        light: '#FFFFFF',
        accent: '#1A91DA',
      },
    },
  },
  plugins: [],
};
