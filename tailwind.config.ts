import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(240, 5%, 15%)',
        input: 'hsl(240, 5%, 12%)',
        ring: 'hsl(300, 100%, 40%)',
        background: 'hsl(240, 10%, 6%)',
        foreground: 'hsl(0, 0%, 95%)',
        primary: {
          DEFAULT: 'hsl(320, 100%, 60%)', // Vibrant pink
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(210, 100%, 60%)', // Bright blue
          foreground: 'hsl(0, 0%, 100%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        muted: {
          DEFAULT: 'hsl(240, 5%, 15%)',
          foreground: 'hsl(240, 5%, 70%)',
        },
        accent: {
          DEFAULT: 'hsl(280, 100%, 60%)', // Purple-pink accent
          foreground: 'hsl(0, 0%, 100%)',
        },
        popover: {
          DEFAULT: 'hsl(240, 10%, 8%)',
          foreground: 'hsl(0, 0%, 95%)',
        },
        card: {
          DEFAULT: 'hsl(240, 10%, 8%)',
          foreground: 'hsl(0, 0%, 95%)',
        },
        dark: {
          DEFAULT: 'hsl(240, 10%, 6%)',
          light: 'hsl(240, 10%, 12%)',
          lighter: 'hsl(240, 10%, 18%)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-cinzel)'],
        display: ['var(--font-playfair)'],
        cursive: ['var(--font-dancing)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;