'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { getAttemptByCertificateId } from '@/lib/empower-lab-store';

function CertificateContent() {
  const searchParams = useSearchParams();
  const certificateId = searchParams.get('certificateId')?.toUpperCase();
  const attempt = useMemo(() => (certificateId ? getAttemptByCertificateId(certificateId) : undefined), [certificateId]);
  const [downloadMessage, setDownloadMessage] = useState<string | null>(null);

  const completionDate = attempt?.submittedAt
    ? new Date(attempt.submittedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—';

  const handleDownload = async () => {
    if (!attempt?.certificateId) {
      setDownloadMessage('A valid certificate could not be found to download.');
      return;
    }

    try {
      setDownloadMessage(null);
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      doc.setFillColor(6, 31, 51);
      doc.rect(0, 0, 595, 842, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      doc.text('EMPOWER LAB', 70, 110);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'normal');
      doc.text('CERTIFICATE OF COMPLETION', 70, 150);
      doc.setFontSize(12);
      doc.text(`This certificate is proudly presented to ${attempt.learnerName} for successfully completing the Empower Lab Modules 1–5 Assessment and demonstrating foundational knowledge in entrepreneurship, opportunity recognition, business development, customer understanding, and financial foundations.`, 70, 220, { maxWidth: 450 });
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(attempt.learnerName, 70, 310);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(`Certificate ID: ${attempt.certificateId}`, 70, 360);
      doc.text(`Completion Date: ${completionDate}`, 70, 390);
      doc.text('Empower Lab', 70, 470);
      doc.text('Empower 40K', 70, 500);
      doc.text('GGFG Nexus', 70, 530);
      doc.text('Authorized Signature', 70, 620);
      doc.save(`${attempt.certificateId}.pdf`);
    } catch {
      setDownloadMessage('The certificate could not be generated right now. Please try again in a moment.');
    }
  };

  if (!attempt || !attempt.certificateId) {
    return (
      <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-8 shadow-soft sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower Lab</p>
            <h1 className="mt-4 text-3xl font-semibold text-navy">Certificate not available yet</h1>
            <p className="mt-4 text-lg leading-8 text-navy/75">A verified certificate will appear here after a learner completes the assessment successfully.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/empower-lab/verify" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">Verify Certificate</Link>
              <Link href="/empower-lab" className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Back to Empower Lab</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(120deg,_#0B1F33_0%,_#145A3B_100%)] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower Lab</p>
            <h1 className="mt-4 text-4xl font-semibold">Certificate of Completion</h1>
            <p className="mt-6 text-lg leading-8 text-white/80">“This certificate is proudly presented to {attempt.learnerName} for successfully completing the Empower Lab Modules 1–5 Assessment and demonstrating foundational knowledge in entrepreneurship, opportunity recognition, business development, customer understanding, and financial foundations.”</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Student Name</p>
                <p className="mt-2 text-xl font-semibold">{attempt.learnerName}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Certificate ID</p>
                <p className="mt-2 text-xl font-semibold">{attempt.certificateId}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Program</p>
                <p className="mt-2 text-xl font-semibold">Empower Lab</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Completion Date</p>
                <p className="mt-2 text-xl font-semibold">{completionDate}</p>
              </div>
            </div>
            <div className="mt-10 border-t border-white/20 pt-6 text-sm leading-8 text-white/80">
              <p>Empower Lab</p>
              <p>Empower 40K</p>
              <p>GGFG Nexus</p>
              <p className="mt-4 font-semibold text-gold">Authorized Signature</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <button type="button" onClick={handleDownload} className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">Download Certificate</button>
            <Link href="/empower-lab/verify" className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Verify Certificate</Link>
          </div>
          {downloadMessage ? <p className="mt-4 text-sm text-red-600">{downloadMessage}</p> : null}
        </div>
      </section>
    </main>
  );
}

export default function CertificatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)]" /> }>
      <CertificateContent />
    </Suspense>
  );
}
