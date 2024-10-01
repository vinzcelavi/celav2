/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ]
  },
  theme: {
    extend: {
      fontSize: {
        // This line defines a custom font size named 'intro' using the CSS clamp() function
        // clamp(min, preferred, max)
        // min: 3rem (48px) - The minimum font size
        // preferred: -6rem + 18.75vw - A responsive size that scales with the viewport width
        // max: 6rem (96px) - The maximum font size
        // This creates a responsive font size that scales smoothly between 3rem and 6rem
        'intro': 'clamp(3rem, -6rem + 18.75vw, 6rem)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'primary': '#f1c40f',
        'secondary': '#d946ef',
        'black': '#020617'
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
}

