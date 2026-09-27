import { MapPin, Mail, Globe, User, UserPlus} from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Destinations", "Itineraries"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact", "Privacy", "Terms"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-emerald-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                WanderWise
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Plan smarter trips, discover hidden gems, and travel with confidence. Your next adventure starts here.
            </p>
            <a
              href="mailto:hello@wanderwise.travel"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@wanderwise.travel
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WanderWise. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <User className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              < UserPlus className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
