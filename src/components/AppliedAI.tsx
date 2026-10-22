import { ArrowRight, Database, MessageSquareText, ShieldCheck } from "lucide-react";
import { sitePath } from "../config/site";

const capabilities = [
  {
    title: "Ground",
    icon: Database,
    body: "Connect AI responses to model outputs, metric definitions, approved business context, and retrieval-augmented generation (RAG) when documents matter."
  },
  {
    title: "Explain",
    icon: MessageSquareText,
    body: "Translate scores, uncertainty, and scenarios into audience-ready language without hiding the evidence or its limitations."
  },
  {
    title: "Govern",
    icon: ShieldCheck,
    body: "Evaluate responses, expose assumptions, protect sensitive data, and keep accountable people in the decision loop."
  }
];

export function AppliedAI() {
  return (
    <section className="section shell applied-ai" aria-labelledby="applied-ai-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">Applied AI</p>
          <h2 id="applied-ai-title">An interpretation layer—not the decision-maker.</h2>
        </div>
        <p>
          I use LLMs and generative AI selectively when they make analytical systems easier to
          understand and act on. The underlying evidence still comes from governed data, statistical
          models, and human judgment.
        </p>
      </div>

      <div className="ai-capability-grid">
        {capabilities.map(({ title, icon: Icon, body }, index) => (
          <article key={title}>
            <div className="ai-capability-grid__topline">
              <span>0{index + 1}</span>
              <Icon size={20} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>

      <div className="ai-example-row">
        <a href={sitePath("work/healthcare-ml/#ai-layer")}>
          <span>Live demo</span>
          <strong>Healthcare AI insight agent</strong>
          <ArrowRight size={19} aria-hidden="true" />
        </a>
        <a href={sitePath("work/bayesian-mmm/#ai-layer")}>
          <span>Planned extension</span>
          <strong>Bayesian MMM model copilot</strong>
          <ArrowRight size={19} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
