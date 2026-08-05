import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontWeight: '700', color: 'white' },
            h2: { fontWeight: '700', color: 'white' },
            h3: { fontWeight: '700', color: 'white' },
            p:  { color: '#b8c2cf' },
            li: { color: '#b8c2cf' },
            strong: { color: 'white' },
          },
        },
      },
    },
  },
  plugins: [typography],
};