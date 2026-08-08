const plans = [
  {
    eyebrow: "First Timer",
    title: "Intro Offer",
    price: "$33",
    period: "for 1 week",
    features: ["Unlimited yoga classes", "Unlimited sound baths", "Unlimited breathworks"],
    cta: "Start Here",
    featured: false,
  },
  {
    eyebrow: "Most Popular",
    title: "Unlimited",
    price: "$109",
    period: "/month",
    features: ["Unlimited yoga classes", "Unlimited sound baths", "Unlimited breathwork", "10% off other services", "10% off workshops"],
    cta: "Join Now",
    featured: true,
  },
  {
    eyebrow: "Full Experience",
    title: "Unlimited Contrast + Yoga",
    price: "$350",
    period: "/month",
    features: ["Unlimited yoga classes and unlimited contrast therapy", "Infrared sauna, cold plunge, and daily yoga all under one roof in Austin"],
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
