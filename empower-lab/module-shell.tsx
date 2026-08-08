import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Compass, FileText, Sparkles } from 'lucide-react';
import type { ModuleContent } from '@/app/empower-lab/data/modules';

type ModuleShellProps = {
  module: ModuleContent;
  previous: ModuleContent | null;
  next: ModuleContent | null;
};

export function ModuleShell({ module, previous, next }: ModuleShellProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-6 shadow-soft backdrop-blur sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower Lab</p>
              <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Module {module.number}</h1>
              <h2 className="mt-2 text-2xl font-semibold text-navy/90">{module.title}</h2>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Progress</p>
              <p className="mt-1 text-lg font-semibold text-navy">{module.number} of 5</p>
              <p className="text-sm text-navy/70">{Math.round((module.number / 5) * 100)}% complete</p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-6 lg:p-8">
            <div className="flex items-center gap-3 text-gold">
              <BookOpen size={18} />
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Before You Begin</p>
            </div>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-navy/75">{module.intro}</p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.5rem] border border-navy/10 bg-white p-6">
              <div className="flex items-center gap-3 text-gold">
                <Compass size={18} />
                <h3 className="text-lg font-semibold text-navy">Learning Outcomes</h3>
              </div>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-navy/50">By the end of this module, you should be able to:</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-navy/75">
                {module.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-navy/10 bg-[#0B1F33] p-6 text-white">
              <div className="flex items-center gap-3 text-gold">
                <FileText size={18} />
                <h3 className="text-lg font-semibold">Module Learning Material</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/80">{module.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={module.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90">
                  Open PDF
                </a>
                <a href={module.pdf} download className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/40">
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-gold/20 bg-gold/10 p-6">
            <div className="flex items-center gap-3 text-gold">
              <Sparkles size={18} />
              <h3 className="text-lg font-semibold text-navy">What to do next</h3>
            </div>
            <p className="mt-4 text-lg leading-8 text-navy/80">Read the PDF, take notes, and reflect on what you learned before moving to the next module.</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-navy/10 pt-6 sm:flex-row sm:justify-between">
            {previous ? (
              <Link href={`/empower-lab/${previous.slug}`} className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
                <ArrowLeft size={16} /> Previous Module
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link href={`/empower-lab/${next.slug}`} className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
                Next Module <ArrowRight size={16} />
              </Link>
            ) : (
              <Link href="/empower-lab/assessment" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90">
                Take the Assessment <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
