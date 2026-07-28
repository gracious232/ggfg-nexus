"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CircleDollarSign, Leaf, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

const outcomes = [
  { title: 'Job creation', body: 'Build businesses that generate employment, strengthen households, and expand local opportunity.', icon: Users },
  { title: 'Economic resilience', body: 'Develop ventures that improve regional productivity and sustain long-term prosperity.', icon: TrendingUp },
  { title: 'Sustainable growth', body: 'Support founders who build enterprises rooted in ethical stewardship and community value.', icon: Leaf },
  { title: 'Capital readiness', body: 'Prepare founders to access capital, partnerships, and scale pathways with credibility.', icon: CircleDollarSign },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(6,26,45,0.06),_rgba(255,255,255,1))]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Impact</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">GGFG measures impact not only by output, but by the durability of the founders it creates.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/70">The ambition is clear: build founders who generate high-value businesses, strengthen communities, and expand long-term regional prosperity.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div key={outcome.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.75rem] border border-navy/10 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Icon size={20} /></div>
                <h3 className="mt-6 text-2xl font-semibold text-navy">{outcome.title}</h3>
                <p className="mt-4 text-base leading-8 text-navy/70">{outcome.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Long-term vision</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Our impact will compound over decades through founders, families, communities, and institutions.</h2>
            </div>
            <Link href="/partners" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              View partners <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
