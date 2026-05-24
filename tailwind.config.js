/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0B0F19',
          card: '#111827',
          cardMuted: '#1E293B',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          blue: '#3B82F6',
          glow: '#60A5FA',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 35px rgba(96, 165, 250, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}
