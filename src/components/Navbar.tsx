import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Schedule", href: "#schedule" },
  { label: "Offerings", href: "#offerings" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-display text-2xl font-bold tracking-wider text-primary">
          lizard <span className="font-editorial text-2xl font-light">yoga</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="hidden md:inline-block font-body text-sm font-semibold uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2.5 hover:bg-secondary transition-colors"
        >
          Book a Class
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block font-body text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block text-center font-body text-sm font-semibold uppercase tracking-widest bg-primary text-primary-foreground px-5 py-3"
          >
            Book a Class
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
