import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://monu.tech"),

  title: {
    default: "Monu — Full-Stack Developer & AI Builder",
    template: "%s | Monu",
  },

  description:
    "Monu is a full-stack developer building modern web applications, AI-powered tools, real-time systems, and developer-focused products with JavaScript, React, Next.js, Node.js, and MongoDB.",

  applicationName: "Monu",

  authors: [
    {
      name: "Monu",
      url: "https://monu.tech",
    },
  ],

  creator: "Monu",
  publisher: "Monu",

  category: "Technology",

  keywords: [
    "Monu",
    "Monu Shah",
    "full-stack developer",
    "web developer",
    "software developer",
    "AI developer",
    "AI engineer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "real-time applications",
    "AI applications",
    "developer tools",
    "software engineering portfolio",
  ],

  alternates: {
    canonical: "https://monu.tech",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monu.tech",
    siteName: "Monu",

    title: "Monu — Full-Stack Developer & AI Builder",

    description:
      "Portfolio of Monu, a full-stack developer building modern web applications, AI-powered tools, real-time systems, and developer-focused products.",

    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Monu — Full-Stack Developer & AI Builder",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Monu — Full-Stack Developer & AI Builder",

    description:
      "Full-stack developer building modern web applications, AI-powered tools, real-time systems, and developer products.",

    images: ["/og.png"],
    creator: "@monushah108",
  },
};
