export type Project = {
  name: string;
  description: string;
  role: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-line bg-paper p-6 transition-colors hover:border-accent">
      <h3 className="font-display text-xl font-semibold text-ink">
        {project.name}
      </h3>
      <p className="mt-3 text-sm text-muted">{project.description}</p>
      <p className="mt-3 text-sm text-ink">
        <span className="font-medium">Role: </span>
        {project.role}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="project-tag rounded bg-accent-light px-2 py-1 font-mono text-xs text-accent-dark"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4">
        {/* TODO: replace with your real deployed link */}
        <a
          href={project.demoUrl}
          className="project-link text-sm font-medium text-accent hover:text-accent-dark"
        >
          Live demo
        </a>
        {/* TODO: replace with your real GitHub repo link */}
        <a
          href={project.repoUrl}
          className="project-link text-sm font-medium text-muted hover:text-ink"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
