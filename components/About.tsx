const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "DOM manipulation",
  "REST APIs",
  "Fetch / Async-Await",
  "LocalStorage",
  "Chart.js",
  "Responsive design",
  "Git / GitHub",
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-card">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              About
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              I&apos;m a frontend developer with 1–3 years of experience
              building React applications that manage real data — job
              applications, product catalogs, business metrics, course
              progress. I care about clean component structure, state that
              behaves predictably, and interfaces that stay usable once the
              data gets messy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted">Stack</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-line bg-paper px-3 py-1 font-mono text-xs text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
