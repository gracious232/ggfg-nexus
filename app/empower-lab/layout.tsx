import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ClipboardCheck, GraduationCap, Home, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Empower Lab | GGFG Nexus',
  description: 'A dedicated digital entrepreneurship learning experience for Empower 40K.',
};

const sectionLinks = [
  { href: '/empower-lab', label: 'Home', icon: Home },
  { href: '/empower-lab/module-1', label: 'Modules', icon: BookOpen },
  { href: '/empower-lab/assessment', label: 'Assessment', icon: ClipboardCheck },
  { href: '/empower-lab/certificate', label: 'Certificate', icon: GraduationCap },
  { href: '/empower-lab/verify', label: 'Verify Certificate', icon: ShieldCheck },
];

export default function EmpowerLabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-navy/10 bg-[linear-gradient(120deg,_rgba(201,162,39,0.12),_rgba(6,26,45,0.03))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              <Sparkles size={16} /> Empower Lab
            </div>
            <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Learn. Think. Build. Grow.</h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-navy/70 sm:text-base">
              A practical entrepreneurship learning environment created by GGFG Nexus as part of Empower 40K.
            </p>
          </div>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-navy/15 px-4 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
            Return to GGFG Nexus
          </Link>
        </div>

        <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 pb-6 lg:px-8">
          {sectionLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/85 px-4 py-2 text-sm font-medium text-navy/80 transition hover:border-gold/30 hover:text-gold">
                <Icon size={16} /> {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
    </div>
  );
}
