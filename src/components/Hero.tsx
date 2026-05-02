import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-video-poster.jpg";
import wordmarkWhite from "@/assets/logo_full_white_short.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end bg-primary">
      {/* Background video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPoster})` }}
      >
        <video
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20 pt-32">
        <p className="font-body font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 mb-4 text-base">
          YOGA STUDIO & HOLISTIC SPA
        </p>
        <h1 className="mb-6">
          <span className="sr-only">Lizard Yoga</span>
          <img
            src={wordmarkWhite}
            alt=""
            aria-hidden="true"
            className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto"
          />
        </h1>
        <p className="font-editorial text-xl sm:text-2xl md:text-3xl font-light text-primary-foreground/90 max-w-xl">
          your oasis in the middle of the city
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#offerings"
            className="font-body text-sm font-semibold uppercase tracking-widest bg-accent text-accent-foreground px-8 py-4 hover:brightness-110 transition-all text-center"
          >
            Explore Offerings
          </a>
          <a
            href="#pricing"
            className="font-body text-sm font-semibold uppercase tracking-widest border border-primary-foreground/40 text-primary-foreground px-8 py-4 hover:bg-primary-foreground/10 transition-all text-center"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
