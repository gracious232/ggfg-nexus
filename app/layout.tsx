import type { Metadata } from 'next';
import './globals.css';
import SiteNav from '../components/site-nav';

export const metadata: Metadata = {
  title: 'GGFG | Grind Grow Flourish Give',
  description: 'GGFG builds founders, cultivates leaders, and strengthens communities through entrepreneurship across West Africa.',
  keywords: ['GGFG', 'entrepreneurship', 'West Africa', 'founders', 'leadership'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
