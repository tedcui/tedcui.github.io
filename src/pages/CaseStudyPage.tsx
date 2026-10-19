import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CircleAlert, Database, HeartPulse } from "lucide-react";
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

        {showDashboard && (
          <section id="interactive-demos" className="section shell demo-suite" aria-labelledby="demo-suite-title">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Interactive system demos</p>
                <h2 id="demo-suite-title">Follow the data into action.</h2>
              </div>
              <p>
                Two focused demos tell one connected story: establish a trustworthy patient-data
                foundation, then turn its risk-ready features into a constrained outreach plan.
              </p>
            </div>

            <div className="dashboard-journey">
              <article className="dashboard-card dashboard-card--pipeline">
                <div className="dashboard-card__topline">
                  <span>01 / Upstream foundation</span>
                  <Database size={21} aria-hidden="true" />
                </div>
                <h3>Healthcare Data Pipeline</h3>
                <p>
                  See six source-feed patterns move through ingestion, standardization, patient
                  linkage, quality controls, and publication to a governed patient-month feature mart.
                </p>
                <ul aria-label="Pipeline demo highlights">
                  <li>Source contracts and lineage</li>
                  <li>Identity linkage and quality checks</li>
                  <li>Risk-ready feature publication</li>
                </ul>
                <a
                  className="button button--secondary"
                  href={siteConfig.healthcareDashboards.pipeline}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open pipeline demo <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </article>

              <div
                className="dashboard-handoff"
                role="img"
                aria-label="The governed feature mart feeds the outreach workflow"
              >
                <span>Governed feature mart</span>
                <ArrowRight size={24} aria-hidden="true" />
                <small>Risk-ready data</small>
              </div>

              <article className="dashboard-card dashboard-card--outreach">
                <div className="dashboard-card__topline">
                  <span>02 / Downstream decision</span>
                  <HeartPulse size={21} aria-hidden="true" />
                </div>
                <h3>Care Risk Outreach</h3>
                <p>
                  Explore how model scores become a capacity-aware call plan, with subgroup review,
                  patient prioritization, caregiver matching, and program-outcome feedback.
                </p>
                <ul aria-label="Outreach demo highlights">
                  <li>Model and subgroup review</li>
                  <li>Capacity-based patient prioritization</li>
                  <li>Caregiver matching and outcomes</li>
                </ul>
                <a
                  className="button button--primary"
                  href={siteConfig.healthcareDashboards.outreach}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open outreach demo <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </article>
            </div>

            <p className="dashboard-disclaimer">
              These sanitized demos illustrate the system design and use non-production data. Their
              displayed metrics are separate from the reported case-study result above.
            </p>
          </section>
        )}

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
