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
    <main className="min-h-screen bg-[#F7F6F0] text-navy">
      <section className="mx-auto max-w-5xl px-4 py-12 lg:px-8">
        <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-soft">
          <div
            className="relative aspect-[1600/1100] w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/GGFG Empower Lab Certificate template.png')" }}
          >
            <div className="absolute left-1/2 top-[46%] -translate-x-1/2 text-center">
              <div className="text-[clamp(2.1rem,2.4vw,3.5rem)] font-medium italic tracking-[0.02em] text-[#021d31]" style={{ fontFamily: 'Georgia, serif' }}>
                {certificate.learner?.name}
              </div>
            </div>

            <div className="absolute bottom-[11.5%] left-[14%] text-left text-[#021d31]">
              <div className="text-[0.58rem] font-semibold uppercase tracking-[0.2em]">Completion Date</div>
              <div className="mt-2 text-[0.75rem] font-medium normal-case tracking-[0.04em]">
                {completionDate}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/empower-lab/verify" className="rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
            Verify Certificate
          </Link>
          <Link href="/empower-lab/assessment" className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
            Back to Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
