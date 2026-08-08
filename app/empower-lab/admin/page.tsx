import { getAttempts, getAttemptCount, getFailedCount, getPassedCount } from '@/lib/empower-lab-store';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const attempts = getAttempts();
  const totalAttempts = getAttemptCount();
  const passedCount = getPassedCount();
  const failedCount = getFailedCount();
  const passRate = totalAttempts > 0 ? Math.round((passedCount / totalAttempts) * 100) : 0;

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Secure Admin Area</p>
              <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Empower Lab Admin Dashboard</h1>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Access</p>
              <p className="mt-1 text-lg font-semibold text-navy">Restricted to GGFG Nexus</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.25rem] border border-navy/10 bg-[#F7F8FA] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Total Learners</p>
              <p className="mt-3 text-2xl font-semibold text-navy">{totalAttempts}</p>
            </div>
            <div className="rounded-[1.25rem] border border-navy/10 bg-[#F7F8FA] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Total Attempts</p>
              <p className="mt-3 text-2xl font-semibold text-navy">{totalAttempts}</p>
            </div>
            <div className="rounded-[1.25rem] border border-navy/10 bg-[#F7F8FA] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Passed</p>
              <p className="mt-3 text-2xl font-semibold text-navy">{passedCount}</p>
            </div>
            <div className="rounded-[1.25rem] border border-navy/10 bg-[#F7F8FA] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Pass Rate</p>
              <p className="mt-3 text-2xl font-semibold text-navy">{passRate}%</p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-navy/10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-navy/10 bg-white text-sm">
                <thead className="bg-[#F7F8FA] text-left text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  <tr>
                    <th className="px-4 py-3">Learner Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Percentage</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Attempt</th>
                    <th className="px-4 py-3">Certificate ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/10 text-navy/80">
                  {attempts.map((attempt) => (
                    <tr key={attempt.id}>
                      <td className="px-4 py-3 font-semibold">{attempt.learnerName}</td>
                      <td className="px-4 py-3">{attempt.email}</td>
                      <td className="px-4 py-3">{attempt.score}/20</td>
                      <td className="px-4 py-3">{attempt.percentage}%</td>
                      <td className="px-4 py-3">{attempt.passed ? 'Passed' : 'Not Passed'}</td>
                      <td className="px-4 py-3">{attempt.attemptNumber}</td>
                      <td className="px-4 py-3">{attempt.certificateId || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/empower-lab" className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Return to Empower Lab</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
