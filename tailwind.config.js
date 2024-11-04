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
      gridTemplateColumns: {
        '33/67': '33% 67%',
      },
      aspectRatio: {
        'project-preview': '6 / 5'
      },
      fontSize: {
        // https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#calculating-preferred-value-parameters-based-on-specific-starting-and-ending-points
        'intro': 'clamp(2.5rem, 7vw, 6rem)',
        'project-title': 'clamp(12rem, 25vw, 18rem)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'huge': '0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07)'
      },
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'dark': 'var(--dark)',
        'light': 'var(--light)',
      },
      transitionTimingFunction: {
        'ease-in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
        'ease-out-quad': 'cubic-bezier(0.5, 1, 0.89, 1);',
      },
      animation: {
        'word-reveal': 'word-reveal 0.75s ease forwards',
        'marker-animation': 'marker-animation 1.15s cubic-bezier(0.77, 0, 0.175, 1) 0.15s forwards',
        'spin-slow': 'spin 12s linear infinite',
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

