export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  cardTitle: string;
  summary: string;
  cardSummary: string;
  accent: "blue" | "violet" | "cyan" | "amber";
  metrics: Metric[];
  methods: string[];
  decision: string;
  context: string;
  role: string;
  constraints: string[];
  diagram: string[];
  approach: string[];
  rationale: string;
  validation: string[];
  shipped: string[];
  impact: string[];
  limitations: string[];
};
