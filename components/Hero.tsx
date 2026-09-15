export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-24">
      <p className="font-mono text-sm text-accent">Frontend Developer / React.js</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
        Kingsley Osayande builds interfaces that hold state, data, and users
        together without falling apart.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        I build responsive, interactive web applications — from job trackers
        to e-commerce carts to analytics dashboards — with clean UI and
        dependable state management.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
        >
          View projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
        >
          View resume
        </a>
        <a
          href="#contact"
          className="px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
