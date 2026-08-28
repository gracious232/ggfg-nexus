import Link from 'next/link';
import { notFound } from 'next/navigation';
import { readAssessmentStore } from '@/lib/assessment-data';

export const dynamic = 'force-dynamic';

export default function CertificatePage({ params }: { params: { id: string } }) {
  const store = readAssessmentStore();
  const certificate = store.certificates.find(
    (item: any) => String(item.certificateId || '').toUpperCase() === String(params.id || '').toUpperCase(),
  );

  if (!certificate) {
    notFound();
  }

  const completionDate = new Date(certificate.completionDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-[#eef1f3] text-navy">
      <section className="mx-auto max-w-6xl px-4 py-10 lg:px-8 lg:py-14">
        <article className="relative overflow-hidden border-[10px] border-navy bg-[#fdfcf8] p-3 shadow-soft sm:p-5">
          <div className="relative min-h-[42rem] border border-gold/70 px-6 py-10 text-center sm:px-12 lg:min-h-[39rem] lg:px-20 lg:py-14">
            <div className="absolute left-0 top-0 h-28 w-28 border-b border-r border-gold/70" />
            <div className="absolute bottom-0 right-0 h-28 w-28 border-l border-t border-gold/70" />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center">
              <p className="text-sm font-bold uppercase tracking-[0.34em] text-navy">GGFG Nexus</p>
              <div className="mt-5 h-px w-24 bg-gold" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-gold">Certificate of Achievement</p>
              <h1 className="mt-5 text-4xl font-semibold text-navy sm:text-5xl" style={{ fontFamily: 'Georgia, serif' }}>Empower Lab</h1>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-navy/65">Modules 1-5 Assessment</p>

              <p className="mt-12 text-sm uppercase tracking-[0.22em] text-navy/60">This certifies that</p>
              <p className="mt-4 max-w-full border-b-2 border-gold px-4 pb-4 text-4xl font-medium italic leading-tight text-navy sm:text-5xl" style={{ fontFamily: 'Georgia, serif' }}>
                {certificate.learner?.name}
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-navy/75">
                has successfully completed the Empower Lab assessment and demonstrated the commitment to learn, think, build, and grow as an entrepreneurial leader.
              </p>

              <div className="mt-12 grid w-full max-w-3xl gap-6 border-t border-navy/15 pt-6 text-left sm:grid-cols-3 sm:text-center">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">Completion Date</p>
                  <p className="mt-2 text-sm font-semibold text-navy">{completionDate}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">Certificate ID</p>
                  <p className="mt-2 text-sm font-semibold text-navy">{certificate.certificateId}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">Verification</p>
                  <p className="mt-2 text-sm font-semibold text-navy">GGFG Nexus</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/empower-lab/verify" className="btn-outline-dark">
            Verify Certificate
          </Link>
          <Link href="/empower-lab/assessment" className="btn-navy">
            Back to Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
