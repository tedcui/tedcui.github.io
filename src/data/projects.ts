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
    category: "Pricing + Marketing",
    title: "Bayesian MMM + Price Elasticity",
    cardTitle: "Bayesian MMM + Price Elasticity",
    summary:
      "A connected modeling system for understanding price sensitivity, customer heterogeneity, and cross-channel marketing contribution, with a planned AI copilot for interpreting results.",
    cardSummary:
      "Turning more than 100 million loyalty transactions into pricing and marketing decisions, with an AI interpretation layer planned.",
    accent: "violet",
    metrics: [
      { value: "+2.3%", label: "revenue lift", detail: "Portfolio outcome" },
      { value: "+4.5%", label: "marketing ROI", detail: "Portfolio outcome" },
      { value: "6", label: "customer segments", detail: "Actionable groups" }
    ],
    methods: ["Bayesian Modeling", "Hierarchical Models", "Scenario Analysis", "AI Copilot (Planned)"],
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
      "The AI model copilot is a planned extension and is not included among the shipped project outcomes.",
      "The public case study does not disclose company, channel, or customer-level data."
    ],
    aiLayer: {
      status: "planned",
      badge: "AI model copilot · planned",
      title: "A model copilot for interpreting uncertainty and impact.",
      summary:
        "A planned conversational layer would help stakeholders understand channel contribution, segment-level elasticity, uncertainty, and scenario results without reducing the Bayesian model to a single point estimate.",
      inputs: [
        "Posterior summaries and channel contribution",
        "Segment-level elasticity estimates",
        "Scenario tables, metric glossary, and model documentation"
      ],
      assistance: [
        "Answers natural-language questions about model results",
        "Explains credible intervals and decision uncertainty",
        "Compares pricing and media scenarios",
        "Separates model evidence from business recommendations"
      ],
      guardrails: [
        "Citations back to model outputs and definitions",
        "Uncertainty preserved in every explanation",
        "No unsupported causal claims",
        "Stakeholder approval before planning decisions"
      ],
      flow: [
        "Model outputs + documentation",
        "RAG-grounded context",
        "LLM explanation",
        "Stakeholder decision"
      ],
      note:
        "This copilot is a planned extension, not a shipped project result. The intended RAG layer would ground responses in posterior outputs, scenario tables, metric definitions, assumptions, and the model card."
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
