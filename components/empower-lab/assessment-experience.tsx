"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { ASSESSMENT_QUESTIONS } from '@/lib/assessment-questions';

const PASSING_SCORE = 10;
const TOTAL_QUESTIONS = ASSESSMENT_QUESTIONS.length;

type AssessmentAnswerMap = Record<number, string>;

type ResultState = {
  score: number;
  percentage: number;
  passed: boolean;
  status: 'PASSED' | 'NOT PASSED';
  certificateId?: string | null;
};

const initialAnswers = () => {
  const values: AssessmentAnswerMap = {};
  ASSESSMENT_QUESTIONS.forEach((question) => {
    values[question.id] = '';
  });
  return values;
};

function formatDate(dateValue: string | Date) {
  const date = new Date(dateValue);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function AssessmentExperience() {
  const [step, setStep] = useState<'intro' | 'details' | 'questions' | 'confirm' | 'results'>('intro');
  const [learnerName, setLearnerName] = useState('');
  const [learnerEmail, setLearnerEmail] = useState('');
  const [answers, setAnswers] = useState<AssessmentAnswerMap>(initialAnswers);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<ResultState | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [certificateId, setCertificateId] = useState('');

  const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100;
  const answeredCount = Object.values(answers).filter((answer) => answer && answer.trim()).length;

  const allAnswered = useMemo(() => Object.values(answers).every((answer) => Boolean(answer && answer.trim())), [answers]);

  const updateAnswer = (questionId: number, value: string) => {
    setAnswers((previous) => ({ ...previous, [questionId]: value }));
  };

  const handleStartAssessment = () => {
    if (!learnerName.trim()) {
      setError('Please enter your full name before starting.');
      return;
    }

    if (!learnerEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(learnerEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setStep('details');
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex((previous) => previous + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((previous) => previous - 1);
    }
  };

  const handleSubmitConfirmation = () => {
    if (!allAnswered) {
      setError('Please answer every question before submitting.');
      return;
    }

    setError('');
    setStep('confirm');
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          learnerName,
          learnerEmail,
          answers,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || 'Unable to submit your assessment.');
      }

      if (data?.alreadyPassed) {
        const matchingCertificate = data?.certificate?.certificateId;
        setResult({
          score: data.result.score,
          percentage: data.result.percentage,
          passed: true,
          status: 'PASSED',
          certificateId: matchingCertificate || null,
        });
        setCertificateId(matchingCertificate || '');
        setCertificateUrl(data?.certificate?.certificateFileLocation || null);
        setStep('results');
        return;
      }

      const nextResult = {
        score: data.result.score,
        percentage: data.result.percentage,
        passed: data.result.passed,
        status: data.result.status,
        certificateId: data?.certificate?.certificateId ?? null,
      };

      setResult(nextResult);
      setCertificateId(data?.certificate?.certificateId ?? '');
      setCertificateUrl(data?.certificate?.certificateFileLocation || null);
      setStep('results');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to submit your assessment.');
    } finally {
      setLoading(false);
    }
  };

  const generatePdf = async () => {
    if (!result || !result.passed || !learnerName) {
      return;
    }

    const templateUrl = '/GGFG Empower Lab Certificate template.png';
    const templateImage = new window.Image();

    await new Promise<void>((resolve, reject) => {
      templateImage.onload = () => resolve();
      templateImage.onerror = () => reject(new Error('Unable to load certificate template.'));
      templateImage.src = templateUrl;
    });

    const pageWidth = 1600;
    const pageHeight = 1100;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: [pageWidth, pageHeight] });

    doc.addImage(templateImage, 'PNG', 0, 0, pageWidth, pageHeight);

    doc.setTextColor(3, 20, 33);
    doc.setFont('times', 'italic');
    doc.setFontSize(30);
    doc.text(learnerName, 800, 540, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('COMPLETION DATE', 170, 830);
    doc.setFont('helvetica', 'normal');
    doc.text(formatDate(new Date()), 170, 858);

    doc.save(`empower-lab-certificate-${certificateId || 'download'}.pdf`);
  };

  const renderIntro = () => (
    <main className="min-h-screen bg-[#F7F6F0] text-navy">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex items-center gap-3 text-gold">
            <Sparkles size={18} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">Empower Lab Assessment</p>
          </div>

          <h1 className="mt-5 text-3xl font-semibold text-navy sm:text-4xl">Before you begin</h1>

          <div className="mt-6 rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-5">
            <p className="text-base leading-8 text-navy/80">
              Please enter your name carefully. Your name will appear on your certificate exactly as entered.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-navy md:col-span-2">
              Full Name
              <input
                value={learnerName}
                onChange={(event) => setLearnerName(event.target.value)}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-gold"
              />
            </label>

            <label className="block text-sm font-semibold text-navy md:col-span-2">
              Email Address
              <input
                type="email"
                value={learnerEmail}
                onChange={(event) => setLearnerEmail(event.target.value)}
                placeholder="Enter your email address"
                className="mt-2 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-gold"
              />
            </label>
          </div>

          {error ? <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={handleStartAssessment}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
            >
              Begin Assessment <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );

  const renderInstructions = () => (
    <main className="min-h-screen bg-[#F7F6F0] text-navy">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex items-center gap-3 text-gold">
            <ShieldCheck size={18} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">Assessment Instructions</p>
          </div>

          <h2 className="mt-5 text-3xl font-semibold text-gold">Empower Lab Modules 1–5 Assessment</h2>

          <ul className="mt-6 space-y-3 text-base leading-8 text-navy/80">
            <li>• 20 multiple-choice questions</li>
            <li>• Each question is worth 1 point</li>
            <li>• You need at least 10 correct answers to pass</li>
            <li>• Passing score: 50%</li>
            <li>• Answer all questions before submitting</li>
            <li>• You may retake the assessment if you do not pass</li>
            <li>• A certificate will be generated if you pass</li>
          </ul>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => setStep('questions')}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90"
            >
              Start Assessment <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );

  const renderQuestions = () => (
    <main className="min-h-screen bg-[#F7F6F0] text-navy">
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}</p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">Empower Lab Modules 1–5 Assessment</h2>
            </div>
            <div className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
              {answeredCount}/{TOTAL_QUESTIONS} answered
            </div>
          </div>

          <div className="mt-6 h-2.5 w-full overflow-hidden rounded-full bg-navy/10">
            <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%` }} />
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-6">
            <p className="text-lg font-medium leading-8 text-navy/90">{currentQuestion.prompt}</p>
          </div>

          <div className="mt-6 grid gap-4">
            {Object.entries(currentQuestion.options).map(([optionKey, optionText]) => (
              <button
                key={optionKey}
                type="button"
                onClick={() => updateAnswer(currentQuestion.id, optionKey)}
                className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${answers[currentQuestion.id] === optionKey ? 'border-gold bg-gold/10' : 'border-navy/10 bg-white hover:border-gold/40'}`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${answers[currentQuestion.id] === optionKey ? 'border-gold bg-gold text-navy' : 'border-navy/15 bg-[#F7F8FA] text-navy/80'}`}>
                  {optionKey}
                </span>
                <span className="text-base leading-7 text-navy/85">{optionText}</span>
              </button>
            ))}
          </div>

          {error ? <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={16} /> Previous
            </button>

            {currentQuestionIndex === TOTAL_QUESTIONS - 1 ? (
              <button
                type="button"
                onClick={handleSubmitConfirmation}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
              >
                Submit Assessment <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={goToNextQuestion}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90"
              >
                Next <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );

  const renderSubmitConfirmation = () => (
    <main className="min-h-screen bg-[#F7F6F0] text-navy">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex items-center gap-3 text-gold">
            <CheckCircle2 size={18} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">Final Check</p>
          </div>

          <h2 className="mt-5 text-3xl font-semibold text-navy">Are you ready to submit your assessment?</h2>
          <p className="mt-4 text-base leading-8 text-navy/80">
            You will not be able to change your answers after submission.
          </p>

          {error ? <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => setStep('questions')} className="rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
              Go Back
            </button>
            <button type="button" onClick={handleFinalSubmit} disabled={loading} className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-70">
              {loading ? 'Submitting...' : 'Submit Assessment'}
            </button>
          </div>
        </div>
      </section>
    </main>
  );

  const renderResults = () => {
    if (!result) {
      return null;
    }

    if (result.passed) {
      return (
        <main className="min-h-screen bg-[#F7F6F0] text-navy">
          <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
            <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 text-gold">
                <CheckCircle2 size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">Assessment Result</p>
              </div>

              <h1 className="mt-5 text-4xl font-semibold text-gold">CONGRATULATIONS!</h1>
              <h2 className="mt-4 text-3xl font-semibold text-navy">You Passed the Empower Lab Assessment</h2>

              <div className="mt-6 space-y-3 text-lg leading-8 text-navy/80">
                <p><strong>Learner Name:</strong> {learnerName}</p>
                <p><strong>Score:</strong> {result.score}/20</p>
                <p><strong>Percentage:</strong> {result.percentage}%</p>
                <p><strong>Status:</strong> {result.status}</p>
              </div>

              <p className="mt-6 rounded-[1.5rem] border border-green/20 bg-green/10 p-4 text-base leading-8 text-green">
                You successfully met the passing requirement for the Empower Lab Modules 1–5 Assessment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button type="button" onClick={() => setStep('questions')} className="rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
                  Review Questions
                </button>
                <button type="button" onClick={() => void generatePdf()} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold/90">
                  <Download size={16} /> Download Certificate
                </button>
                <Link href={`/empower-lab/certificate/${certificateId || 'preview'}`} className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
                  View Certificate
                </Link>
              </div>
            </div>
          </section>
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-[#F7F6F0] text-navy">
        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 text-gold">
              <ArrowLeft size={18} />
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Assessment Result</p>
            </div>

            <h1 className="mt-5 text-4xl font-semibold text-gold">KEEP LEARNING</h1>
            <h2 className="mt-4 text-3xl font-semibold text-navy">You Have Not Yet Passed</h2>

            <div className="mt-6 space-y-3 text-lg leading-8 text-navy/80">
              <p><strong>Learner Name:</strong> {learnerName}</p>
              <p><strong>Score:</strong> {result.score}/20</p>
              <p><strong>Percentage:</strong> {result.percentage}%</p>
              <p><strong>Status:</strong> {result.status}</p>
            </div>

            <p className="mt-6 rounded-[1.5rem] border border-gold/20 bg-gold/10 p-4 text-base leading-8 text-navy">
              You did not meet the passing score. Review the modules and try again.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/empower-lab" className="rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">
                Review Modules
              </Link>
              <button type="button" onClick={() => { setResult(null); setAnswers(initialAnswers()); setCurrentQuestionIndex(0); setStep('intro'); }} className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">
                Try Again
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  };

  if (step === 'details') {
    return renderInstructions();
  }

  if (step === 'questions') {
    return renderQuestions();
  }

  if (step === 'confirm') {
    return renderSubmitConfirmation();
  }

  if (step === 'results') {
    return renderResults();
  }

  return renderIntro();
}
