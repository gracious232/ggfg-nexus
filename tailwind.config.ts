import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020F1A',
        navy: '#031421',
        gold: '#D2AF2E',
        goldDark: '#A8811C',
        green: '#145A3B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px -32px rgba(6, 26, 45, 0.22)',
      },
    },
  },
  plugins: [],
} satisfies Config;
