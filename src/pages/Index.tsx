import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Offerings from "@/components/Offerings";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Offerings />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
