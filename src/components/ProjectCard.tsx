import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig, sitePath } from "../config/site";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isHealthcare = project.slug === "healthcare-ml";

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__topline">
        <span>{project.number} / {project.category}</span>
        <span className="project-card__index">CASE_{project.number}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__copy">
          <h3>{project.cardTitle}</h3>
          <p>{project.cardSummary}</p>
        </div>
        <div className="project-card__metrics">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-card__signal" aria-hidden="true">
        <span /><span /><span /><span /><span /><span /><span />
      </div>

      <ul className="tag-list" aria-label="Methods used">
        {project.methods.map((method) => <li key={method}>{method}</li>)}
      </ul>

      <div className="project-card__actions">
        <a className="text-link" href={sitePath(`work/${project.slug}/`)}>
          View case study <ArrowRight size={18} aria-hidden="true" />
        </a>
        {isHealthcare && siteConfig.healthcareDashboard && (
          <a
            className="text-link text-link--muted"
            href={siteConfig.healthcareDashboard}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open dashboard <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        {isHealthcare && !siteConfig.healthcareDashboard && (
          <span className="text-link text-link--disabled" title="Add the dashboard URL in src/config/site.ts">
            Interactive dashboard · URL pending
          </span>
        )}
      </div>
    </article>
  );
}
