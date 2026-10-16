const groups = [
  {
    number: "01",
    title: "Model",
    items: ["Bayesian statistics", "XGBoost", "Random Forest", "LASSO / Elastic Net", "ARIMA / SARIMA", "Clustering"]
  },
  {
    number: "02",
    title: "Experiment",
    items: ["A/B + A/A testing", "CUPED / CUPAC", "Difference-in-Differences", "Propensity scores", "Pre/post analysis"]
  },
  {
    number: "03",
    title: "Engineer",
    items: ["Python", "SQL", "BigQuery", "dbt + Jinja", "Spark / PySpark", "ETL"]
  },
  {
    number: "04",
    title: "Deliver",
    items: ["Git + GitHub", "CI/CD", "AWS", "Kubernetes", "Power BI"]
  }
];

export function TechStack() {
  return (
    <section className="section shell tools-section" aria-labelledby="tools-title">
      <div className="section-heading">
        <p className="eyebrow">Tools I use</p>
        <h2 id="tools-title">Methods in service of decisions.</h2>
      </div>
      <div className="tool-grid">
        {groups.map((group) => (
          <article key={group.title}>
            <div className="tool-title"><span>{group.number}</span><h3>{group.title}</h3></div>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
