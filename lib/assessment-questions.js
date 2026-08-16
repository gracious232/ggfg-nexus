const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    prompt: 'Amara notices that students in her community often struggle to find affordable meals after school. Instead of simply complaining about it, she begins asking why the problem exists and whether there could be a better solution. What entrepreneurial skill is Amara demonstrating?',
    options: {
      A: 'Avoiding risk',
      B: 'Recognizing problems and opportunities',
      C: 'Managing employees',
      D: 'Raising investment',
    },
  },
  {
    id: 2,
    prompt: 'David has a business idea but very little money. Which approach best reflects what you learned about entrepreneurship?',
    options: {
      A: 'Wait until he has enough money before doing anything',
      B: 'Borrow a large amount of money immediately',
      C: 'Consider the skills, time, relationships, knowledge, and resources he already has',
      D: 'Find an investor before researching the idea',
    },
  },
  {
    id: 3,
    prompt: 'You notice that farmers in your community regularly lose produce before it reaches customers. What should you do before deciding on a solution?',
    options: {
      A: 'Immediately build a delivery company',
      B: 'Buy transportation equipment',
      C: 'Investigate why the produce is being lost and understand who is affected',
      D: 'Ask investors for funding',
    },
  },
  {
    id: 4,
    prompt: 'A young entrepreneur says, “I have a great idea, so I know people will buy it.” What is the best response based on what you have learned?',
    options: {
      A: 'A good idea automatically becomes a good business',
      B: 'The entrepreneur should test the idea and gather evidence',
      C: 'The entrepreneur should spend more money making the idea look professional',
      D: 'The entrepreneur should avoid asking customers because they may reject it',
    },
  },
  {
    id: 5,
    prompt: 'A student wants to create a delivery service for university students. Which statement is the strongest value proposition?',
    options: {
      A: '“We are starting a delivery company.”',
      B: '“We use motorcycles and phones.”',
      C: '“We help busy students receive affordable meals quickly without leaving campus.”',
      D: '“We are the best delivery company in the city.”',
    },
  },
  {
    id: 6,
    prompt: 'Fatmata believes students need a new study app. Before spending several months building the complete app, what would be the smartest approach?',
    options: {
      A: 'Build every feature immediately',
      B: 'Create a simple version and test whether students actually use it',
      C: 'Hire a large development team',
      D: 'Look for investors first',
    },
  },
  {
    id: 7,
    prompt: 'A business makes $2,000 in sales during one month. Its total business expenses are $1,400. What is the business\'s profit?',
    options: {
      A: '$600',
      B: '$1,400',
      C: '$2,000',
      D: '$3,400',
    },
  },
  {
    id: 8,
    prompt: 'A business owner uses the same bank account for business sales, personal shopping, rent, and entertainment. What problem could this create?',
    options: {
      A: 'The business will automatically lose customers',
      B: 'It will become difficult to know how much money the business is actually making and spending',
      C: 'The business will automatically pay higher taxes',
      D: 'The business will stop generating revenue',
    },
  },
  {
    id: 9,
    prompt: 'You identify a problem that affects many people. Does that automatically mean you have found a good business opportunity?',
    options: {
      A: 'Yes, every problem is a business opportunity',
      B: 'Yes, if the problem is difficult',
      C: 'No, you still need to understand the problem, the people affected, existing solutions, and whether value can be created',
      D: 'No, because only investors can identify opportunities',
    },
  },
  {
    id: 10,
    prompt: 'A young entrepreneur interviews five potential customers. Four of them repeatedly complain that the current solution is too expensive. What should the entrepreneur do with this information?',
    options: {
      A: 'Ignore it because the original idea is already perfect',
      B: 'Use the feedback to reconsider the pricing or business model',
      C: 'Stop talking to customers',
      D: 'Increase the price immediately',
    },
  },
  {
    id: 11,
    prompt: 'Which person is demonstrating the strongest entrepreneurial mindset?',
    options: {
      A: 'Someone who waits for someone else to solve every problem',
      B: 'Someone who notices problems, asks questions, looks for possibilities, and takes action',
      C: 'Someone who believes every business needs a large investment',
      D: 'Someone who copies successful businesses without understanding why they work',
    },
  },
  {
    id: 12,
    prompt: 'A business sells a product for $10, but it costs $8 to produce each one. Before deciding that the business is profitable, what else should the entrepreneur consider?',
    options: {
      A: 'Only how many followers the business has',
      B: 'Other costs such as transportation, marketing, packaging, rent, or technology',
      C: 'Whether the owner likes the product',
      D: 'Whether competitors have more employees',
    },
  },
  {
    id: 13,
    prompt: 'You are considering starting a service for small farmers. Which question would be most useful during a customer interview?',
    options: {
      A: '“Would you definitely buy my service?”',
      B: '“Do you think my business idea is amazing?”',
      C: '“Tell me about the last time you experienced this problem. How did you deal with it?”',
      D: '“Would you invest in my company?”',
    },
  },
  {
    id: 14,
    prompt: 'A business has made $5,000 in sales, but several customers will not pay for another 60 days. Meanwhile, the business has bills that must be paid this week. What concept does this situation demonstrate?',
    options: {
      A: 'Value proposition',
      B: 'Cash flow',
      C: 'Market research',
      D: 'Opportunity recognition',
    },
  },
  {
    id: 15,
    prompt: 'Which situation best demonstrates an unmet need?',
    options: {
      A: 'A product exists and customers are completely satisfied with it',
      B: 'People have a problem, but the existing solutions are too expensive, difficult, slow, or unreliable',
      C: 'A business has many employees',
      D: 'An entrepreneur has a new idea',
    },
  },
  {
    id: 16,
    prompt: 'An entrepreneur wants to start a clothing business because they personally love a particular style. What should they do before assuming customers will want it?',
    options: {
      A: 'Buy a large amount of inventory',
      B: 'Research and talk to potential customers to understand their preferences and needs',
      C: 'Rent an expensive store',
      D: 'Apply for an investor immediately',
    },
  },
  {
    id: 17,
    prompt: 'An entrepreneur wants to raise $50,000 from investors. Which would make the strongest case?',
    options: {
      A: '“I have a really exciting idea.”',
      B: '“My friends think this will be successful.”',
      C: '“We identified a real problem, tested our solution, gained customers, generated revenue, and have a clear plan for using the investment.”',
      D: '“I need money because starting a business is expensive.”',
    },
  },
  {
    id: 18,
    prompt: 'A young entrepreneur discovers through testing that customers like the problem being solved but do not want the proposed solution. What should the entrepreneur do?',
    options: {
      A: 'Ignore the customers',
      B: 'Keep building exactly the same thing',
      C: 'Use what was learned to change or improve the solution',
      D: 'Assume the customers do not understand entrepreneurship',
    },
  },
  {
    id: 19,
    prompt: 'Which financial decision is the most responsible for a new entrepreneur?',
    options: {
      A: 'Spend all available money on equipment immediately',
      B: 'Create a budget, identify necessary costs, start appropriately, and track the money coming in and going out',
      C: 'Use business revenue for personal expenses whenever needed',
      D: 'Avoid tracking costs until the business becomes large',
    },
  },
  {
    id: 20,
    prompt: 'You have identified a problem, spoken with customers, tested your idea, and discovered that people are willing to pay for your solution. You have also calculated your costs and believe the business can generate a profit. What should you understand from this process?',
    options: {
      A: 'You have learned enough to stop testing forever',
      B: 'Entrepreneurship is about having a perfect idea from the beginning',
      C: 'You have gathered evidence that can help you make a more informed decision about building and growing the business',
      D: 'You must immediately find an investor',
    },
  },
];

module.exports = { ASSESSMENT_QUESTIONS };
