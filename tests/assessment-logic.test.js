const test = require('node:test');
const assert = require('node:assert/strict');

const { evaluateAssessment, calculatePercentage, buildCertificateId } = require('../lib/assessment-data.js');

test('passing threshold is 10 out of 20', () => {
  const result = evaluateAssessment({
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
  });

  assert.equal(result.score, 20);
  assert.equal(result.passed, true);
  assert.equal(result.percentage, 100);
});

test('below threshold is not passed', () => {
  const failAnswers = {
    1: 'B',
    2: 'C',
    3: 'C',
    4: 'B',
    5: 'C',
    6: 'B',
    7: 'A',
    8: 'B',
    9: 'C',
    10: 'A',
    11: 'A',
    12: 'A',
    13: 'A',
    14: 'A',
    15: 'A',
    16: 'A',
    17: 'A',
    18: 'A',
    19: 'A',
    20: 'A',
  };

  const result = evaluateAssessment(failAnswers);

  assert.equal(result.score, 9);
  assert.equal(result.passed, false);
  assert.equal(result.percentage, 45);
});

test('percentage and code format are generated correctly', () => {
  const percentage = calculatePercentage(10, 20);
  const code = buildCertificateId();

  assert.equal(percentage, 50);
  assert.match(code, /^EL-2026-\d{6}$/);
});
