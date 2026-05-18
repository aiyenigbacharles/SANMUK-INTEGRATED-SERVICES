import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/sanmuk-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-black text-white border-t border-brand-blue/40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Sanmuk Integrated Services Ltd" className="h-14 w-auto bg-white p-2" />
          <p className="mt-6 text-white/60 text-sm">
            Building Communities. Shaping Futures.
          </p>
        </div>

        <div className="md:flex md:justify-center">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-brand-blue-light transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:flex md:justify-end">
          <div className="flex gap-4 h-fit">
            <a
              href="https://instagram.com/sanmuk_homes_services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="border border-white/20 hover:border-brand-blue hover:bg-brand-blue p-3 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/2349078254973"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="border border-white/20 hover:border-brand-blue hover:bg-brand-blue p-3 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs uppercase tracking-widest text-white/50">
          © 2025 Sanmuk Integrated Services Ltd · RC 6953913 · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
