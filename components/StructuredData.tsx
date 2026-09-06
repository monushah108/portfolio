export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ubeyid Oumer",
    alternateName: ["monu", "monu"],
    url: "https://monu.tech",
    image: "https://monu.tech/profile.jpg",
    description:
      "Student and self-taught software engineer who started coding in grade 10 and builds real-world systems across AI, Linux, open-source, and platform engineering.",
    jobTitle: "Student & Self-taught Software Engineer",
    nationality: {
      "@type": "Country",
      name: "Ethiopia",
    },
    educationalLevel: "University Freshman",
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Linux",
      "Systems Engineering",
      "Open Source Software",
      "Platform Engineering",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-taught (Independent Study)",
    },
    sameAs: [
      "https://github.com/monu",
      "https://www.linkedin.com/in/monuh",
      "https://x.com/monu",
      "https://youtube.com/@monu",
      "https://medium.com/@monu",
      "https://t.me/monu",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
