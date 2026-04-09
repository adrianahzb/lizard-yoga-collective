const items = [
  "Yoga", "Sound Bath", "Infrared Sauna", "Cold Plunge", "Float", "Breathwork", "Massage", "Yin", "Kirtan"
];

const Marquee = () => {
  const repeated = [...items, ...items];

  return (
    <div className="bg-primary overflow-hidden py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground mx-8 flex items-center gap-8">
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
