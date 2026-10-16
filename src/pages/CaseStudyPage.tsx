import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CircleAlert } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { siteConfig, sitePath } from "../config/site";
import { projects } from "../data/projects";
import type { Project } from "../types";

type CaseStudyPageProps = {
  project: Project;
};

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const showDashboard = project.slug === "healthcare-ml";

  return (
    <>
      <a className="skip-link" href="#case-content">Skip to case study</a>
      <SiteHeader compact />
      <main id="case-content" className={`case-page case-page--${project.accent}`}>
        <section className="case-hero shell" aria-labelledby="case-title">
          <a className="back-link" href={sitePath("#work")}>
            <ArrowLeft size={17} aria-hidden="true" /> Back to selected work
          </a>
          <div className="case-hero__grid">
            <div>
              <p className="eyebrow">{project.number} / {project.category}</p>
              <h1 id="case-title">{project.title}</h1>
              <p className="case-summary">{project.summary}</p>
              <ul className="tag-list case-tags" aria-label="Methods used">
                {project.methods.map((method) => <li key={method}>{method}</li>)}
              </ul>
            </div>
            <div className="case-metrics" aria-label="Project results">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  {metric.detail && <small>{metric.detail}</small>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shell case-foundation" aria-label="Case study foundation">
          <article>
            <span>01 / Context</span>
            <p>{project.context}</p>
          </article>
          <article>
            <span>02 / Decision</span>
            <p>{project.decision}</p>
          </article>
          <article>
            <span>03 / My role</span>
            <p>{project.role}</p>
          </article>
        </section>

        <section className="section shell case-architecture" aria-labelledby="architecture-title">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">System architecture</p>
              <h2 id="architecture-title">From signal to decision.</h2>
            </div>
            <p>Sanitized workflow showing how raw inputs become an operational action.</p>
          </div>
          <ol className="architecture-flow">
            {project.diagram.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < project.diagram.length - 1 && <i aria-hidden="true"><ArrowRight size={17} /></i>}
              </li>
            ))}
          </ol>
        </section>

        <section className="section shell case-content-grid">
          <div className="case-main-column">
            <article className="case-block">
              <p className="eyebrow">Approach</p>
              <h2>Build the chain, not just the model.</h2>
              <ul className="numbered-list">
                {project.approach.map((item, index) => (
                  <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
                ))}
              </ul>
            </article>

            <article className="case-block rationale-block">
              <p className="eyebrow">Why this method</p>
              <blockquote>{project.rationale}</blockquote>
            </article>

            <article className="case-block">
              <p className="eyebrow">What shipped</p>
              <h2>Analysis made operational.</h2>
              <ul className="check-list">
                {project.shipped.map((item) => (
                  <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
              {showDashboard && siteConfig.healthcareDashboard && (
                <a
                  className="button button--primary case-dashboard-link"
                  href={siteConfig.healthcareDashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch interactive dashboard <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {showDashboard && !siteConfig.healthcareDashboard && (
                <div className="dashboard-pending">
                  <span>Interactive dashboard</span>
                  <p>Sanitized dashboard link will appear here once configured.</p>
                </div>
              )}
            </article>
          </div>

          <aside className="case-side-column" aria-label="Validation and constraints">
            <article className="side-card">
              <p className="eyebrow">Validation</p>
              <ul>
                {project.validation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="side-card">
              <p className="eyebrow">Constraints</p>
              <ul>
                {project.constraints.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="side-card side-card--caution">
              <p className="eyebrow"><CircleAlert size={15} aria-hidden="true" /> Limitations</p>
              <ul>
                {project.limitations.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </aside>
        </section>

        <section className="section shell impact-panel" aria-labelledby="impact-title">
          <p className="eyebrow">Measured impact</p>
          <h2 id="impact-title">What changed.</h2>
          <div className="impact-grid">
            {project.impact.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell next-case">
          <p className="eyebrow">Next case study</p>
          <a href={sitePath(`work/${nextProject.slug}/`)}>
            <span>{nextProject.number} / {nextProject.category}</span>
            <strong>{nextProject.title}</strong>
            <ArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
