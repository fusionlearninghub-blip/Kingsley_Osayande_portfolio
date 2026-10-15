import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "CareerTrack",
    description:
      "A job application management dashboard that lets users add, edit, delete, search, filter, and track job applications and their statuses. Data persists in the browser.",
    role: "Designed the UI, built the dashboard, implemented CRUD operations, filtering, sorting, dark mode, and LocalStorage functionality.",
    stack: ["HTML5", "CSS3", "JavaScript", "DOM", "LocalStorage"],
    demoUrl: "https://careertrack-react.vercel.app/",
    repoUrl: "https://github.com/fusionlearninghub-blip/careertrack-react",
  },
  {
    name: "ShopFlow",
    description:
      "An e-commerce web app that fetches products from an API, displays them dynamically, and lets users search, filter products, and manage a shopping cart.",
    role: "Built the interface, integrated the REST API, handled asynchronous data fetching, product rendering, search/filtering, and cart functionality.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Fetch API",
      "REST API",
      "Async/Await",
      "LocalStorage",
    ],
    demoUrl: "https://shopflow-react.vercel.app/",
    repoUrl: "https://github.com/fusionlearninghub-blip/shopflow-react",
  },
  {
    name: "InsightBoard",
    description:
      "A business analytics dashboard showing revenue, orders, customers, conversion rates, sales categories, products, and customer information through interactive charts and tables.",
    role: "Developed the responsive dashboard, implemented data calculations, charts, search/filtering, theme switching, notifications, and LocalStorage state management.",
    stack: ["HTML5", "CSS3", "JavaScript", "DOM", "Chart.js", "LocalStorage"],
    demoUrl: "https://insightboard-react.vercel.app/",
    repoUrl: "https://github.com/fusionlearninghub-blip/insightboard-react",
  },
  {
    name: "FusionLearn",
    description:
      "An online learning platform where students can browse courses, enroll, track lesson progress, take quizzes, save favorite courses, view achievements, and manage their profiles.",
    role: "Designed and developed the platform, implemented course management, enrollment, progress tracking, quizzes, profiles, achievements, and persistent application state.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM",
      "Chart.js",
      "LocalStorage",
      "Fetch/API concepts",
    ],
    demoUrl: "https://fusionlearn-react.vercel.app/",
    repoUrl: "https://github.com/fusionlearninghub-blip/fusionlearn-react",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-16">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Projects
      </h2>
      <p className="mt-2 max-w-lg text-muted">
        Four applications covering the core patterns of real frontend work:
        CRUD, API integration, data visualization, and persistent state.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
