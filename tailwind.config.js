/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        signal: {
          paper: '#E8E4DD',
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          blueLight: '#3B82F6',
          bg: '#F5F3EE',
          card: '#FFFFFF',
          cardMuted: '#EFECE6',
          dark: '#111111',
          slate: '#1E1E26',
          muted: '#66666E',
          border: 'rgba(17, 17, 17, 0.12)',
          borderFocus: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'signal-subtle': '0 10px 30px -10px rgba(17, 17, 17, 0.08)',
        'signal-card': '0 20px 40px -15px rgba(17, 17, 17, 0.1), 0 0 1px 1px rgba(17, 17, 17, 0.06)',
        'signal-blue': '0 10px 25px -5px rgba(37, 99, 235, 0.35)',
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      }
    },
  },
  plugins: [],
}
