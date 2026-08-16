import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const {
  ANSWER_KEY,
  TOTAL_QUESTIONS,
  buildCertificateId,
  evaluateAssessment,
  getAttemptNumber,
  readAssessmentStore,
  writeAssessmentStore,
} = require('@/lib/assessment-data.js');

const VALID_OPTIONS = ['A', 'B', 'C', 'D'];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const learnerName = String(body?.learnerName || body?.name || '').trim();
    const learnerEmail = String(body?.learnerEmail || body?.email || '').trim();
    const rawAnswers = body?.answers || {};

    if (!learnerName) {
      return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
    }

    if (!learnerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(learnerEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!rawAnswers || Object.keys(rawAnswers).length !== TOTAL_QUESTIONS) {
      return NextResponse.json({ error: 'Please answer all questions before submitting.' }, { status: 400 });
    }

    const normalizedAnswers: Record<string, string> = {};
    for (let index = 1; index <= TOTAL_QUESTIONS; index += 1) {
      const answerValue = String(rawAnswers[index] ?? rawAnswers[String(index)] ?? '').trim().toUpperCase();

      if (!VALID_OPTIONS.includes(answerValue)) {
        return NextResponse.json({ error: `Please select a valid option for question ${index}.` }, { status: 400 });
      }

      normalizedAnswers[index] = answerValue;
    }

    const store = readAssessmentStore();
    const existingAttempt = store.attempts.find(
      (attempt: any) =>
        String(attempt.learner?.email || '').toLowerCase() === learnerEmail.toLowerCase() &&
        String(attempt.status || '').toUpperCase() === 'PASSED',
    );

    if (existingAttempt) {
      return NextResponse.json(
        {
          success: true,
          alreadyPassed: true,
          message: 'This learner has already passed the assessment.',
          learner: { name: learnerName, email: learnerEmail },
          result: {
            score: existingAttempt.score,
            percentage: existingAttempt.percentage,
            passed: true,
            status: 'PASSED',
          },
          certificate: {
            certificateId: existingAttempt.certificateId || existingAttempt.certId || null,
          },
        },
        { status: 200 },
      );
    }

    const learnerIndex = store.learners.findIndex(
      (learner: any) => String(learner.email || '').toLowerCase() === learnerEmail.toLowerCase(),
    );

    if (learnerIndex === -1) {
      store.learners.push({
        name: learnerName,
        email: learnerEmail,
        createdAt: new Date().toISOString(),
      });
    } else {
      store.learners[learnerIndex] = {
        ...store.learners[learnerIndex],
        name: learnerName,
        email: learnerEmail,
      };
    }

    const result = evaluateAssessment(normalizedAnswers);
    const attemptNumber = getAttemptNumber(store, learnerEmail);

    const attemptRecord = {
      id: `attempt-${Date.now()}-${attemptNumber}`,
      learner: { name: learnerName, email: learnerEmail },
      score: result.score,
      percentage: result.percentage,
      status: result.status,
      attemptNumber,
      submittedAt: new Date().toISOString(),
    };

    store.attempts.push(attemptRecord);

    let certificateRecord = null;

    if (result.passed) {
      const existingIds = (store.certificates || []).map((item: any) => item.certificateId);
      const certificateId = buildCertificateId(existingIds);

      certificateRecord = {
        certificateId,
        learner: { name: learnerName, email: learnerEmail },
        program: 'Empower Lab Modules 1–5 Assessment',
        completionDate: new Date().toISOString(),
        verificationStatus: 'valid',
        certificateFileLocation: `/empower-lab/certificate/${certificateId}`,
        issuedAt: new Date().toISOString(),
      };

      store.certificates.push(certificateRecord);
    }

    writeAssessmentStore(store);

    return NextResponse.json(
      {
        success: true,
        alreadyPassed: false,
        learner: { name: learnerName, email: learnerEmail },
        attemptNumber,
        result,
        certificate: certificateRecord,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Assessment submission error:', error);
    return NextResponse.json({ error: 'Unable to submit the assessment right now.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    totalQuestions: TOTAL_QUESTIONS,
    passingScore: 10,
    status: 'ready',
    answerKey: Object.keys(ANSWER_KEY).length === TOTAL_QUESTIONS ? 'securely stored on server' : 'incomplete',
  });
}
