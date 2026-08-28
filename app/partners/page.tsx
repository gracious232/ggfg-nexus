"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Globe2, Handshake } from 'lucide-react';
import Link from 'next/link';

const partners = [
  'Governments and public institutions',
  'Universities and innovation hubs',
  'Corporate partners and industry leaders',
  'Foundations and philanthropic networks',
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(201,162,39,0.12),_rgba(255,255,255,1))]">
        <div className="mx-auto max-w-6xl px-6 py-18 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Partners</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gold sm:text-5xl">GGFG builds with institutions that understand that long-term development requires durable leadership.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/80">Our partnerships strengthen the founder journey through strategic collaboration, resources, and shared commitment to excellence.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-hover rounded-[2rem] border border-navy/10 bg-navy/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Handshake size={20} /></div>
            <h2 className="mt-6 text-3xl font-semibold text-gold">We collaborate with institutions that see entrepreneurship as a strategic lever for transformation.</h2>
            <p className="mt-5 text-base leading-8 text-navy/80">GGFG creates a platform where public, private, academic, and philanthropic organizations can contribute to a more capable founder ecosystem.</p>
          </div>
          <div className="card-hover rounded-[2rem] border border-navy/10 bg-navy/5 p-8 shadow-sm">
            <div className="flex gap-3">
              <Briefcase size={20} className="text-gold" />
              <h3 className="text-xl font-semibold text-gold">Partner categories</h3>
            </div>
            <div className="mt-6 space-y-4">
              {partners.map((partner) => (
                <div key={partner} className="rounded-[1.25rem] border border-navy/10 bg-navy/10 p-5 text-sm font-medium text-navy/80">{partner}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Become a partner</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Join a movement committed to developing the next generation of entrepreneurs across West Africa.</h2>
            </div>
            <Link href="/contact" className="btn-gold">
              Get involved <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
