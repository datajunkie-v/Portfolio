import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, resumePath } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const technologyMarks: Record<string, string> = {
  Python: "Py",
  Pandas: "Pd",
  NumPy: "Np",
  "Scikit-learn": "Sk",
  "Cosine Similarity": "cos",
  SVD: "SVD",
  Taipy: "Tp",
  "Google TimesFM": "TFM",
  "Time Series": "TS",
  "Jugaad Data API": "API",
  Plotly: "Pl",
  Git: "Git",
  RAG: "RAG",
  "LLM API": "LLM",
  Embeddings: "emb",
  "Vector search": "vec",
  FastAPI: "API",
  Streamlit: "st",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Vishal Panuganti`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <header className="site-header">
        <div className="header-brand-group">
          <Link className="wordmark" href="/" aria-label="Vishal Panuganti, home">Vishal Panuganti</Link>
          <a className="nav-resume" href={resumePath} download>Resume <span aria-hidden="true">↗</span></a>
        </div>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
      <section className="case-header section-wrap">
        <Link className="case-back" href="/#projects"><span aria-hidden="true">←</span> Back to projects</Link>
        <span className="case-watermark" aria-hidden="true">{project.mark}</span>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-description">{project.description}</p>
        {project.status !== "Completed project" && <p className="project-status status-placeholder"><span />{project.status}</p>}
      </section>
      <section className="case-body section-wrap" aria-label={`${project.title} project details`}>
        {project.details.length > 0 ? <div className="case-detail-column">
          <p className="eyebrow">OVERVIEW</p>
          <h2>Project details</h2>
          <ul className="case-detail-list">
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div> : <div className="case-detail-column case-empty">
          <p className="eyebrow">PROJECT NOTES</p>
          <h2>Details to come.</h2>
          <p>This page is reserved for your next project. Add its description, workflow, and technology list when you are ready.</p>
        </div>}
        <div className="case-architecture">
          <p className="eyebrow">SYSTEM DESIGN</p>
          <h2>{project.flow.length > 0 ? "How it works" : "Design to come"}</h2>
          {project.flow.length > 0 ? <div className="case-flow" aria-label={`Project workflow: ${project.flow.join(", then ")}`}>
            {project.flow.map((step) => <div className="case-flow-step" key={step}><b>{step}</b></div>)}
          </div> : <p className="case-empty-note">Workflow details will be added with the project.</p>}
        </div>
        <div className="case-technology-section">
          <p className="eyebrow">TECHNOLOGY STACK</p>
          <h2>{project.tags.length > 0 ? project.tagLabel : "To be added"}</h2>
          {project.tags.length > 0 ? <div className="technology-grid">
            {project.tags.map((tag) => <div className="technology-item" key={tag}>
              <span className="technology-mark" aria-hidden="true">{technologyMarks[tag] ?? tag.slice(0, 3)}</span>
              <span>{tag}</span>
            </div>)}
          </div> : <p className="case-empty-note">Technology choices will be listed when the project is defined.</p>}
          {project.status === "Proposed concept" && <p className="concept-disclaimer">Proposed concept only. This is not presented as a completed project or production implementation.</p>}
        </div>
      </section>
      <footer className="site-footer section-wrap">
        <Link className="wordmark" href="/">Vishal Panuganti<span>.</span></Link>
        <span>Vishal Panuganti · AI / ML Engineer</span>
        <Link href="/#contact">Get in touch ↗</Link>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
