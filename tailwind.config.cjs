/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          "primary": "325d0d",
          "secondary": "#56624b",
          "accent": "#0d1d5d",
          "neutral": "#5e5f59",
          "base-100": "#fdfdf5",
          "base-200": "#f3f5ea",
          "base-300": "#dfe4d7",
          "base-content": "#2f312c",
          "--rounded-btn": "1.9rem",
          "--tab-border": "2px",
          "--tab-radius": "0.7rem",
          "--animation-btn": "0",
          "--animation-input": "0",
          "--btn-focus-scale": "1",
        },
      },
    ],
  },
}
