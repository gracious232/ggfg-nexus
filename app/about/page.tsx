"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Mission',
    text: 'GGFG Nexus exists to build resilient founders who create solutions, strengthen local economies, and launch institutions that endure.',
    icon: ShieldCheck,
  },
  {
    title: 'Vision',
    text: 'A generation of founders, builders, and innovators transforming emerging markets through disciplined entrepreneurship, leadership, and long-term impact.',
    icon: Compass,
  },
  {
    title: 'Leadership Philosophy',
    text: 'We build founders who lead with discipline, courage, and long-term stewardship.',
    icon: Lightbulb,
  },
];

const values = [
  {
    title: 'Why Entrepreneurship',
    text: 'Entrepreneurship is one of the most powerful engines for job creation, resilience, and local prosperity.',
  },
  {
    title: 'Why West Africa',
    text: 'The region holds extraordinary energy, talent, and opportunity, and requires bold institutional support.',
  },
  {
    title: 'Our Approach',
    text: 'We combine mentorship, network-building, leadership cultivation, and venture support into a coherent founder journey.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(201,162,39,0.14),_rgba(255,255,255,1))]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">About GGFG</p>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl">A modern entrepreneurship network designed to grow founders, institutions, and regional resilience.</h1>
                <p className="max-w-3xl text-lg leading-8 text-navy/75">We develop disciplined founders through mentorship, systems-based support, and leadership training that creates lasting economic strength across West Africa.</p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft">
                  <div className="relative h-48 overflow-hidden md:h-[20rem] lg:h-[22rem] bg-slate-50">
                    <Image src="/about-02.jpg" alt="Entrepreneur team collaboration" fill className="object-contain object-center" />
                  </div>
                <div className="border-t border-navy/10 bg-navy p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Focused support</p>
                  <h2 className="mt-4 text-2xl font-semibold">We move founders from ambition to institution-building with practical, high-touch support.</h2>
                  <p className="mt-4 text-sm leading-7 text-white/75">From strategy and execution to leadership and community impact, GGFG builds the structure that helps ventures thrive beyond launch.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-navy">{pillar.title}</h2>
                <p className="mt-4 text-base leading-8 text-navy/70">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft">
            <div className="relative h-48 overflow-hidden md:h-[20rem] lg:h-[22rem] bg-slate-50">
              <Image src="/about-01.jpg" alt="Founder coaching session" fill className="object-contain object-center" />
            </div>
            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Mission in action</p>
              <h3 className="mt-4 text-3xl font-semibold text-navy">Supporting founders through every stage of enterprise development.</h3>
              <p className="mt-5 text-base leading-8 text-navy/75">This image represents the intentional coaching, collaboration, and systems-building that power our founder journeys.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }} className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white shadow-soft">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold">Approach</div>
            <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">We design a founder journey that balances growth, governance, and community momentum.</h3>
            <p className="mt-5 text-base leading-8 text-white/75">GGFG bridges entrepreneur development with systems-strengthening, so each venture can scale responsibly while generating wider impact.</p>
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div key={value.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">0{index + 1}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{value.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-white/75">{value.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft">
            <div className="relative h-48 overflow-hidden md:h-[18rem] lg:h-[20rem] bg-slate-50">
              <Image src="/about-03.webp" alt="Team working together" fill className="object-contain object-center" />
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }} className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-soft">
              <div className="relative h-36 md:h-44 overflow-hidden bg-slate-50">
                <Image src="/about-04.webp" alt="Regional impact in action" fill className="object-contain object-center" />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Regional impact</p>
                <h3 className="mt-4 text-3xl font-semibold text-navy">A network designed for sustained, measurable local outcomes.</h3>
                <p className="mt-4 text-base leading-7 text-navy/75">We support founders as they build businesses that create jobs, strengthen institutions, and unlock community value.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.24 }} className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">What sets us apart</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80">
                <li>Structured founder support with a regional ecosystem mindset.</li>
                <li>Leadership development that safeguards long-term growth.</li>
                <li>Practical systems and networks that accelerate local scale.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
