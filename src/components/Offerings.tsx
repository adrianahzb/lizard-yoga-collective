import yogaImg from "@/assets/offerings-yoga.jpg";
import soundbathImg from "@/assets/offerings-soundbath.jpg";
import saunaImg from "@/assets/offerings-sauna.jpg";
import coldplungeImg from "@/assets/offerings-coldplunge.jpg";
import floatImg from "@/assets/offerings-float.jpg";
import massageImg from "@/assets/offerings-massage.jpg";

const offerings = [
  {
    title: "Yoga",
    subtitle: "movement for every body",
    description: "Vinyasa, yin, hip mobility, nervous system yoga — classes designed to meet you exactly where you are.",
    image: yogaImg,
  },
  {
    title: "Sound Bath",
    subtitle: "vibration as medicine",
    description: "Crystal bowls, gongs, and voice in our signature purple-lit sanctuary. Your nervous system will thank you.",
    image: soundbathImg,
  },
  {
    title: "Infrared Sauna",
    subtitle: "deep heat, deep rest",
    description: "Private infrared sessions that detoxify, reduce inflammation, and leave you feeling completely renewed.",
    image: saunaImg,
  },
  {
    title: "Cold Plunge",
    subtitle: "reset & regulate",
    description: "Science-backed cold exposure to sharpen focus, boost recovery, and build resilience — one breath at a time.",
    image: coldplungeImg,
  },
  {
    title: "Float",
    subtitle: "sensory stillness",
    description: "1,000 pounds of Epsom salt, zero gravity, total silence. The deepest rest you've never had.",
    image: floatImg,
  },
];

const Offerings = () => {
  return (
    <section id="offerings" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-[0.9]">
            multi-modality<br />
            <span className="font-editorial font-light lowercase">wellness</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, i) => (
            <div
              key={offering.title}
              className={`group relative overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={offering.image}
                  alt={offering.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-accent mb-2">
                  {offering.subtitle}
                </p>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                  {offering.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/80 max-w-md leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
