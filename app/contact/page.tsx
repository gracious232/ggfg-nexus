"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(2,15,26,0.08),_rgba(3,20,33,0.98))] text-navy">
        <div className="mx-auto max-w-6xl px-6 py-18 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gold sm:text-5xl">Let’s build the next generation of founders together.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/80">For partnerships, support, and strategic engagement, we welcome conversations with institutions and leaders who share our long-term vision.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-navy/10 bg-navy/5 p-8">
            <h2 className="text-3xl font-semibold text-gold">Connect with GGFG</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Mail size={20} /></div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Email</p>
                  <p className="mt-2 text-base text-navy/80">ggfg.org@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><Phone size={20} /></div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Phone</p>
                  <p className="mt-2 text-base text-navy/80">+1 629 239 0929</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold"><MapPin size={20} /></div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Location</p>
                  <p className="mt-2 text-base text-navy/80">Nashville, TN, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/10 bg-navy/5 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Send a note</p>
            <p className="mt-3 text-sm leading-7 text-navy/80">GGFG is a Registered 501(c)(3) Organization.</p>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-navy/10 bg-navy/10 px-4 py-3 text-sm outline-none" placeholder="Name" />
              <input className="w-full rounded-2xl border border-navy/10 bg-navy/10 px-4 py-3 text-sm outline-none" placeholder="Email" />
              <textarea className="min-h-36 w-full rounded-2xl border border-navy/10 bg-navy/10 px-4 py-3 text-sm outline-none" placeholder="Share your interest or partnership idea" />
              <button className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Send message <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
