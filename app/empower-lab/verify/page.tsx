import Link from 'next/link';
import { getAttemptByCertificateId } from '@/lib/empower-lab-store';

export default function VerifyPage({ searchParams }: { searchParams?: { certificateId?: string } }) {
  const certificateId = searchParams?.certificateId?.trim();
  const attempt = certificateId ? getAttemptByCertificateId(certificateId) : undefined;

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Certificate Verification</p>
            <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Verify a certificate</h1>
            <p className="mt-4 text-lg leading-8 text-navy/75">Enter a certificate ID to confirm the record for a learner who completed the Empower Lab assessment.</p>
          </div>

          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input name="certificateId" defaultValue={certificateId || ''} placeholder="Enter certificate ID" className="w-full rounded-full border border-navy/10 bg-[#F7F8FA] px-5 py-3 text-base outline-none" />
            <button type="submit" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">Verify</button>
          </form>

          {certificateId && !attempt ? (
            <div className="mt-8 rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-6">
              <h2 className="text-2xl font-semibold text-navy">Certificate Not Found</h2>
            </div>
          ) : null}

          {attempt ? (
            <div className="mt-8 rounded-[1.5rem] border border-gold/20 bg-gold/10 p-6">
              <h2 className="text-2xl font-semibold text-navy">Certificate Verified</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Certificate ID</p>
                  <p className="mt-2 text-lg font-semibold text-navy">{attempt.certificateId}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Learner Name</p>
                  <p className="mt-2 text-lg font-semibold text-navy">{attempt.learnerName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Program</p>
                  <p className="mt-2 text-lg font-semibold text-navy">Empower Lab</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Status</p>
                  <p className="mt-2 text-lg font-semibold text-navy">{attempt.passed ? 'PASSED' : 'NOT PASSED'}</p>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-8">
            <Link href="/empower-lab" className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Return to Empower Lab</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
