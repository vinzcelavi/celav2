import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'primary': '#f1c40f',
        'secondary': '#d946ef',
        'black': '#161616'
      },
      animation: {
        'word-reveal': 'word-reveal 0.75s ease forwards',
        'marker-animation': 'marker-animation 1.15s cubic-bezier(0.77, 0, 0.175, 1) 0.15s forwards',
      },
      keyframes: {
        "word-reveal": {
          "0%": {
            filter: "blur(16px)",
            opacity: 0,
            transform: "translateY(-40px)",
          },
          "100%": {
            filter: "blur(0)",
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        'marker-animation': {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    fluid
  ],
}

