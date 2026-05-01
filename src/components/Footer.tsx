import { Instagram, Mail, MapPin } from "lucide-react";
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
          </div>

          {/* Location */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              Visit Us
            </p>
            <div className="flex items-start gap-2 text-primary-foreground/80">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm leading-relaxed">
                Austin, TX<br />
                Open 7 days a week
              </p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Email">
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
