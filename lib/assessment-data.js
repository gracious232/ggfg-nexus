const fs = require('fs');
const path = require('path');

const PASSING_SCORE = 10;
const TOTAL_QUESTIONS = 20;
const ANSWER_KEY = {
  1: 'B',
  2: 'C',
  3: 'C',
  4: 'B',
  5: 'C',
  6: 'B',
  7: 'A',
  8: 'B',
  9: 'C',
  10: 'B',
  11: 'B',
  12: 'B',
  13: 'C',
  14: 'B',
  15: 'B',
  16: 'B',
  17: 'C',
  18: 'C',
  19: 'B',
  20: 'C',
};

const STORAGE_PATH = path.join(process.cwd(), 'data', 'empower-lab-assessment.json');
const DEFAULT_STORE = {
  learners: [],
  attempts: [],
  certificates: [],
};

function normalizeAnswer(value) {
  return String(value || '').trim().toUpperCase();
}

function readAssessmentStore() {
  try {
    if (!fs.existsSync(STORAGE_PATH)) {
      fs.mkdirSync(path.dirname(STORAGE_PATH), { recursive: true });
      fs.writeFileSync(STORAGE_PATH, JSON.stringify(DEFAULT_STORE, null, 2), 'utf8');
    }

    const raw = fs.readFileSync(STORAGE_PATH, 'utf8');
    return JSON.parse(raw || JSON.stringify(DEFAULT_STORE));
  } catch (error) {
    return JSON.parse(JSON.stringify(DEFAULT_STORE));
  }
}

function writeAssessmentStore(store) {
  fs.mkdirSync(path.dirname(STORAGE_PATH), { recursive: true });
  fs.writeFileSync(STORAGE_PATH, JSON.stringify(store, null, 2), 'utf8');
}

function calculatePercentage(score, total = TOTAL_QUESTIONS) {
  if (!total) return 0;
  return Math.round((score / total) * 100);
}

function evaluateAssessment(answers) {
  let score = 0;

  for (let index = 1; index <= TOTAL_QUESTIONS; index += 1) {
    if (normalizeAnswer(answers[index]) === ANSWER_KEY[index]) {
      score += 1;
    }
  }

  const percentage = calculatePercentage(score, TOTAL_QUESTIONS);
  const passed = score >= PASSING_SCORE;

  return {
    score,
    percentage,
    passed,
    status: passed ? 'PASSED' : 'NOT PASSED',
  };
}

function buildCertificateId(existingCodes = []) {
  let candidate = '';

  do {
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    candidate = `EL-2026-${randomDigits}`;
  } while (existingCodes.includes(candidate));

  return candidate;
}

function getAttemptNumber(store, email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  return store.attempts.filter((attempt) => String(attempt.learner?.email || '').toLowerCase() === normalizedEmail).length + 1;
}

module.exports = {
  PASSING_SCORE,
  TOTAL_QUESTIONS,
  ANSWER_KEY,
  STORAGE_PATH,
  DEFAULT_STORE,
  normalizeAnswer,
  readAssessmentStore,
  writeAssessmentStore,
  calculatePercentage,
  evaluateAssessment,
  buildCertificateId,
  getAttemptNumber,
};
