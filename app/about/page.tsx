"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Mission',
    text: 'Developing the next generation of leaders, innovators, and job creators by equipping young people with the skills, mindset, and opportunities to turn their potential into impact.',
    icon: ShieldCheck,
  },
  {
    title: 'Vision',
    text: 'To see a generation of young people equipped and empowered to build the future, create opportunity, and transform the world around them.',
    icon: Compass,
  },
  {
    title: 'Leadership Philosophy',
    text: 'We develop leaders who act with discipline, courage, and generational stewardship.',
    icon: Lightbulb,
  },
];

const values = [
  {
    title: 'Why Human Development',
    text: 'Building people is the foundation of long-term resilience, opportunity, and community prosperity.',
  },
  {
    title: 'Why West Africa',
    text: 'The region holds extraordinary energy, talent, and potential — requiring bold, structured systems that unlock opportunity at scale.',
  },
  {
    title: 'Our Approach',
    text: 'We combine capability development, leadership cultivation, ecosystem-building, and opportunity systems into a coherent pathway for regional transformation.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(201,162,39,0.14),_rgba(255,255,255,1))]">
        <div className="mx-auto max-w-6xl px-6 py-18 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">About GGFG</p>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-gold sm:text-5xl">A global movement designing platforms, pathways, and systems that strengthen people, communities, and long-term regional resilience.</h1>
                <p className="max-w-3xl text-lg leading-8 text-navy/80">We build capability, leadership, and opportunity systems that empower individuals and institutions across West Africa and beyond.</p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/5 shadow-soft">
                  <div className="relative h-48 overflow-hidden md:h-[20rem] lg:h-[22rem] bg-slate-50">
                    <Image src="/about-02.jpg" alt="Entrepreneur team collaboration" fill className="object-contain object-center" />
                  </div>
                <div className="border-t border-navy/10 bg-navy p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Focused support</p>
                  <h2 className="mt-4 text-2xl font-semibold">We help people and communities grow with structured, high-touch support.</h2>
                  <p className="mt-4 text-sm leading-7 text-white/75">From capability development and leadership formation to ecosystem building and opportunity access, GGFG creates the systems that enable long-term flourishing.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-[2rem] border border-navy/10 bg-navy/10 p-8 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl font-semibold text-gold">{pillar.title}</h2>
                <p className="mt-4 text-base leading-8 text-navy/80">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/10 shadow-soft">
            <div className="relative h-48 overflow-hidden md:h-[20rem] lg:h-[22rem] bg-slate-50">
              <Image src="/about-01.jpg" alt="Founder coaching session" fill className="object-contain object-center" />
            </div>
            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Mission in action</p>
              <h3 className="mt-4 text-3xl font-semibold text-gold">Strengthening people, communities, and systems through intentional coaching, collaboration, and ecosystem-building.</h3>
              <p className="mt-5 text-base leading-8 text-navy/80">This image represents the capability development, leadership formation, and systems support that power our work.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }} className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white shadow-soft">
            <div className="inline-flex items-center gap-3 rounded-full bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold">Approach</div>
            <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">We design pathways that balance growth, governance, and community momentum.</h3>
            <p className="mt-5 text-base leading-8 text-white/75">GGFG bridges human development with systems-strengthening so individuals and institutions can grow responsibly while generating wider regional impact.</p>
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div key={value.title} className="rounded-[1.75rem] border border-white/10 bg-navy/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">0{index + 1}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{value.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-white/75">{value.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/10 shadow-soft">
            <div className="relative h-48 overflow-hidden md:h-[18rem] lg:h-[20rem] bg-slate-50">
              <Image src="/about-03.webp" alt="" fill className="object-contain object-center" />
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }} className="overflow-hidden rounded-[2rem] border border-navy/10 bg-navy/10 shadow-soft">
              <div className="relative h-36 md:h-44 overflow-hidden bg-slate-50">
                <Image src="/about-04.webp" alt="Regional impact in action" fill className="object-contain object-center" />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Regional impact</p>
                <h3 className="mt-4 text-3xl font-semibold text-gold">A movement designed for sustained, measurable regional outcomes.</h3>
                <p className="mt-4 text-base leading-7 text-navy/80">We strengthen people and institutions that create jobs, build resilience, and unlock community value.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.24 }} className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">What sets us apart</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80">
                <li>Systems-focused support with a regional development mindset.</li>
                <li>Leadership formation that safeguards long-term growth.</li>
                <li>Practical platforms and networks that accelerate capability, opportunity, and community strength.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
