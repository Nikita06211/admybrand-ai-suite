export const featuredArticles: Article[] = [
  {
    id: 1,
    featured: true,
    tag: "AI Trends",
    title: "The Future of AI in Marketing: Trends to Watch in 2025",
    summary: "Discover how artificial intelligence is revolutionizing marketing strategies and what to expect in the coming year.",
    author: "Sarah Chen",
    date: "12/12/2024",
    time: "5 min read",
    img: "/icons/blog1.jpeg",
    url: "#",
    badge: "Featured",
  },
  {
    id: 2,
    featured: true,
    tag: "Case Study",
    title: "Case Study: 300% ROI Increase with AI-Powered Campaigns",
    summary: "Real-world success story of how one company tripled their marketing ROI using our AI suite.",
    author: "Emma Thompson",
    date: "12/05/2024",
    time: "10 min read",
    img: "/icons/blog2.jpeg",
    url: "#",
    badge: "Featured",
  },
];

export const latestArticles: Article[] = [
  {
    id: 3,
    tag: "Strategy",
    featured: false,
    title: "How to Optimize Your Content Strategy with AI Tools",
    summary: "Learn practical tips for using AI-powered tools to enhance your content creation and distribution strategies.",
    author: "Marcus Rodriguez",
    date: "12/14/2024",
    time: "7 min read",
    img: "/icons/blog1.jpeg",
    url: "#",
  },
  {
    id: 4,
    tag: "Tutorial",
    featured: false,
    title: "Getting Started with AI Marketing Automation",
    summary: "A beginner's guide to implementing AI automation in your marketing workflows.",
    author: "David Park",
    date: "12/12/2024",
    time: "8 min read",
    img: "/icons/blog3.jpeg",
    url: "#",
  },
  {
    id: 5,
    tag: "Psychology",
    featured: false,
    title: "The Psychology Behind AI-Generated Content That Converts",
    summary: "Understanding the human elements that make AI-generated marketing content truly effective.",
    author: "Dr. Lisa Wong",
    date: "11/24/2024",
    time: "6 min read",
    img: "/icons/blog4.jpeg",
    url: "#",
  },
];


export interface Article {
  id: number;
  tag: string;
  featured: boolean;
  title: string;
  summary: string;
  author: string;
  date: string;
  time: string;
  img: string;
  url: string;
  badge?: string;
}

