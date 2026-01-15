/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38BDF8',
          50: '#E8F8FE',
          100: '#D5F2FD',
          200: '#AEE6FB',
          300: '#87DAF9',
          400: '#60CEF7',
          500: '#38BDF8',
          600: '#0AA7EA',
          700: '#0882B4',
          800: '#065D7F',
          900: '#04384A',
        },
        secondary: {
          DEFAULT: '#A855F7',
          50: '#F5EBFE',
          100: '#EDD8FE',
          200: '#DBB1FD',
          300: '#C98AFB',
          400: '#B663FA',
          500: '#A855F7',
          600: '#8B22F4',
          700: '#6D0BCF',
          800: '#51089A',
          900: '#350566',
        },
        accent: {
          DEFAULT: '#22C55E',
          50: '#E9FBF0',
          100: '#D4F7E1',
          200: '#A9EFC4',
          300: '#7EE7A7',
          400: '#53DF8A',
          500: '#22C55E',
          600: '#1B9C4B',
          700: '#147338',
          800: '#0E4A24',
          900: '#072111',
        },
        background: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          lighter: '#334155',
        },
        text: {
          DEFAULT: '#E5E7EB',
          muted: '#9CA3AF',
          dark: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'primary-gradient': 'linear-gradient(135deg, #38BDF8 0%, #A855F7 100%)',
        'accent-gradient': 'linear-gradient(135deg, #22C55E 0%, #38BDF8 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-primary': '0 0 40px rgba(56, 189, 248, 0.3)',
        'glow-secondary': '0 0 40px rgba(168, 85, 247, 0.3)',
        'glow-accent': '0 0 40px rgba(34, 197, 94, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'typewriter': 'typewriter 3s steps(30) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(56, 189, 248, 0.8)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
