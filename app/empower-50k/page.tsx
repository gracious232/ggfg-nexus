"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Globe2, Handshake, Rocket, Users } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  'Entrepreneur Development',
  'Leadership Development',
  'Business Incubation',
  'Venture Support',
  'Mentorship',
  'Founder Network',
  'Investment Readiness',
  'Market Access',
  'Annual Summit',
];

const journey = [
  {
    title: 'Discover',
    description: 'Identify young people with entrepreneurial potential.',
    quote: 'Great entrepreneurs exist everywhere. We help find them.',
  },
  {
    title: 'Develop',
    description: 'Equip entrepreneurs with the skills, mindset, and leadership to build successful ventures.',
    quote: 'Knowledge creates confidence.',
  },
  {
    title: 'Mentor',
    description: 'Provide experienced mentors who guide entrepreneurs through every stage of their journey.',
    quote: 'No entrepreneur succeeds alone.',
  },
  {
    title: 'Connect',
    description: 'Open doors to networks, partnerships, markets, and opportunities.',
    quote: 'Relationships accelerate success.',
  },
  {
    title: 'Invest',
    description: 'Prepare entrepreneurs for funding and connect them with grants, investors, and financial opportunities.',
    quote: 'Capital helps good ideas grow.',
  },
  {
    title: 'Multiply',
    description: 'Support entrepreneurs as they scale their businesses, create jobs, and mentor the next generation.',
    quote: 'Success creates more success.',
  },
];

const timeline = [
  { year: '2026–2030', title: 'Founding and regional activation', text: 'Establish regional convening, founder selection, and high-impact pilot programs.' },
  { year: '2031–2040', title: 'Scaling enterprise capacity', text: 'Expand venture support, early-stage access, and leadership pipelines.' },
  { year: '2041–2050', title: 'Systemic economic transformation', text: 'Strengthen a continent-scale founder movement with durable institutions and intergenerational impact.' },
];

export default function EmpowerPage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <section className="border-b border-white/10 bg-[linear-gradient(135deg,_rgba(210,175,46,0.12),_rgba(2,15,26,1))] text-white">
        <div className="mx-auto max-w-6xl px-6 py-18 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower 50K</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gold sm:text-5xl">Developing 50,000 entrepreneurs across West Africa by 2050.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">Empower 50K is GGFG’s flagship regional initiative designed to build founders, strengthen communities, and accelerate a new generation of entrepreneurial leadership.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">A Future Worth Building</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-gold sm:text-4xl">Imagine 50,000 young entrepreneurs across West Africa launching real businesses over the next generation.</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">If, over time, each entrepreneur were able to create opportunities for just 10 other people, the ripple effect could exceed <span className="font-semibold text-gold">500,000 jobs</span> across the region.</p>
          <p className="mt-5 text-lg leading-8 text-white/80">That is the scale of possibility behind <span className="font-semibold text-gold">Empower 50K</span>.</p>
          <p className="mt-8 max-w-4xl text-base leading-8 text-white/80">GGFG Nexus exists to make that future more achievable by developing entrepreneurs with the mindset, leadership, networks, mentorship, and ecosystem support they need to build sustainable ventures. While no outcome can be guaranteed, the potential is extraordinary. Every successful founder has the capacity to create opportunities far beyond their own business, strengthening families, communities, and local economies.</p>
          <p className="mt-8 max-w-3xl text-xl font-semibold leading-8 text-gold">Real transformation begins with one entrepreneur. Multiplied by 50,000, it has the potential to reshape the future of West Africa.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">The Challenge</p>
            <h2 className="mt-3 text-3xl font-semibold text-gold">Too many promising founders are left without the systems, networks, and leadership support needed to scale.</h2>
            <p className="mt-5 text-base leading-8 text-white/80">The next generation of businesses will not emerge from ideal conditions alone. They will emerge from disciplined development, strategic support, and long-term commitment.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-navy p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Why Empower 50K</p>
            <h3 className="mt-3 text-3xl font-semibold text-gold">It is a movement that links talent, leadership, and enterprise into a scalable regional architecture.</h3>
            <p className="mt-5 text-base leading-8 text-white/75">We create the conditions for founders to move from idea to institution with clarity, resilience, and staying power.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Founder Journey</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {journey.map((step, index) => (
              <div key={step.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-gold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{step.description}</p>
                <p className="mt-4 text-sm font-medium italic text-gold">“{step.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Program Pillars</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <span key={pillar} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">{pillar}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Signature Programs</p>
            <div className="mt-6 space-y-4">
              {[
                ['Founder Labs', 'Structured development experiences for emerging leaders.'],
                ['Venture Readiness', 'Support for business model clarity, traction, and fundraising readiness.'],
                ['Regional Summit', 'High-conviction convening for founders, mentors, and partners.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-gold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/80">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-navy p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Timeline to 2050</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{item.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-gold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Join the movement</p>
            <h2 className="mt-3 text-3xl font-semibold text-gold">Support a generation of founders building durable prosperity across West Africa.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://claude.ai/public/artifacts/fb4306b1-c092-4754-bfea-9b967e8256a1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              View Empower Lab Assessment <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold/90">
              Become a partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
