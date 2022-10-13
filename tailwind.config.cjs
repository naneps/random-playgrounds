/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
    daisyui: {
      themes: [{
        mytheme: {

          "primary": "#4f46e5",

          "secondary": "#7c3aed",

          "accent": "#fef9c3",

          "neutral": "#44403c",

          "base-100": "#1c1917",

          "info": "#22d3ee",

          "success": "#22c55e",

          "warning": "#facc15",

          "error": "#ef4444",
        },
      }, ],
    },
}
