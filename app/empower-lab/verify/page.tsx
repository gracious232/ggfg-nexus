"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    const trimmed = certificateId.trim();

    if (!trimmed) {
      setError('Please enter a certificate ID to verify.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/assessment/verify?certificateId=${encodeURIComponent(trimmed)}`);
      const data = await response.json();

      if (!response.ok || !data.valid) {
        setResult({ valid: false, message: data.message || 'Certificate not found.' });
        return;
      }

      setResult({ valid: true, certificate: data.certificate });
    } catch (verificationError) {
      setResult({ valid: false, message: 'We could not verify this certificate. Please check the certificate ID and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F6F0] text-navy">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex items-center gap-3 text-gold">
            <span className="text-sm font-semibold uppercase tracking-[0.3em]">Certificate Verification</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold text-navy sm:text-4xl">Verify a Certificate</h1>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
            <input
              value={certificateId}
              onChange={(event) => setCertificateId(event.target.value)}
              placeholder="EL-2026-483921"
              className="w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-gold"
            />
            <button
              type="button"
              onClick={handleVerify}
              disabled={loading}
              className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Verifying...' : 'Verify Certificate'}
            </button>
          </div>

          {error ? <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

          {result ? (
            result.valid ? (
              <div className="mt-8 rounded-[1.5rem] border border-green/20 bg-green/10 p-6">
                <h2 className="text-3xl font-semibold text-green">CERTIFICATE VERIFIED</h2>
                <div className="mt-5 space-y-3 text-base leading-8 text-navy/80">
                  <p><strong>Certificate ID:</strong> {result.certificate.certificateId}</p>
                  <p><strong>Learner Name:</strong> {result.certificate.learnerName}</p>
                  <p><strong>Program:</strong> Empower Lab Modules 1–5 Assessment</p>
                  <p><strong>Completion Date:</strong> {new Date(result.certificate.completionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                  <p><strong>Status:</strong> COMPLETED</p>
                </div>
              </div>
            ) : (
              <div className="mt-8 rounded-[1.5rem] border border-red-200 bg-red-50 p-6">
                <h2 className="text-3xl font-semibold text-red-700">CERTIFICATE NOT FOUND</h2>
                <p className="mt-4 text-base leading-8 text-red-700">We could not verify this certificate. Please check the certificate ID and try again.</p>
              </div>
            )
          ) : null}

          <div className="mt-8">
            <Link href="/empower-lab" className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
              Return to Empower Lab
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
