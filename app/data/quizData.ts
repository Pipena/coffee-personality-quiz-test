export type PersonalityType = 'bold' | 'cozy' | 'sweet' | 'indulgent';

export interface Personality {
  id: PersonalityType;
  name: string;
  coffee: string;
  tagline: string;
  image: string;
}

export interface Answer {
  text: string;
  icon: string;
  personality: PersonalityType;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export const personalities: Record<PersonalityType, Personality> = {
  bold: {
    id: 'bold',
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: 'You live for intensity',
    image: '/espresso.jpg',
  },
  cozy: {
    id: 'cozy',
    name: 'Cozy Classic',
    coffee: 'Medium Roast Drip',
    tagline: 'Comfort in every cup',
    image: '/cozy-coffee.jpg',
  },
  sweet: {
    id: 'sweet',
    name: 'Sweet Enthusiast',
    coffee: 'Caramel Latte',
    tagline: "Life's too short for bitter",
    image: '/caramel-latte.jpg',
  },
  indulgent: {
    id: 'indulgent',
    name: 'Indulgent Treat',
    coffee: 'Mocha with Whip',
    tagline: 'Coffee is dessert',
    image: '/mocha.jpg',
  },
};

export const questions: Question[] = [
  {
    question: "What's your ideal weekend morning?",
    answers: [
      { text: 'Up early for an adventure', icon: '☀️', personality: 'bold' },
      { text: 'Slow start with a book', icon: '📖', personality: 'cozy' },
      { text: 'Brunch with friends', icon: '🥐', personality: 'sweet' },
      { text: 'Sleeping in + treats', icon: '🛏️', personality: 'indulgent' },
    ],
  },
  {
    question: 'Pick a vacation style:',
    answers: [
      { text: 'Backpacking through mountains', icon: '🏔️', personality: 'bold' },
      { text: 'Cozy cabin in the woods', icon: '🏡', personality: 'cozy' },
      { text: 'Beach resort with cocktails', icon: '🏖️', personality: 'sweet' },
      { text: 'Luxury hotel with room service', icon: '🏨', personality: 'indulgent' },
    ],
  },
  {
    question: "It's Friday night. You're most likely:",
    answers: [
      { text: 'At a concert or event', icon: '🎸', personality: 'bold' },
      { text: 'Movie night at home', icon: '🍿', personality: 'cozy' },
      { text: 'Dinner party with friends', icon: '🍷', personality: 'sweet' },
      { text: 'Bubble bath and dessert', icon: '🛁', personality: 'indulgent' },
    ],
  },
  {
    question: 'How do you handle a stressful day?',
    answers: [
      { text: 'Intense workout', icon: '🏃', personality: 'bold' },
      { text: 'Quiet time with tea/coffee', icon: '☕', personality: 'cozy' },
      { text: 'Vent to a friend', icon: '📱', personality: 'sweet' },
      { text: 'Comfort food and Netflix', icon: '🍫', personality: 'indulgent' },
    ],
  },
  {
    question: 'Pick a superpower:',
    answers: [
      { text: 'Super strength', icon: '⚡', personality: 'bold' },
      { text: 'Mind reading', icon: '🔮', personality: 'cozy' },
      { text: 'Charm everyone you meet', icon: '💫', personality: 'sweet' },
      { text: 'Stop time (for naps)', icon: '⏰', personality: 'indulgent' },
    ],
  },
];
