import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "healthcare-ml",
    number: "01",
    category: "Healthcare AI",
    title: "Predictive Patient Care",
    cardTitle: "Predictive Patient Care",
    summary:
      "A clinical analytics workflow that turns high-dimensional claims signals into care-planning forecasts and patient-risk priorities.",
    cardSummary:
      "Clinical and claims data transformed into care-planning and risk-prioritization systems.",
    accent: "blue",
    metrics: [
      {
        value: "80%+",
        label: "manual workload reduction",
        detail: "Reported operational outcome"
      },
      {
        value: "0.79",
        label: "ROC-AUC",
        detail: "Mortality-risk model"
      }
    ],
    methods: ["Random Forest", "LASSO", "Elastic Net", "Clinical Analytics"],
    decision:
      "Which patients are likely to need specific care resources, and where should clinical teams prioritize attention?",
    context:
      "Sanitized healthcare analytics work spanning patient-needs forecasting, mortality risk, and care-resource planning.",
    role:
      "Modeling and analytics ownership across feature engineering, model development, and translation into care-planning workflows.",
    constraints: [
      "High-dimensional ICD-10 and CPT feature spaces",
      "Operational outputs needed to remain interpretable to care teams",
      "Public presentation must exclude patient-level and proprietary information"
    ],
    diagram: [
      "Clinical + claims data",
      "ICD-10 / CPT features",
      "Sparse feature selection",
      "Predictive modeling",
      "Need + risk scores",
      "Care planning"
    ],
    approach: [
      "Structured clinical and claims signals into model-ready feature sets.",
      "Used LASSO and Elastic Net to control a wide, correlated predictor space.",
      "Applied Random Forest models to capture nonlinear patient-risk patterns.",
      "Translated predictions into resource-planning signals for RN, PT, OT, ST, and home-health aide needs."
    ],
    rationale:
      "The approach balanced dimensionality control with nonlinear prediction. Sparse models made the signal space easier to inspect, while tree-based modeling captured interactions that a purely linear workflow could miss.",
    validation: [
      "The mortality-risk model achieved ROC-AUC 0.79.",
      "Operational usefulness was evaluated through its effect on the manual planning workflow.",
      "Detailed split, calibration, and cohort information is intentionally excluded from this sanitized public summary."
    ],
    shipped: [
      "Patient need and risk scoring workflow",
      "Care-resource planning outputs",
      "Analyst-facing decision support suitable for a sanitized interactive dashboard"
    ],
    impact: [
      "Reduced manual analyst workload by more than 80%.",
      "Created a repeatable path from clinical data to care-planning decisions.",
      "Supported risk stratification without exposing patient-level data in the portfolio."
    ],
    limitations: [
      "ROC-AUC describes ranking performance, not calibration or clinical utility by itself.",
      "Model outputs support professional judgment; they do not replace clinical decision-making.",
      "Public details are intentionally constrained by healthcare confidentiality."
    ]
  },
  {
    slug: "bayesian-mmm",
    number: "02",
    category: "Pricing + Marketing",
    title: "Bayesian MMM + Price Elasticity",
    cardTitle: "Bayesian MMM + Price Elasticity",
    summary:
      "A connected modeling system for understanding price sensitivity, customer heterogeneity, and cross-channel marketing contribution.",
    cardSummary:
      "Turning more than 100 million loyalty transactions into pricing and marketing decisions.",
    accent: "violet",
    metrics: [
      { value: "+2.3%", label: "revenue lift", detail: "Portfolio outcome" },
      { value: "+4.5%", label: "marketing ROI", detail: "Portfolio outcome" },
      { value: "6", label: "customer segments", detail: "Actionable groups" }
    ],
    methods: ["Bayesian Modeling", "Hierarchical Models", "K-Means", "Scenario Analysis"],
    decision:
      "How should pricing and marketing investment change across customer segments?",
    context:
      "Large-scale loyalty data with more than 100 million transactions, heterogeneous customer behavior, and overlapping pricing and media effects.",
    role:
      "Designed a connected analytical workflow from base-volume modeling through segmentation, elasticity estimation, and marketing scenario analysis.",
    constraints: [
      "Price response varied materially across customer groups",
      "Promotions and media activity created overlapping signals",
      "Outputs needed to support concrete planning scenarios rather than a single coefficient"
    ],
    diagram: [
      "Transaction data",
      "Base volume",
      "Hierarchical elasticity",
      "Customer segments",
      "Bayesian MMM",
      "Pricing + media decisions"
    ],
    approach: [
      "Established a base-volume view before attributing incremental effects.",
      "Estimated hierarchical price elasticities to retain segment-level differences while sharing information.",
      "Used K-means to develop six actionable customer groups.",
      "Connected Bayesian marketing mix estimates to scenario analysis for spend and pricing decisions."
    ],
    rationale:
      "A hierarchical Bayesian structure was suited to uneven data density and heterogeneous response. It supported partial pooling, explicit uncertainty, and planning scenarios that were more decision-ready than isolated point estimates.",
    validation: [
      "Model review covered stability of channel and price-response estimates across plausible specifications.",
      "Segment outputs were assessed for both analytical separation and business actionability.",
      "Confidential measurement details are omitted; the public figures should be read as a sanitized impact summary."
    ],
    shipped: [
      "Segment-level price-response estimates",
      "Cross-channel contribution analysis",
      "Scenario outputs connecting pricing and media choices to expected outcomes"
    ],
    impact: [
      "Supported a reported 2.3% revenue lift.",
      "Supported a reported 4.5% improvement in marketing ROI.",
      "Created six customer segments usable for differentiated action."
    ],
    limitations: [
      "Marketing mix results depend on the quality and variation of historical inputs.",
      "Scenario outputs are estimates, not guarantees of future performance.",
      "The public case study does not disclose company, channel, or customer-level data."
    ]
  },
  {
    slug: "experimentation",
    number: "03",
    category: "Experimentation",
    title: "Experimentation & Causal Measurement",
    cardTitle: "Experimentation & Causal Measurement",
    summary:
      "A measurement framework that improves the reliability, sensitivity, and decision value of growth and product experiments.",
    cardSummary:
      "Building reliable measurement systems for growth and product decisions—not just running isolated tests.",
    accent: "cyan",
    metrics: [
      {
        value: "1.3%",
        label: "conversion lift",
        detail: "Identified through causal analysis"
      }
    ],
    methods: ["A/A Validation", "CUPED", "CUPAC", "PSM", "GA4"],
    decision:
      "Which observed changes are genuinely incremental, and when is the evidence strong enough to act?",
    context:
      "User-acquisition and product measurement spanning controlled experiments, attribution, cross-platform data, and quasi-experimental questions.",
    role:
      "Built and improved the measurement framework surrounding experiment design, validation, variance reduction, and causal decision support.",
    constraints: [
      "Cross-platform metrics required alignment before comparison",
      "Not every business question could be randomized",
      "Decision speed had to be balanced with statistical sensitivity and guardrails"
    ],
    diagram: [
      "Business question",
      "Design + A/A validation",
      "Treatment / control",
      "CUPED / CUPAC",
      "Success + guardrails",
      "Decision"
    ],
    approach: [
      "Validated the measurement system with A/A tests before interpreting treatment effects.",
      "Defined success and guardrail metrics around the business decision.",
      "Used CUPED and CUPAC to improve sensitivity where pre-treatment information was available.",
      "Applied propensity score matching and pre/post analysis when randomization was not feasible."
    ],
    rationale:
      "The framework selected methods based on the identification problem. Randomization remained the preferred path, while quasi-experimental tools addressed specific counterfactual gaps instead of being treated as interchangeable techniques.",
    validation: [
      "A/A testing checked assignment, instrumentation, and false-positive behavior.",
      "Guardrail metrics kept local conversion gains from obscuring broader product risk.",
      "The 1.3% lift is presented as supplied; relative-versus-percentage-point detail is not disclosed in this sanitized summary."
    ],
    shipped: [
      "Reusable experiment-quality checks",
      "Variance-reduction workflow",
      "Aligned success and guardrail metrics",
      "Decision-ready causal analysis for non-randomized questions"
    ],
    impact: [
      "Identified a 1.3% conversion lift through causal analysis.",
      "Raised confidence in experiment interpretation through A/A validation.",
      "Expanded measurement beyond isolated tests into a repeatable operating framework."
    ],
    limitations: [
      "Quasi-experimental estimates remain sensitive to assumptions about observed and unobserved confounding.",
      "Variance reduction improves precision; it does not repair biased assignment or broken instrumentation.",
      "Detailed estimands and analysis windows are excluded from the public summary."
    ]
  },
  {
    slug: "inventory-optimization",
    number: "04",
    category: "Decision Science",
    title: "Inventory & Product Availability",
    cardTitle: "Inventory & Product Availability",
    summary:
      "A proactive decision system connecting demand, shipment, wholesale, and inventory signals to outlet-level availability actions.",
    cardSummary:
      "Turning demand, shipment, and inventory signals into proactive operational decisions.",
    accent: "amber",
    metrics: [
      {
        value: "≈ $1,321",
        label: "estimated annual value / outlet",
        detail: "Annualized opportunity estimate"
      }
    ],
    methods: ["Forecasting", "Inventory KPIs", "Early Warning", "Decision Science"],
    decision:
      "Where is product availability at risk, and which outlets should receive proactive operational attention?",
    context:
      "Retail operations combining outlet-level sales, shipment, wholesale, and inventory-health signals.",
    role:
      "Developed a decision framework connecting demand and supply signals to early warnings, availability KPIs, and operational recommendations.",
    constraints: [
      "Sales, shipments, and wholesale feeds reflected different parts of the operating reality",
      "Alerts needed to be early enough to act without overwhelming users with false positives",
      "Availability opportunity had to be expressed at an outlet-action level"
    ],
    diagram: [
      "Sales + shipments",
      "Demand signal",
      "Inventory health",
      "Availability risk",
      "Early warning",
      "Outlet action"
    ],
    approach: [
      "Combined multiple operational feeds into demand and availability signals.",
      "Defined inventory-health KPIs that separated normal variation from meaningful risk.",
      "Used forecasting and potential-lost-sales logic to prioritize outlets.",
      "Translated model output into proactive alerts and operational recommendations."
    ],
    rationale:
      "Forecast accuracy alone was not the objective. The design emphasized decision timing and prioritization so that an imperfect signal could still create more operational value than a late, highly precise one.",
    validation: [
      "Evaluation focused on the usefulness of early-warning signals and outlet prioritization.",
      "Alert sensitivity must be weighed against false-positive burden for operating teams.",
      "The $1,321 figure is treated as an approximate annualized value estimate, not realized revenue."
    ],
    shipped: [
      "Inventory-health KPI layer",
      "Outlet-level risk prioritization",
      "Early-warning signals and operational recommendations"
    ],
    impact: [
      "Estimated approximately $1,321 in annual value per outlet.",
      "Shifted product-availability work from retrospective reporting toward proactive action.",
      "Connected fragmented demand and supply signals into a shared decision view."
    ],
    limitations: [
      "Estimated opportunity depends on assumptions about lost sales and operational follow-through.",
      "The work does not claim an excess-inventory reduction.",
      "Data-source and company details remain intentionally sanitized."
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
