const metrics = [
  { value: "11+", label: "Years in data science" },
  { value: "100M+", label: "Transactions analyzed" },
  { value: "10M+", label: "Accounts analyzed" },
  { value: "80%+", label: "Manual workload reduced" }
];

export function Metrics() {
  return (
    <section className="metrics-band" aria-label="Selected impact metrics">
      <div className="shell metrics-grid">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
