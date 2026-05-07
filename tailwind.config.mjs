/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // wise-dark canvas
        canvas: '#0e0f0c',
        surface: '#1a1b17',
        // brand accent
        lime: {
          DEFAULT: '#9fe870',
          dark: '#163300',
          mint: '#e2f6d5',
          pastel: '#cdffad',
          tint: '#9fe87022',
        },
        // ink
        ink: {
          white: '#ffffff',
          mint: '#e2f6d5',
          gray: '#868685',
        },
        // border / hairline
        hairline: '#ffffff1f',
        // roland-garros accents (sports section)
        rg: {
          green: '#00503c',
          orange: '#cc4e0e',
          orangeBright: '#e38045',
        },
      },
      fontFamily: {
        display: ['"Wise Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        pixel: ['"Press Start 2P"', '"VT323"', 'monospace'],
      },
      letterSpacing: {
        tool: '0.15em',
      },
      borderRadius: {
        card: '30px',
        feature: '40px',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.96' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        cursor: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 0.15s infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        cursor: 'cursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
