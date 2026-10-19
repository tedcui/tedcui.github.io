import { ArrowDownRight } from "lucide-react";

const stages = ["Question", "Evidence", "Model", "Decision"];

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">
          Hello, I’m Ted Cui
        </p>
        <h1 id="hero-title">
          Senior Full-Stack
          <span>Data Scientist.</span>
        </h1>
        <p className="hero-statement">
          I build decision systems that turn complex data into measurable business impact.
        </p>
        <p className="hero-capabilities">
          Experimentation <i>·</i> Causal Inference <i>·</i> Applied ML <i>·</i>
          Forecasting <i>·</i> Optimization <i>·</i> Analytics Engineering <i>·</i> Pittsburgh, PA
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#work">
            Explore my work <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="decision-map" aria-label="Decision-system workflow: question, evidence, model, decision">
        <div className="map-header">
          <span>DECISION SYSTEM / 01</span>
          <span className="map-live">FRAME → ACTION</span>
        </div>
        <div className="map-orbit" aria-hidden="true">
          <span className="orbit-ring orbit-ring--one" />
          <span className="orbit-ring orbit-ring--two" />
          <span className="orbit-core">Δ</span>
        </div>
        <ol className="map-stages">
          {stages.map((stage, index) => (
            <li key={stage}>
              <span>0{index + 1}</span>
              <strong>{stage}</strong>
            </li>
          ))}
        </ol>
        <div className="map-footer">
          <span>Signal</span>
          <span className="signal-line"><i /></span>
          <span>Action</span>
        </div>
      </div>
    </section>
  );
}
