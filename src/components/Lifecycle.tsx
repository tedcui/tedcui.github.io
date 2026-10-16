const phases = [
  { number: "01", name: "Frame", items: ["Business problem", "Metrics", "Causal question"] },
  { number: "02", name: "Build", items: ["SQL / Python", "ML / Statistics", "Optimization"] },
  { number: "03", name: "Ship", items: ["BigQuery", "dbt / ETL", "CI/CD"] },
  { number: "04", name: "Measure", items: ["Experimentation", "Monitoring", "Performance"] },
  { number: "05", name: "Decide", items: ["Pricing", "Product", "Operations"] }
];

export function Lifecycle() {
  return (
    <section className="section shell" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">Full-stack data science</p>
          <h2 id="capabilities-title">From ambiguity to action.</h2>
        </div>
        <p>
          I work across the complete lifecycle—from defining the right question to shipping a system and measuring the decision it improves.
        </p>
      </div>

      <ol className="lifecycle">
        {phases.map((phase, index) => (
          <li key={phase.name}>
            <div className="phase-topline">
              <span>{phase.number}</span>
              {index < phases.length - 1 && <i aria-hidden="true" />}
            </div>
            <h3>{phase.name}</h3>
            <ul>
              {phase.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
