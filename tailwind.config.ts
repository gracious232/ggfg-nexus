import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B2833',
        navy: '#123E48',
        gold: '#E3A342',
        goldDark: '#B56D28',
        green: '#2C806B',
        coral: '#D96C4A',
        cream: '#FBF7EF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px -32px rgba(18, 62, 72, 0.28)',
      },
    },
  },
  plugins: [],
} satisfies Config;
