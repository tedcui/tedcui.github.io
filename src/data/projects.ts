import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "healthcare-ml",
    number: "01",
    category: "Healthcare AI + Decision Support",
    title: "Predictive Patient Care",
    cardTitle: "Predictive Patient Care",
    summary:
      "An end-to-end healthcare decision system that combines governed patient data, transparent risk modeling, capacity-aware outreach, and an AI-assisted insight layer.",
    cardSummary:
      "From governed patient data to transparent risk scoring, capacity-aware outreach, and AI-assisted explanation.",
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
    methods: ["Data Quality", "Risk Modeling", "AI-Assisted Insights", "Human-in-the-Loop"],
    decision:
      "How can care teams trust the underlying patient data, identify elevated risk, and turn limited outreach capacity into a practical action plan?",
    context:
      "Sanitized healthcare analytics work spanning source ingestion, patient-level data quality, longitudinal feature engineering, mortality risk, and care-resource planning. Two interactive demos show how the data foundation connects to the operating workflow.",
    role:
      "End-to-end analytics ownership across source profiling, quality controls, feature engineering, model development, and translation into care-planning workflows.",
    constraints: [
      "Fragmented source feeds required common definitions, grains, and patient linkage",
      "High-dimensional ICD-10 and CPT feature spaces",
      "Operational outputs needed to remain interpretable to care teams",
      "Public presentation must exclude patient-level and proprietary information"
    ],
    diagram: [
      "Clinical + admin feeds",
      "Standardize + link",
      "Patient-month feature mart",
      "Transparent risk model",
      "Capacity-based outreach",
      "Care-team action"
    ],
    approach: [
      "Profiled six source-feed patterns and made their contracts, grains, and refresh behavior explicit.",
      "Standardized codes, dates, and units; linked records into a longitudinal patient view; and surfaced quality checks before publication.",
      "Published a governed patient-month feature layer that can support reporting, measurement, and repeatable risk scoring.",
      "Used sparse linear methods and Random Forest modeling to inspect signal, control a wide predictor space, and capture nonlinear risk patterns.",
      "Translated risk ranking into a capacity-aware call plan, priority patient list, caregiver matching, and outcome feedback.",
      "Added a controlled AI-assisted narrative that explains queue position, predictive drivers, outreach framing, and caregiver-match tradeoffs for human review."
    ],
    rationale:
      "A useful risk model depends on both trustworthy inputs and a clear path to action. The design therefore pairs lineage and quality controls with transparent modeling, then connects the resulting risk signals to the actual constraint: limited care-team capacity.",
    validation: [
      "The portfolio mortality-risk model achieved ROC-AUC 0.79.",
      "Operational usefulness was evaluated through its effect on the manual planning workflow.",
      "Metrics shown inside the public demos are illustrative and should not be read as the portfolio model's reported result.",
      "Detailed split, calibration, and cohort information is intentionally excluded from this sanitized public summary."
    ],
    shipped: [
      "Source-to-feature pipeline with lineage and data-quality monitoring",
      "Patient need and risk scoring workflow",
      "Capacity-based outreach planning and priority patient views",
      "Caregiver matching and program-outcome feedback views",
      "AI-assisted patient and caregiver explanations grounded in the dashboard context"
    ],
    impact: [
      "Reduced manual analyst workload by more than 80%.",
      "Created a repeatable path from clinical data to care-planning decisions.",
      "Supported risk stratification without exposing patient-level data in the portfolio."
    ],
    limitations: [
      "ROC-AUC describes ranking performance, not calibration or clinical utility by itself.",
      "Model outputs support professional judgment; they do not replace clinical decision-making.",
      "The linked dashboards are sanitized demonstrations, not production systems or clinical decision tools.",
      "The public demo uses controlled narrative logic; a production LLM or RAG implementation would require secured retrieval, formal evaluation, monitoring, and clinical governance.",
      "Public details are intentionally constrained by healthcare confidentiality."
    ],
    aiLayer: {
      status: "live",
      badge: "AI insight agent · live demo",
      title: "AI that explains the decision—not replaces the clinician.",
      summary:
        "The insight agent turns structured model outputs into a concise, patient-specific narrative. It explains why a patient entered the outreach queue, provides model context, suggests outreach framing, and makes caregiver-match tradeoffs easier to review.",
      inputs: [
        "Patient risk score and queue position",
        "Predictive drivers and odds-ratio context",
        "Caregiver specialty, availability, distance, and capacity"
      ],
      assistance: [
        "Summarizes why the patient was prioritized",
        "Translates predictive signals into plain language",
        "Suggests a prevention-focused conversation",
        "Explains recommended and alternative caregiver matches"
      ],
      guardrails: [
        "No diagnosis or autonomous care decision",
        "Predictive—not causal—language",
        "Human review before outreach action",
        "Sanitized data and visible model limitations"
      ],
      flow: [
        "Patient + model context",
        "Grounded explanation",
        "Care-team review",
        "Outreach action"
      ],
      note:
        "The live public demo uses controlled, context-grounded narrative logic. A production LLM/RAG extension would retrieve approved model documentation and outreach guidance, cite its sources, and require security, evaluation, and monitoring before use."
    }
  },
  {
    slug: "bayesian-mmm",
    number: "02",
    category: "Marketing Science",
    title: "From Marketing Mix to Budget Decisions",
    cardTitle: "Bayesian Marketing Mix Modeling",
    summary:
      "When campaigns overlap and markets respond differently, a single attribution number is a poor guide to investment. I built a Bayesian marketing mix workflow that connects trustworthy data, uncertainty-aware estimates, and spend scenarios to a clearer budget conversation.",
    cardSummary:
      "Helping marketing teams understand where spend may work, how response differs by market, and what evidence supports a budget change.",
    accent: "violet",
    metrics: [],
    decisionLens: [
      { label: "The problem", text: "Overlapping campaigns obscure channel and market response." },
      { label: "The method", text: "Bayesian MMM, reliable data pipelines, and scenario modeling." },
      { label: "The value", text: "Compare spend choices with uncertainty and limits in view." }
    ],
    methods: ["PyMC", "Hierarchical Bayesian MMM", "Data Engineering", "Adstock + Saturation", "Scenario Planning"],
    decision:
      "Where might a team shift marketing spend across channels and regions, and how much confidence should it place in that choice?",
    context:
      "Marketing investment decisions are difficult when promotions run together, results vary by market, and historical data cannot cleanly isolate each effect. I built a synthetic retail environment so the full decision workflow can be inspected publicly.",
    role:
      "Owned the demonstration end to end: source design, quality checked ETL, Bayesian model specification and evaluation, dashboard interpretation, and an interactive budget simulator.",
    constraints: [
      "Campaigns move together, making individual channel effects hard to identify",
      "Market response varies, but some regions have less information than others",
      "Proposed budgets can exceed the spending patterns observed in the data"
    ],
    diagram: [
      "Transaction + spend inputs",
      "Validated market data",
      "Bayesian response model",
      "Model checks",
      "Scenario comparison",
      "Budget discussion"
    ],
    approach: [
      "Created synthetic transaction, product, store, spend, and market-context sources, then built a reconciled regional modeling layer with explicit quality checks and lineage.",
      "Fit Bayesian models that allow response to differ by region while sharing information where evidence is thin. Adstock and saturation represent delayed and diminishing media response.",
      "Compared pooling assumptions and checked predictive error, posterior diagnostics, and recovery against known synthetic effects before using estimates in planning views.",
      "Translated posterior draws into channel contribution, market comparisons, and a simulator that holds other conditions fixed while a user explores spend changes.",
      "Added spending-support warnings and a bounded allocation search so scenario results prompt a discussion rather than imply an automatic optimum."
    ],
    rationale:
      "A budget recommendation needs more than a point estimate. Hierarchical Bayes can share evidence across regions without assuming they behave identically; posterior scenarios show the range of plausible responses. Comparing model structures and observed spend support helps reveal where the data cannot justify a confident move.",
    validation: [
      "Compared complete, no, and partial pooling; evaluated convergence, holdout error, and recovery of the known synthetic effects.",
      "Kept expected outcome uncertainty separate from future observation uncertainty and checked contribution reconciliation.",
      "Validated source lineage, export integrity, and simulator parity so the dashboard uses the evaluated model outputs."
    ],
    shipped: [
      "Reproducible synthetic source and ETL pipeline with data contracts, lineage, and quality checks",
      "PyMC marketing mix models with regional response, carryover, saturation, and posterior diagnostics",
      "Live dashboard for demand, channel contribution, and regional model comparisons",
      "Interactive spend simulator with uncertainty, support warnings, and bounded budget allocation"
    ],
    impact: [
      "Frame a budget discussion around which channels and markets appear responsive, with uncertainty attached to the estimates.",
      "Compare a current plan with alternatives before committing spend, while seeing when a proposal reaches beyond historical support.",
      "Trace a planning recommendation back through model assumptions, diagnostics, and data quality checks."
    ],
    limitations: [
      "The public lab uses synthetic data; it does not report realized commercial impact.",
      "Modeled channel contributions are sensitive to assumptions and do not establish causal lift.",
      "Scenario comparisons hold other conditions fixed and are not guaranteed forecasts.",
      "The allocation search is local and optimizes modeled units, not profit or a global optimum.",
      "The AI model copilot is a planned extension, not a shipped feature."
    ],
    aiLayer: {
      status: "planned",
      badge: "AI model copilot · planned",
      title: "A grounded copilot for explaining posterior evidence.",
      summary:
        "A planned conversational layer would help stakeholders compare pooling strategies, understand channel contribution and uncertainty, and interpret simulator results without reducing the model to a single point estimate.",
      inputs: [
        "Versioned posterior summaries and channel decomposition",
        "Pooling comparison, holdout, recovery, and diagnostic metrics",
        "Scenario outputs, metric definitions, and model documentation"
      ],
      assistance: [
        "Compares complete, no, and partial pooling",
        "Explains credible versus predictive uncertainty",
        "Interprets regional spend scenarios and support warnings",
        "Separates model evidence from business recommendations"
      ],
      guardrails: [
        "Citations back to exported values and definitions",
        "Credible and predictive intervals kept distinct",
        "No unsupported causal or forecast claims",
        "Stakeholder approval before planning decisions"
      ],
      flow: [
        "Exports + documentation",
        "RAG-grounded context",
        "LLM explanation",
        "Stakeholder decision"
      ],
      note:
        "This copilot is a planned extension, not a shipped project result. The intended RAG layer would ground every response in versioned posterior exports, scenario tables, metric definitions, assumptions, and model documentation."
    }
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
