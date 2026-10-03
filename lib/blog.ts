export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  author: string;
  image: string;
  tags: string[];
  mediumUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pragmatic-web-dev-tips",
    title: "10 Pragmatic Web Development Tips from Production Trenches",
    excerpt:
      "Hard-won architectural lessons and practical patterns from shipping production systems. Deep-dives into real-time state synchronization, strict bundle size budgets, resilient API contracts with runtime validation, and real-world debugging tactics tutorials rarely touch.",
    date: "2026-02-14",
    author: "monu",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Web Development", "Best Practices", "Performance", "Architecture"],
  },
  {
    slug: "sss-project-structure",
    title:
      "How SSS (Single Source Structure) Ended My Project Organization Nightmare",
    excerpt:
      "How adopting the Single Source Structure (SSS) methodology eliminated chaotic project sprawl and daily context switching. A practical breakdown of a unified directory taxonomy that standardizes repositories, environment configs, and documentation for maximum developer flow.",
    date: "2026-01-03",
    author: "monu",
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*FcysIa0YKrjadv2ID3K2hg.png",
    tags: ["Productivity", "File Organization", "Developer Tools"],
    mediumUrl:
      "https://medium.com/@monu/how-sss-single-source-structure-ended-my-project-organization-nightmare-c3edbd6f2774",
  },
  {
    slug: "learning-by-building",
    title: "The Best Way to Learn Programming Is When You Actually Need It",
    excerpt:
      "An honest look at escaping tutorial hell through demand-driven learning. Why building real, problem-solving applications creates immediate emotional feedback loops, builds durable mental models, and turns abstract syntax into reliable engineering intuition.",
    date: "2025-11-22",
    author: "monu",
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*1ZDU7eEksPkMvjmp",
    tags: ["Learning", "Productivity", "Career"],
    mediumUrl:
      "https://medium.com/@monu/the-best-way-to-learn-programming-is-when-you-actually-need-it-cddb4b4af0f5",
  },
];
