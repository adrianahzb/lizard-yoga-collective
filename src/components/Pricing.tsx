const plans = [
  {
    eyebrow: "First Timer",
    title: "Intro Offer",
    price: "$69",
    period: "for 2 weeks",
    features: ["Unlimited yoga classes", "One sound bath", "One sauna session", "Community welcome"],
    cta: "Start Here",
    featured: false,
  },
  {
    eyebrow: "Most Popular",
    title: "Unlimited",
    price: "$189",
    period: "/month",
    features: ["Unlimited yoga classes", "Unlimited sound baths", "2 sauna sessions/month", "2 float sessions/month", "10% off workshops"],
    cta: "Join Now",
    featured: true,
  },
  {
    eyebrow: "Flexible",
    title: "10-Class Pack",
    price: "$220",
    period: "valid 3 months",
    features: ["10 yoga or sound bath classes", "Add sauna for $35/session", "Add float for $45/session", "Shareable with a friend"],
    cta: "Buy Pack",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
            Pricing
          </p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-primary leading-[0.9]">
            find your <span className="font-editorial font-light lowercase">practice</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`p-8 flex flex-col ${
                plan.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border"
              }`}
            >
              <p className={`font-body text-[10px] font-semibold uppercase tracking-[0.3em] mb-4 ${
                plan.featured ? "text-accent" : "text-secondary"
              }`}>
                {plan.eyebrow}
              </p>
              <h3 className="font-display text-2xl font-bold mb-1">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className="font-body text-sm opacity-70">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="font-body text-sm flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      plan.featured ? "bg-accent" : "bg-secondary"
                    }`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center font-body text-sm font-semibold uppercase tracking-widest py-3.5 transition-all ${
                  plan.featured
                    ? "bg-accent text-accent-foreground hover:brightness-110"
                    : "bg-primary text-primary-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
