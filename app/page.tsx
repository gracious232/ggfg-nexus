"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Compass, Sparkles, TrendingUp } from 'lucide-react';

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

const pillars = [
  { title: 'Capability Platforms', text: 'Scalable systems that build skills, confidence, and growth.' },
  { title: 'Leadership Pathways', text: 'Structured journeys that develop visionary leaders.' },
  { title: 'Community Ecosystems', text: 'Environments and networks that enable people to flourish.' },
  { title: 'Opportunity Systems', text: 'Infrastructure that expands long-term social and economic mobility.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="relative overflow-hidden border-b border-navy/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.18),_transparent_35%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                <Sparkles size={16} /> Building platforms, pathways, and systems
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl">
                We build platforms, pathways, and systems that empower people to shape their future and create lasting impact.
              </h1>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold via-gold/70 to-transparent" />
              <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70">
                GGFG operates through capability platforms, leadership pathways, community ecosystems, and opportunity systems that help individuals and communities grow, lead, and flourish.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-navy/70">
                GGFG is a global movement designing the platforms and systems that unlock human potential. Through capability development, leadership formation, community ecosystem building, and long-term opportunity systems, we empower people to transform their lives and shape the future.
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
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-[2rem] border-b border-navy/10 bg-slate-50">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.2),_transparent_45%)]" />
                  <div className="absolute bottom-6 left-6 max-w-sm rounded-[1.5rem] border border-white/70 bg-white/80 p-5 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Flagship Initiative</p>
                    <p className="mt-2 text-lg font-semibold text-navy">EMPOWER 40K</p>
                    <p className="mt-2 text-sm leading-7 text-navy/70">A long-term movement designed to build practical entrepreneurship capacity across West Africa.</p>
                  </div>
                </div>
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
        <div className="rounded-[2.5rem] border border-navy/10 bg-[linear-gradient(120deg,_rgba(201,162,39,0.12),_rgba(6,26,45,0.03))] p-8 shadow-sm lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Now on the main site</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Empower Lab brings practical learning, assessments, and certificates into one clear experience.</h3>
              <p className="mt-4 text-lg leading-8 text-navy/70">Visitors can now explore the learning modules, take the assessment, and view the certificate journey directly from GGFG’s public site.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/empower-lab" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
                  Explore Empower Lab <ArrowRight size={16} />
                </Link>
                <Link href="/empower-lab-assessment" className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
                  Start the assessment
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">What’s inside</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-navy/75">
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><span>Five focused learning modules built around practical entrepreneurship content.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><span>A structured assessment experience for learners and facilitators.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><span>Certificate viewing and verification pathways for completed learners.</span></li>
              </ul>
            </div>
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">How GGFG Works</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">GGFG creates impact through four core pillars:</h3>
            </div>
            <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold">
              View programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">0{index + 1}</p>
                  <BarChart3 size={18} className="text-navy/40" />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-navy">{pillar.title}</h4>
                <p className="mt-3 text-sm leading-7 text-navy/70">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-navy/10 bg-white p-8 shadow-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Explore Our Work</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Our initiatives strengthen people, communities, and systems across regions.</h3>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-[#F7F8FA] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower 40K</p>
              <p className="mt-4 text-lg leading-8 text-navy/70">Empower 40K is our entrepreneurship and founder-building platform focused on West Africa.</p>
              <Link href="/empower-40k" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-navy/10 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-navy/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GGFG. Building founders for long-term impact.</p>
          <div className="flex gap-5">
            <Link href="/about" className="transition hover:text-navy">About</Link>
            <Link href="/impact" className="transition hover:text-navy">Impact</Link>
            <Link href="/empower-lab" className="transition hover:text-navy">Empower Lab</Link>
            <Link href="/contact" className="transition hover:text-navy">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
