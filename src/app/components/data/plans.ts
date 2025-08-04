// src/data/plans.ts

export interface Plan {
  title: string;
  price: number;
  features: string[];
  maxUsers: number;       // <-- Required for plan selection logic
  maxWords: number;       // <-- Required for plan selection logic
  highlight?: boolean;
}

export const plans: Plan[] = [
  {
    title: 'Starter',
    price: 76,
    features: [
      'Up to 10,000 AI-generated words/month',
      '5 Brand voice templates',
      'Basic analytics dashboard',
      'Email support',
      '3 Team members',
      'Campaign templates',
    ],
    maxUsers: 10,
    maxWords: 25000,
  },
  {
    title: 'Professional',
    price: 160,
     features: [
      'Up to 50,000 AI-generated words/month',
      'Unlimited brand voices',
      'Advanced analytics & reporting',
      'Priority support + phone support',
      '15 Team members',
      'Custom campaign workflows',
      'A/B testing tools',
      'Multi-channel automation',
    ],
    maxUsers: 50,
    maxWords: 100000,
    highlight: true,
  },
  {
    title: 'Enterprise',
    price: 313,
    features: [
      'Unlimited AI-generated content',
      'Custom AI model training',
      'White-label solutions',
      'Dedicated account manager',
      'Unlimited team members',
      'Advanced security features',
      'Custom integrations',
      '24/7 premium customer support service',
    ],

    maxUsers: 500,
    maxWords: 500000,
  },
];
