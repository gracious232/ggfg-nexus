"use client";

import { motion } from 'framer-motion';
import { Compass, Lightbulb, ShieldCheck, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: 'Mission',
    text: 'GGFG Nexus exists to build resilient founders who create solutions, strengthen local economies, and launch institutions that endure.',
  },
  {
    title: 'Vision',
    text: 'A generation of founders, builders, and innovators transforming emerging markets through disciplined entrepreneurship, leadership, and long-term impact.',
  },
  {
    title: 'Leadership Philosophy',
    text: 'We build founders who lead with discipline, courage, and long-term stewardship.',
  },
];

const values = [
  { title: 'Why Entrepreneurship', text: 'Entrepreneurship is one of the most powerful engines for job creation, resilience, and local prosperity.' },
  { title: 'Why West Africa', text: 'The region holds extraordinary energy, talent, and opportunity, and requires bold institutional support.' },
  { title: 'Our Approach', text: 'We combine mentorship, network-building, leadership cultivation, and venture support into a coherent founder journey.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(201,162,39,0.12),_rgba(255,255,255,1))]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">About GGFG</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">We are building a strong ecosystem for founders who will shape the next era of West Africa.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/70">GGFG develops entrepreneurs. We cultivate leaders, strengthen institutions, and create long-term economic resilience through a disciplined founder journey.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-[1.75rem] border border-navy/10 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                {index === 0 ? <ShieldCheck size={20} /> : index === 1 ? <Lightbulb size={20} /> : <TrendingUp size={20} />}
              </div>
              <h3 className="text-2xl font-semibold text-navy">{pillar.title}</h3>
              <p className="mt-4 text-base leading-8 text-navy/70">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our Approach</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">We are not simply funding ideas. We are building the conditions for enduring enterprise.</h2>
            </div>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <Compass size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/70">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
