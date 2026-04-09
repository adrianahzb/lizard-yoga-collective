const pillars = [
  {
    number: "01",
    title: "Nervous System First",
    description: "Every offering — yoga, sound bath, cold plunge, float, breathwork, massage — serves the same core purpose: regulation.",
  },
  {
    number: "02",
    title: "Urban Sanctuary",
    description: "City life is loud. We are the pause. A space deliberately removed from the hustle — even when you're steps from a busy street.",
  },
  {
    number: "03",
    title: "Grounded Expertise",
    description: "Our teachers are specialists, not generalists. Every offering is backed by knowledge and delivered with warmth.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Quote */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
              Our Mission
            </p>
            <blockquote className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-primary-foreground leading-snug mb-8">
              "Where the nervous system finds rest, the body finds ease, and community finds root."
            </blockquote>
            <p className="font-body text-base text-primary-foreground/70 leading-relaxed max-w-md">
              Lizard Yoga is more than a studio. We offer every body the tools to regulate, restore, and reconnect — through movement, sound, heat, cold, and breath.
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-10">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="border-t border-primary-foreground/20 pt-6">
                <div className="flex items-start gap-4">
                  <span className="font-display text-sm font-bold text-accent tracking-wider">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
