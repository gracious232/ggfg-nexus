import Link from 'next/link';
import { redirect } from 'next/navigation';
import { addAttempt } from '@/lib/empower-lab-store';

const questions = [
  { id: 1, prompt: 'What is entrepreneurship in its most practical sense?', options: ['A business with money', 'Creating value by solving problems', 'A corporate title', 'A government program'] },
  { id: 2, prompt: 'Who can be an entrepreneur?', options: ['Only people with large capital', 'Only people with formal education', 'Anyone willing to learn and act', 'Only founders in big cities'] },
  { id: 3, prompt: 'What is often the strongest starting point for entrepreneurship?', options: ['A large loan', 'A perfect business plan', 'Curiosity, observation, and discipline', 'A famous brand'] },
  { id: 4, prompt: 'Where do many business ideas begin?', options: ['From random luck alone', 'From the frustrations and needs people experience daily', 'From copying a competitor exactly', 'From waiting for permission'] },
  { id: 5, prompt: 'What is the difference between a problem and an opportunity?', options: ['There is no difference', 'A problem is a challenge; an opportunity is a chance to respond usefully', 'An opportunity is always a product', 'A problem is always financial'] },
  { id: 6, prompt: 'What is a key habit of strong entrepreneurs?', options: ['Ignoring feedback', 'Watching only trends online', 'Observing patterns and asking useful questions', 'Avoiding difficult situations'] },
  { id: 7, prompt: 'What makes an idea more likely to become a business?', options: ['It sounds exciting', 'It is tested and shaped by real customer learning', 'It is shared on social media', 'It is funded immediately'] },
  { id: 8, prompt: 'What is a value proposition?', options: ['A company logo', 'The reason a customer sees your solution as valuable', 'The amount of profit made in a month', 'A legal agreement'] },
  { id: 9, prompt: 'Why is testing an idea before investing important?', options: ['It prevents learning', 'It reduces uncertainty and helps you learn early', 'It guarantees success', 'It replaces customer research'] },
  { id: 10, prompt: 'What is a minimum viable product?', options: ['A very expensive product', 'The simplest version used to learn', 'A full business plan', 'A marketing campaign'] },
  { id: 11, prompt: 'Why is understanding your customer essential?', options: ['It allows you to ignore their needs', 'It helps you build something more relevant and valuable', 'It makes the business larger instantly', 'It replaces pricing'] },
  { id: 12, prompt: 'What do customer interviews help you discover?', options: ['Only the customer’s age', 'Only the customer’s location', 'The real problems, habits, and needs behind their decisions', 'Only their favorite color'] },
  { id: 13, prompt: 'What is feedback best understood as?', options: ['A personal insult', 'A reason to stop improving', 'Information that helps you refine your solution', 'A final decision'] },
  { id: 14, prompt: 'What is the main purpose of creating value?', options: ['To make a business look busy', 'To solve a real problem in a meaningful way', 'To impress investors before testing', 'To avoid customer conversations'] },
  { id: 15, prompt: 'What is revenue?', options: ['Money spent on production', 'Money earned from sales', 'The business owner’s savings', 'A loan from investors'] },
  { id: 16, prompt: 'What is profit?', options: ['Revenue before any costs', 'The amount left after costs are paid', 'The salary of the founder', 'The money borrowed for growth'] },
  { id: 17, prompt: 'Why is cash flow important?', options: ['It guarantees profit', 'It shows the movement of money needed to keep the business operating', 'It replaces budgeting', 'It removes the need for recordkeeping'] },
  { id: 18, prompt: 'Why should personal and business money be separated?', options: ['It makes the business more complicated', 'It improves clarity and financial discipline', 'It is required only for large companies', 'It reduces the need for planning'] },
  { id: 19, prompt: 'What do investors typically look for?', options: ['Only a great logo', 'Evidence of discipline, clarity, and growth potential', 'A large social media following', 'A guarantee of no risk'] },
  { id: 20, prompt: 'What is the best mindset for a growing entrepreneur?', options: ['To avoid learning and stay comfortable', 'To rely on assumptions alone', 'To learn, test, adapt, and keep building', 'To wait until everything is perfect'] },
];

const answerKey = ['B','C','C','B','B','C','B','B','B','A','B','C','C','B','B','B','B','B','B','C'];

export default function AssessmentPage() {
  async function handleSubmit(formData: FormData) {
    'use server';

    const learnerName = String(formData.get('learnerName') || '').trim();
    const email = String(formData.get('email') || '').trim();

    const answers = questions.map((question) => String(formData.get(`q${question.id}`) || '').toUpperCase());
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer === answerKey[index]) {
        score += 1;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    const attempt = addAttempt({ learnerName, email, score, percentage });
    redirect(`/empower-lab/results?attemptId=${attempt.id}`);
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,_#f9f7ef_0%,_#ffffff_45%,_#f5f8fa_100%)] text-navy">
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-[2rem] border border-navy/10 bg-white/90 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower Lab</p>
            <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Modules 1–5 Assessment</h1>
            <p className="mt-4 text-lg leading-8 text-navy/75">Please enter your name carefully. Your name will appear on your certificate exactly as entered.</p>
          </div>

          <form action={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-semibold text-navy">
                Full Name
                <input required name="learnerName" className="mt-2 w-full rounded-2xl border border-navy/10 bg-[#F7F8FA] px-4 py-3 text-base outline-none ring-0" placeholder="Enter full name" />
              </label>
              <label className="block text-sm font-semibold text-navy">
                Email Address
                <input required type="email" name="email" className="mt-2 w-full rounded-2xl border border-navy/10 bg-[#F7F8FA] px-4 py-3 text-base outline-none ring-0" placeholder="Enter email address" />
              </label>
            </div>

            <div className="space-y-5">
              {questions.map((question, index) => (
                <div key={question.id} className="rounded-[1.5rem] border border-navy/10 bg-[#F7F8FA] p-5">
                  <p className="text-base font-semibold text-navy">{index + 1}. {question.prompt}</p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {question.options.map((option, optionIndex) => {
                      const value = ['A','B','C','D'][optionIndex];
                      const cleanOption = option.replace(/^[A-D]\s+/i, '');
                      return (
                        <label key={option} className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm leading-6 text-navy/80">
                          <input type="radio" name={`q${question.id}`} value={value} required className="mt-1" />
                          <span><span className="mr-2 font-semibold text-gold">{value}</span>{cleanOption}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 border-t border-navy/10 pt-6">
              <button type="submit" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90">Submit Assessment</button>
              <Link href="/empower-lab" className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy/40">Return to Modules</Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
