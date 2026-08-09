export type ModuleContent = {
  id: string;
  slug: string;
  number: number;
  title: string;
  intro: string;
  pdf: string;
  outcomes: string[];
  summary: string;
};

const modulePdf = (number: number) => {
  switch (number) {
    case 1:
      return '/EMPOWER Lab Module 1 The Entrepreneur.pdf';
    case 2:
      return '/EMPOWER Lab Module 2 Finding Problems.pdf';
    case 3:
      return '/EMPOWER Lab Module 3Validate.pdf';
    case 4:
      return '/EMPOWER Lab Module 4 UNDERSTANDING.pdf';
    case 5:
      return '/EMPOWER Lab Module 5 MONEY.pdf';
    default:
      return `/EMPOWER Lab Module ${number}.pdf`;
  }
};

export const empowerLabModules: ModuleContent[] = [
  {
    id: 'module-1',
    slug: 'module-1',
    number: 1,
    title: 'The Entrepreneur Within You',
    intro:
      'Use the guided learning PDF below to study the module at your own pace.',
    pdf: modulePdf(1),
    outcomes: [
      'Understand entrepreneurship in practical terms.',
      'Recognize the mindset of an entrepreneur.',
      'See how ideas grow from observation and need.',
    ],
    summary:
      'This module introduces the entrepreneur as a builder of value, a learner, and a problem-solver.',
  },
  {
    id: 'module-2',
    slug: 'module-2',
    number: 2,
    title: 'Finding Problems & Opportunities',
    intro:
      'Open the module PDF to explore how opportunity is discovered through observation and reflection.',
    pdf: modulePdf(2),
    outcomes: [
      'Identify recurring problems in your environment.',
      'Recognize what makes a problem worth solving.',
      'Develop an entrepreneurial eye for opportunity.',
    ],
    summary:
      'This module helps learners connect local challenges to meaningful business opportunities.',
  },
  {
    id: 'module-3',
    slug: 'module-3',
    number: 3,
    title: 'From Idea to Business',
    intro:
      'Review the PDF to understand how ideas become offers, products, and growing ventures.',
    pdf: modulePdf(3),
    outcomes: [
      'Understand how ideas become business opportunities.',
      'Learn the role of customers and value propositions.',
      'See how testing is better than rushing to invest.',
    ],
    summary:
      'This module focuses on learning, validation, and building with clarity before scaling.',
  },
  {
    id: 'module-4',
    slug: 'module-4',
    number: 4,
    title: 'Understanding Your Customer',
    intro:
      'Use the PDF to learn about customer needs, interviews, feedback, and value creation.',
    pdf: modulePdf(4),
    outcomes: [
      'Understand who your customer is.',
      'Learn how to identify pain points.',
      'Use interviews and feedback to improve your offer.',
    ],
    summary:
      'This module helps learners build value around real human needs and real customer insight.',
  },
  {
    id: 'module-5',
    slug: 'module-5',
    number: 5,
    title: 'Money & Financial Foundations',
    intro:
      'Open the module PDF to explore revenue, costs, profit, cash flow, pricing, budgeting, and funding.',
    pdf: modulePdf(5),
    outcomes: [
      'Explain the basics of money in business.',
      'Understand pricing, budgeting, and cash flow.',
      'Recognize how funding and investors fit into growth.',
    ],
    summary:
      'This module builds practical financial literacy that supports sound business decisions.',
  },
];

export function getModuleBySlug(slug: string) {
  return empowerLabModules.find((module) => module.slug === slug);
}

export function getModuleNavigation(currentSlug: string) {
  const currentIndex = empowerLabModules.findIndex((module) => module.slug === currentSlug);
  const previous = currentIndex > 0 ? empowerLabModules[currentIndex - 1] : null;
  const next = currentIndex < empowerLabModules.length - 1 ? empowerLabModules[currentIndex + 1] : null;

  return { previous, next };
}
