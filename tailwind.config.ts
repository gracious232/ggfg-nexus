import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061A2D',
        gold: '#C9A227',
        green: '#145A3B',
      },
      boxShadow: {
        soft: '0 24px 80px -32px rgba(6, 26, 45, 0.22)',
      },
    },
  },
  plugins: [],
} satisfies Config;
