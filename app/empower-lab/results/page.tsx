import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAttempts } from '@/lib/empower-lab-store';

export default function ResultsPage({ searchParams }: { searchParams?: { attemptId?: string } }) {
  const attemptId = searchParams?.attemptId;
  const attempts = getAttempts();
  const attempt = attempts.find((item) => item.id === attemptId);

  if (!attempt) {
    notFound();
  }

  const passed = attempt.passed;

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-8 shadow-soft sm:p-10 lg:p-12">
          {passed ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Assessment Outcome</p>
              <h1 className="mt-4 text-4xl font-semibold text-navy">Congratulations!</h1>
              <h2 className="mt-2 text-2xl font-semibold text-navy/90">You passed the Empower Lab Assessment</h2>
              <div className="mt-8 grid gap-6 rounded-[1.5rem] border border-gold/20 bg-gold/10 p-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Learner Name</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{attempt.learnerName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Score</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{attempt.score}/20</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Percentage</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{attempt.percentage}%</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Status</p>
                  <p className="mt-2 text-xl font-semibold text-navy">PASSED</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/empower-lab/certificate?certificateId=${attempt.certificateId}`} className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">View Certificate</Link>
                <Link href={`/empower-lab/certificate?certificateId=${attempt.certificateId}`} className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Download Certificate</Link>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Assessment Outcome</p>
              <h1 className="mt-4 text-4xl font-semibold text-navy">Keep Learning</h1>
              <h2 className="mt-2 text-2xl font-semibold text-navy/90">You have not yet passed</h2>
              <div className="mt-8 grid gap-6 rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Learner Name</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{attempt.learnerName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Score</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{attempt.score}/20</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Percentage</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{attempt.percentage}%</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Status</p>
                  <p className="mt-2 text-xl font-semibold text-navy">NOT PASSED</p>
                </div>
              </div>
              <p className="mt-7 text-lg leading-8 text-navy/75">You did not meet the passing score. Review the modules and try again.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/empower-lab" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">Review Modules</Link>
                <Link href="/empower-lab/assessment" className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Try Again</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
