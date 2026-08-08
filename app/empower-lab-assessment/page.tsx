import { redirect } from 'next/navigation';
import { AssessmentShell } from '@/components/empower-lab/assessment-shell';
import { addAttempt } from '@/lib/empower-lab-store';

async function submitAssessment(formData: FormData) {
  'use server';

  const learnerName = String(formData.get('learnerName') || '').trim();
  const email = String(formData.get('email') || '').trim();

  const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    .map((questionNumber) => ({
      questionNumber,
      answer: String(formData.get(`q${questionNumber}`) || '').trim(),
    }))
    .filter((answer) => answer.answer);

  const correctAnswers = ['B', 'C', 'C', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C'];
  const score = answers.reduce((total, answer) => {
    const correctAnswer = correctAnswers[answer.questionNumber - 1];
    return total + (answer.answer === correctAnswer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / 20) * 100);

  const attempt = addAttempt({
    learnerName,
    email,
    score,
    percentage,
    passed: score >= 14,
  });

  redirect(`/empower-lab/results?attemptId=${attempt.id}`);
}

export default function EmpowerLabAssessmentPage() {
  return <AssessmentShell action={submitAssessment} />;
}
