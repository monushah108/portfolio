export default function AboutSection() {
  return (
    <section>
      <div className="px-4 py-10">
        <h2 className="sr-only">About</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I’m a full-stack developer who enjoys turning ideas into practical,
          real-world software. I’ve spent the past 2+ years building with
          JavaScript and modern web technologies, working across the frontend,
          backend, databases, authentication, and real-time systems.
          <br />
          <br />
          I’m particularly interested in building applications that solve
          meaningful problems and push my technical limits. My projects include
          real-time collaborative platforms, AI-powered applications, secure
          authentication systems, role-based access control, and cloud-based
          services.
          <br />
          <br />
          I’m currently pursuing a Bachelor’s in Computer Applications at IGNOU
          while continuing to build, learn, and contribute to the developer
          community.
        </p>
      </div>

      <div className="h-10 border-y border-border/60 stripe-bg-12" />
    </section>
  );
}
