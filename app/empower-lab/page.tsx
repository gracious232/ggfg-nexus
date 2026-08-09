import Link from 'next/link';
import { ArrowRight, BadgeCheck, BookOpen, Target } from 'lucide-react';
import { empowerLabModules } from './data/modules';

export default function EmpowerLabHomePage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">EMPOWER LAB</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl">A practical learning environment for young entrepreneurs.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/75">
              Empower Lab is a practical entrepreneurship learning experience created by GGFG Nexus as part of Empower 40K. It helps young people develop the mindset, knowledge, and practical skills needed to recognize opportunities, build solutions, understand customers, and develop sustainable businesses.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-navy/75">
              This learning journey is designed to be calm, clear, and structured. Each module is short enough to read with focus, practical enough to apply, and connected to the next step of growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/empower-lab/module-1" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
                Begin Module 1 <ArrowRight size={16} />
              </Link>
              <a
                href="https://claude.ai/public/artifacts/fb4306b1-c092-4754-bfea-9b967e8256a1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90"
              >
                Take the Empower Lab Assessment <ArrowRight size={16} />
              </a>
              <Link href="/empower-lab" className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
                Browse All Modules
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/10 bg-[#F7F8FA] p-8 shadow-sm">
            <div className="flex items-center gap-3 text-gold">
              <Target size={18} />
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Learning Journey</p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-navy/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Start Here</p>
                <p className="mt-2 text-lg font-semibold text-navy">Build your entrepreneurial mindset.</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Then</p>
                <p className="mt-2 text-lg font-semibold text-navy">Learn to observe problems and opportunities.</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Finally</p>
                <p className="mt-2 text-lg font-semibold text-navy">Test ideas, understand customers, and strengthen your business foundations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Modules</p>
              <h3 className="mt-2 text-3xl font-semibold text-navy">Your learning dashboard</h3>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Progress</p>
              <p className="mt-1 text-lg font-semibold text-navy">Module 1 of 5</p>
              <p className="text-sm text-navy/70">20% complete</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            {empowerLabModules.map((module) => (
              <Link href={`/empower-lab/${module.slug}`} key={module.id} className="group rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-6 transition hover:-translate-y-1 hover:border-gold/30">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">Module {module.number}</span>
                      <span className="flex items-center gap-2 text-sm font-medium text-gold">
                        <BadgeCheck size={16} /> Practical learning
                      </span>
                    </div>
                    <h4 className="mt-4 text-2xl font-semibold text-navy">{module.title}</h4>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-navy/70">{module.intro}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-3 text-sm font-semibold text-navy transition group-hover:border-gold/30 group-hover:text-gold">
                    <BookOpen size={16} /> Open module <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Learn</p>
            <p className="mt-3 text-lg leading-8 text-navy/75">Move from ideas to practical understanding through structured, calm learning.</p>
          </div>
          <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Think</p>
            <p className="mt-3 text-lg leading-8 text-navy/75">Develop a sharper eye for problems, opportunities, customers, and business value.</p>
          </div>
          <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Build & Grow</p>
            <p className="mt-3 text-lg leading-8 text-navy/75">Translate learning into action, then continue strengthening your foundation with confidence.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
