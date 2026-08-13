"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BrainCircuit, Handshake, Landmark, Sparkles } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    title: 'Founder Development',
    body: 'High-touch programs that strengthen leadership, execution, and strategic clarity across the founding journey.',
    icon: BrainCircuit,
  },
  {
    title: 'Venture Support',
    body: 'Structured guidance around go-to-market, systems, operating discipline, and early-stage traction.',
    icon: BadgeCheck,
  },
  {
    title: 'Mentorship & Network',
    body: 'A strong ecosystem of advisors, professionals, and founders who raise the quality of decisions.',
    icon: Handshake,
  },
  {
    title: 'Regional Convening',
    body: 'Annual summits and collaborative gatherings that connect entrepreneurs and institutions across borders.',
    icon: Landmark,
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(201,162,39,0.12),_rgba(255,255,255,1))]">
        <div className="mx-auto max-w-6xl px-6 py-18 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Programs</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gold sm:text-5xl">Every program is designed to accelerate the founder from ambition to durable enterprise.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/80">GGFG offers a layered architecture of programs that support founders from early discovery through market expansion and community contribution.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div key={program.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.75rem] border border-navy/10 bg-navy/10 p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Icon size={20} /></div>
                <h3 className="mt-6 text-2xl font-semibold text-gold">{program.title}</h3>
                <p className="mt-4 text-base leading-8 text-navy/80">{program.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">A long-term platform</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">We design experiences that create excellence at every stage of the founder journey.</h2>
            </div>
            <Link href="/impact" className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gold/20">
              See impact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
