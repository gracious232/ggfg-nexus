export type AssessmentAttempt = {
  id: string;
  learnerName: string;
  email: string;
  score: number;
  percentage: number;
  passed: boolean;
  attemptNumber: number;
  submittedAt: string;
  certificateId?: string;
};

export type AssessmentAttemptInput = {
  learnerName: string;
  email: string;
  score: number;
  percentage: number;
  passed?: boolean;
};

const attempts: AssessmentAttempt[] = [];

export function getAttemptCount() {
  return attempts.length;
}

export function getPassedCount() {
  return attempts.filter((attempt) => attempt.passed).length;
}

export function getFailedCount() {
  return attempts.filter((attempt) => !attempt.passed).length;
}

export function getAttempts() {
  return attempts.slice().reverse();
}

export function getAttemptByCertificateId(certificateId: string) {
  return attempts.find((attempt) => attempt.certificateId?.toLowerCase() === certificateId.toLowerCase());
}

export function addAttempt(input: AssessmentAttemptInput) {
  const learnerAttempts = attempts.filter((attempt) => attempt.email.toLowerCase() === input.email.toLowerCase());
  const attemptNumber = learnerAttempts.length + 1;
  const passed = input.passed ?? input.score >= 14;
  const certificateId = passed ? generateCertificateId() : undefined;

  const attempt: AssessmentAttempt = {
    id: `${Date.now()}-${attemptNumber}`,
    learnerName: input.learnerName,
    email: input.email,
    score: input.score,
    percentage: input.percentage,
    passed,
    attemptNumber,
    submittedAt: new Date().toISOString(),
    certificateId,
  };

  attempts.push(attempt);
  return attempt;
}

function generateCertificateId() {
  let candidate = '';
  while (!candidate) {
    const randomDigits = Math.floor(100000 + Math.random() * 900000).toString();
    const exists = attempts.some((attempt) => attempt.certificateId === `EL-2026-${randomDigits}`);
    if (!exists) {
      candidate = `EL-2026-${randomDigits}`;
    }
  }
  return candidate;
}
