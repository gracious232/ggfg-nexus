"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Handshake, Landmark, Sparkles, Target, Users } from 'lucide-react';

const pillars = [
  {
    title: 'Networking',
    text: 'Connecting entrepreneurs with mentors, professionals, collaborators, organizations, and others who can help unlock ideas and opportunities.',
    icon: Users,
  },
  {
    title: 'Mentorship',
    text: 'Linking promising founders to experienced people who offer guidance, perspective, practical support, and accountability.',
    icon: Handshake,
  },
  {
    title: 'Funding Access',
    text: 'Helping entrepreneurs discover grants, funding opportunities, and other financial resources that can support the next stage of growth.',
    icon: Landmark,
  },
];

const journey = [
  {
    title: 'Discover',
    text: 'Entrepreneurs find opportunities that match their stage, ambition, and needs.',
  },
  {
    title: 'Connect',
    text: 'They meet people, institutions, and collaborators who can help shape their trajectory.',
  },
  {
    title: 'Grow',
    text: 'They gain practical support and resources to move from idea to sustained momentum.',
  },
];

export default function OpenPage() {
  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,_rgba(201,162,39,0.12),_rgba(255,255,255,1)_55%)]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <Sparkles size={14} /> OPEN
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-gold sm:text-5xl lg:text-6xl">
              Opportunities for Promising Entrepreneurs Network
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-navy/80">
              OPEN is a GGFG initiative designed to help promising entrepreneurs build meaningful connections and gain access to the guidance, networks, and resources they need to grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://forms.gle/ggMqwxqmeYhwN9eDA"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Apply now <ArrowRight size={16} />
              </a>
              <Link href="#pillars" className="btn-navy">
                Explore the model
              </Link>
              <Link href="/contact" className="btn-outline-dark bg-white">
                Connect with GGFG
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pillars" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Three core areas</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">A broader ecosystem for entrepreneur growth.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-navy/10 bg-navy/10 p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gold">{pillar.title}</h3>
                <p className="mt-4 text-base leading-8 text-navy/80">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Why it matters</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">OPEN is bigger than a single grant opportunity.</h2>
            </div>
            <div className="rounded-[2rem] border border-navy/10 bg-navy/5 p-8 shadow-sm">
              <p className="text-lg leading-8 text-navy/80">
                Grants are one type of opportunity that can exist within OPEN. The initiative can also include mentorship opportunities, networking opportunities, funding opportunities, and other resources that help promising entrepreneurs discover the next step in their growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">How OPEN works</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">A space for opportunity, relationship-building, and momentum.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journey.map((step, index) => (
            <div key={step.title} className="rounded-[1.75rem] border border-navy/10 bg-navy/10 p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">0{index + 1}</p>
                <Target size={18} className="text-gold" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-gold">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-navy/80">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-navy/10 bg-navy p-10 text-white lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our purpose</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A place where promising entrepreneurs can discover opportunities, build relationships, access support, and keep developing what they are building.</h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
              <BriefcaseBusiness size={26} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
