import { MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

export function About() {
  return (
    <section className="section shell about" id="about" aria-labelledby="about-title">
      <div className="about-main">
        <p className="eyebrow">About</p>
        <h2 id="about-title">Technical depth.<br />Business consequence.</h2>
      </div>
      <div className="about-copy">
        <p>
          I’m a Senior Data Scientist with 11+ years of experience building analytics, experimentation, and machine-learning systems across healthcare, technology, retail, marketing, and advertising.
        </p>
        <p>
          My work sits at the intersection of statistical modeling, experimentation, engineering, and business decision-making.
        </p>
        <div className="location"><MapPin size={17} aria-hidden="true" /> Based in {siteConfig.location}</div>
        <div className="career-context">
          <span>Career context</span>
          <p>From ambiguous questions through production delivery and stakeholder decisions.</p>
        </div>
        <div className="education">
          <div>
            <span>MS · Computational Mathematics</span>
            <strong>Duquesne University</strong>
          </div>
          <div>
            <span>BS · Mathematics</span>
            <strong>China University of Mining and Technology</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
