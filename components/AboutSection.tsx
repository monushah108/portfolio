export default function AboutSection() {
  return (
    <section id="about">
      <div className="px-4 py-8 sm:py-10">
        <h2 className="sr-only">About</h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          I’m a full-stack developer with 2+ years of experience turning ideas into
          practical software across the modern web stack. I specialize in building
          real-time collaborative applications, clean frontend interfaces, and robust backend APIs.
          <br />
          <br />
          My engineering workflow focuses on clean code, strong typing, reliable database design,
          and containerized deployment pipelines using tools like Docker, Git, and Linux.
          <br />
          <br />
          Currently pursuing a Bachelor’s in Computer Applications at IGNOU while actively
          building, learning, and contributing to open-source software.
        </p>
      </div>

      <div className="h-8 sm:h-10 border-y border-border/60 stripe-bg-12" />
    </section>
  );
}
