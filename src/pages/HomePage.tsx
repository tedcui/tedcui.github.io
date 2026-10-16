import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Lifecycle } from "../components/Lifecycle";
import { Metrics } from "../components/Metrics";
import { ProjectCard } from "../components/ProjectCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TechStack } from "../components/TechStack";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Metrics />

        <section className="section shell work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Systems, not demos.</h2>
            </div>
            <p>
              Selected decision systems spanning healthcare, pricing, marketing, experimentation, and operations.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>

        <Lifecycle />
        <TechStack />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
