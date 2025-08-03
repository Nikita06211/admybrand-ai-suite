// src/data/features.ts

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const features: Feature[] = [
  {
    icon: '/icons/chip.png',
    title: 'AI Content Generation',
    desc: 'Create compelling copy, headlines, and posts with advanced AI that understands your brand.',
  },
  {
    icon: '/icons/thunder.png',
    title: 'Lightning-Fast Automation',
    desc: 'Automate marketing tasks and scale your campaigns across multiple channels.',
  },
  {
    icon: '/icons/analytical-skill.png',
    title: 'Advanced Analytics',
    desc: 'Deep insights with AI-powered predictions and actionable recommendations.',
  },
  {
    icon: '/icons/focus-group.png',
    title: 'Precision Targeting',
    desc: 'AI-driven audience segmentation and personalization for max conversion.',
  },
  {
    icon: '/icons/color-palette.png',
    title: 'Brand Consistency',
    desc: 'Maintain alignment across touchpoints with AI-powered guidelines.',
  },
  {
    icon: '/icons/chat.png',
    title: 'Multi-Channel Campaigns',
    desc: 'Orchestrate campaigns across email, social, ads from one unified platform.',
  },
  {
    icon: '/icons/growth.png',
    title: 'Performance Optimization',
    desc: 'Real-time ML optimization to maximize ROI.',
  },
  {
    icon: '/icons/protect.png',
    title: 'Enterprise Security',
    desc: 'Bank-level security with SOC2 compliance and encrypted data.',
  },
];
