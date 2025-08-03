// src/data/features.ts

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const features: Feature[] = [
  {
    icon: '/icons/content.svg',
    title: 'AI Content Generation',
    desc: 'Create compelling copy, headlines, and posts with advanced AI that understands your brand.',
  },
  {
    icon: '/icons/automation.svg',
    title: 'Lightning-Fast Automation',
    desc: 'Automate marketing tasks and scale your campaigns across multiple channels.',
  },
  {
    icon: '/icons/analytics.svg',
    title: 'Advanced Analytics',
    desc: 'Deep insights with AI-powered predictions and actionable recommendations.',
  },
  {
    icon: '/icons/targeting.svg',
    title: 'Precision Targeting',
    desc: 'AI-driven audience segmentation and personalization for max conversion.',
  },
  {
    icon: '/icons/brand.svg',
    title: 'Brand Consistency',
    desc: 'Maintain alignment across touchpoints with AI-powered guidelines.',
  },
  {
    icon: '/icons/multichannel.svg',
    title: 'Multi-Channel Campaigns',
    desc: 'Orchestrate campaigns across email, social, ads from one unified platform.',
  },
  {
    icon: '/icons/optimization.svg',
    title: 'Performance Optimization',
    desc: 'Real-time ML optimization to maximize ROI.',
  },
  {
    icon: '/icons/security.svg',
    title: 'Enterprise Security',
    desc: 'Bank-level security with SOC2 compliance and encrypted data.',
  },
];
