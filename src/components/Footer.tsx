import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import fullLogoWhite from "@/assets/logo_full_white_short.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-2">
              <img src={fullLogoWhite} alt="Lizard Yoga" className="h-14 w-auto" />
            </div>
            <p className="font-editorial text-lg text-primary-foreground/70">
              your oasis in the middle of the city
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@lizardyoga.com" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              Contact Info
            </p>
            <div className="space-y-3 text-primary-foreground/80 font-body text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Lizard Yoga<br />
                  2919 Menchaca Rd #104<br />
                  Austin, TX 78704
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:5124310616" className="hover:underline">512.431.0616</a>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:hello@lizardyoga.com" className="hover:underline">hello@lizardyoga.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              Hours
            </p>
            <dl className="font-body text-sm text-primary-foreground/80 space-y-1.5">
              {[
                ["Monday", "7:30 AM – 9 PM"],
                ["Tuesday", "7:30 AM – 9 PM"],
                ["Wednesday", "7:30 AM – 9 PM"],
                ["Thursday", "7:30 AM – 9 PM"],
                ["Friday", "7:30 AM – 9 PM"],
                ["Saturday", "9 AM – 9 PM"],
                ["Sunday", "9 AM – 9 PM"],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4">
                  <dt>{day}</dt>
                  <dd className="text-primary-foreground/70">{hours}</dd>
                </div>
              ))}
            </dl>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@lizardyoga.com" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2025 Lizard Yoga. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/50 tracking-wider">
            @lizardyoga · Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
