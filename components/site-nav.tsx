'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/empower-40k', label: 'EMPOWER 40K' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact' },
  { href: '/contact', label: 'Contact' },
  { href: '/empower-lab', label: 'Empower Lab' },
];

function isLinkActive(pathname: string, href: string) {
  if (href === '/empower-lab') {
    return pathname === href || pathname.startsWith('/empower-lab/');
  }

  return pathname === href;
}

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-navy/10 bg-white">
            <Image src="/LOGO.png" alt="GGFG logo" width={40} height={40} className="object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-navy">GGFG</p>
            <p className="text-xs text-navy/60">Grind • Grow • Flourish • Give</p>
          </div>
        </Link>

        <div className="hidden flex-wrap items-center justify-end gap-3 text-sm font-medium md:flex lg:gap-4">
          {navItems.map((item) => {
            const isActive = isLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${isActive ? 'font-semibold text-gold' : 'text-navy/70 hover:text-navy'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-navy/10 bg-white px-6 py-3 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = isLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-gold/10 text-gold' : 'text-navy/80 hover:bg-navy/5 hover:text-navy'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
