"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Compass, Menu, Sparkles, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { value: '40K+', label: 'Entrepreneurs envisioned by 2050' },
  { value: '12', label: 'Countries engaged in regional strategy' },
  { value: '90%', label: 'Founder-led programs with mentorship' },
];

const values = [
  {
    title: 'Leadership',
    text: 'We build founders who think boldly, lead responsibly, and create durable institutions.',
  },
  {
    title: 'Innovation',
    text: 'We equip entrepreneurs to solve local problems with disciplined, scalable ideas.',
  },
  {
    title: 'Excellence',
    text: 'We raise the standards of execution, ethics, and long-term thinking.',
  },
];

const steps = [
  { title: 'Discover', text: 'We identify emerging founders with strong potential and a clear mission.' },
  { title: 'Develop', text: 'We sharpen leadership, business model, and strategic capacity.' },
  { title: 'Build', text: 'We support venture formation, systems, networks, and early traction.' },
  { title: 'Launch', text: 'We help founders enter markets with credibility and momentum.' },
  { title: 'Grow', text: 'We deepen access to capital, partnerships, and scale.' },
  { title: 'Give Back', text: 'We create a culture of stewardship and community reinvestment.' },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/empower-40k', label: 'EMPOWER 40K' },
    { href: '/programs', label: 'Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="relative overflow-hidden border-b border-navy/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.18),_transparent_35%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:px-8 lg:py-28">
          <nav className="relative z-20 flex items-center justify-between rounded-full border border-navy/10 bg-white/80 px-5 py-3 backdrop-blur">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-navy/10 bg-white">
                <Image src="/LOGO.png" alt="GGFG logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-navy">GGFG</p>
                <p className="text-xs text-navy/60">Grind • Grow • Flourish • Give</p>
              </div>
            </Link>
            <div className="hidden items-center gap-6 text-sm font-medium text-navy/70 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-navy">{item.label}</Link>
              ))}
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[1.5rem] border border-navy/10 bg-white p-4 shadow-soft md:hidden">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-navy/80 transition hover:bg-navy/5 hover:text-navy" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                <Sparkles size={16} /> Building a generation of founders
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl">
                We build founders who turn <span className="text-gold">bold ideas</span> into lasting impact across West Africa.
              </h1>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold via-gold/70 to-transparent" />
              <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70">
                GGFG is an entrepreneurship platform for building resilient founders, strengthening local economies, and creating enduring institutions across the region.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/empower-40k" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy/90">
                  Explore EMPOWER 40K <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
                  Discover our approach
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-6 rounded-[2rem] border border-navy/10 bg-white shadow-soft">
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-[2rem] border-b border-navy/10 bg-gradient-to-br from-gold/20 via-white to-navy/5" />
              <div className="rounded-b-[2rem] bg-navy p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Flagship Initiative</p>
                    <h2 className="mt-3 text-3xl font-semibold">EMPOWER 40K</h2>
                  </div>
                  <div className="rounded-full bg-white/10 p-3"><TrendingUp size={24} className="text-gold" /></div>
                </div>
                <p className="mt-6 text-base leading-8 text-white/75">
                  A long-term movement designed to develop 40,000 entrepreneurs across West Africa by 2050 through mentorship, venture support, leadership development, and regional network building.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-semibold text-gold">{stat.value}</p>
                      <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Moments</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-navy/10 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-50">
            <div className="absolute left-3 top-3 z-10 rounded-full bg-white/90 p-2">
              <Sparkles size={16} className="text-gold" />
            </div>
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/OUR%20PURPOSE%20.%20.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our Purpose</p>
            <p className="mt-2 text-sm leading-6 text-navy/70">A concise look at the mission and energy behind GGFG.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Core Values</p>
            <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">We create a standard of excellence that founders can inherit.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <motion.div whileHover={{ y: -6 }} key={value.title} className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Compass size={20} />
                </div>
                <h4 className="text-xl font-semibold text-navy">{value.title}</h4>
                <p className="mt-3 text-sm leading-7 text-navy/70">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-navy/10 bg-[#F7F8FA] p-8 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">How GGFG works</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">We do not simply train entrepreneurs. We build founders for durable impact.</h3>
            </div>
            <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold">
              View programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">0{index + 1}</p>
                  <BarChart3 size={18} className="text-navy/40" />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-navy">{step.title}</h4>
                <p className="mt-3 text-sm leading-7 text-navy/70">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-navy/10 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-navy/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GGFG. Building founders for long-term impact.</p>
          <div className="flex gap-5">
            <Link href="/about" className="transition hover:text-navy">About</Link>
            <Link href="/impact" className="transition hover:text-navy">Impact</Link>
            <Link href="/contact" className="transition hover:text-navy">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
