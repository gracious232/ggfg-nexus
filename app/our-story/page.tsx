"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Play, Quote } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const timeline = [
  {
    tag: 'Sierra Leone',
    title: 'What he saw growing up',
    text: 'Gracious grew up in Sierra Leone and attended school there. He watched his family work hard to make ends meet, and he saw young people with real qualifications, ideas, and potential struggle to find opportunities once high school ended.',
  },
  {
    tag: 'The years after high school',
    title: 'Dignitary Potentials',
    text: 'After high school, Gracious spent three years trying to find a way to continue his education. During that period he started Dignitary Potentials, a small group built around one idea: bringing light to the potential already inside his community. The thinking behind GGFG existed before GGFG did.',
  },
  {
    tag: '2024',
    title: 'A new academic opportunity',
    text: 'In 2024, Gracious received the opportunity to continue his studies in the United States. It opened a new door academically, but it did not make him forget what he had seen growing up. He carried the same question with him.',
  },
];

export default function OurStoryPage() {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <main className="min-h-screen bg-navy/5 text-navy">
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-midnight/20 bg-midnight text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(227,163,66,0.16),_transparent_40%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-32">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-[0.35em] text-gold"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-balance text-4xl font-semibold leading-tight text-gold sm:text-5xl lg:text-6xl"
            >
              Potential is everywhere. Opportunity isn&apos;t.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75 lg:mx-0"
            >
              This is where the thinking behind GGFG came from, and where it is still going.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 shadow-soft"
          >
            <Image src="/Gracious story picture.jpg" alt="Gracious, founder of GGFG" fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* 2-4. Timeline: beginning, Dignitary Potentials, 2024 */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid gap-6 rounded-[2rem] border border-navy/10 bg-white/60 p-8 shadow-sm md:grid-cols-[0.3fr_0.7fr] md:p-10"
            >
              <div className="flex items-start gap-3 md:flex-col md:items-start md:gap-2">
                <MapPin size={18} className="mt-1 text-gold" />
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{item.tag}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-navy sm:text-3xl">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-navy/80">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. The question — visual anchor */}
      <section className="border-y border-midnight/20 bg-midnight py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <Quote size={28} className="mx-auto text-gold" />
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight text-gold sm:text-4xl lg:text-5xl">
              What can be done about all this potential?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70">
              That question is what Gracious carried from Sierra Leone to the United States. It is still the question GGFG is answering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. From an idea to a mission */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">From an idea to a mission</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Develop 50,000 entrepreneurs across West Africa by 2050.
            </h2>
            <p className="mt-5 text-base leading-8 text-navy/80">
              The goal is not simply to help people find jobs. It is to develop people who can build ventures, solve problems, and create jobs for others — the next generation of job creators.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] border border-navy/10 bg-navy p-10 text-white shadow-soft"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">The long-term goal</p>
            <p className="mt-4 text-5xl font-semibold text-gold">50,000</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">Entrepreneurs by 2050</p>
            <p className="mt-6 text-sm leading-7 text-white/75">Across West Africa, developed as builders and job creators, not job seekers.</p>
          </motion.div>
        </div>
      </section>

      {/* 7. The decision to start */}
      <section className="mx-auto max-w-4xl px-6 pb-20 text-center lg:px-8">
        <motion.div
          {...fadeUp}
          className="rounded-[2rem] border border-navy/10 bg-white/60 p-10 shadow-sm md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">The decision to start</p>
          <h2 className="mt-4 text-2xl font-semibold text-navy sm:text-3xl">He decided to start.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-navy/80">
            Gracious is still completing his degree. He did not wait until everything was figured out before beginning. He started building the mission with a team of people willing to support the vision. That work became GGFG.
          </p>
        </motion.div>
      </section>

      {/* 8. Video */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Hear it from Gracious</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">The story, told personally.</h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-10 aspect-video w-full overflow-hidden rounded-[2rem] border border-navy/10 bg-midnight shadow-soft"
        >
          {videoActive ? (
            // Replace the placeholder below with a <video> or embedded player once the final file is available.
            <div className="flex h-full w-full items-center justify-center bg-midnight text-white/70">
              <p className="text-sm">Video coming soon — add the source in this container.</p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setVideoActive(true)}
              aria-label="Play the Our Story video"
              className="group flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(227,163,66,0.15),_transparent_60%)]"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition group-hover:scale-105 group-hover:bg-goldDark sm:h-24 sm:w-24">
                <Play size={32} className="ml-1" fill="currentColor" />
              </span>
              <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                Video placeholder
              </span>
            </button>
          )}
        </motion.div>
      </section>

      {/* 9. Where we are now */}
      <section className="mx-auto max-w-4xl px-6 pb-20 text-center lg:px-8">
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Where we are now</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            The vision has grown. The reason behind it hasn&apos;t.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy/80">
            GGFG is focused on developing the next generation of job creators across West Africa. GGFG is still being built — and that is part of the story.
          </p>
        </motion.div>
      </section>

      {/* 10. Closing / invitation */}
      <section className="border-t border-midnight/20 bg-midnight py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-2xl font-semibold text-gold sm:text-3xl">The goal is 50,000 entrepreneurs by 2050.</p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">And we are still building.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.paypal.com/us/fundraiser/charity/5746671"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Support the Mission <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="btn-outline-light">
                Build With Us
              </Link>
              <Link href="/empower-50k" className="btn-outline-light">
                Explore Empower 50K
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-navy/10 bg-navy px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GGFG. Building founders for long-term impact.</p>
          <div className="flex gap-5">
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/impact" className="transition hover:text-white">Impact</Link>
            <Link href="/empower-lab" className="transition hover:text-white">Empower Lab</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
