import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Trees,
  Building,
  Wrench,
  TrendingUp,
} from "lucide-react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const services = [
  { Icon: Building2, title: "Real Estate Development", body: "Land acquisition, residential estates, and property sales across Nigeria." },
  { Icon: Hammer, title: "Construction & Building", body: "Residential and commercial builds — foundation to finish, no shortcuts." },
  { Icon: Trees, title: "Community Development", body: "Designing livable, connected Nigerian neighbourhoods that endure." },
  { Icon: Building, title: "Commercial Projects", body: "Office buildings, commercial complexes, and mixed-use developments." },
  { Icon: Wrench, title: "Renovation & Finishing", body: "Premium interiors, renovation, and fit-out services for any scale." },
  { Icon: TrendingUp, title: "Property Investment Consulting", body: "Guiding buyers and investors toward smart, long-term decisions." },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-brand-blue mb-4">
            Capabilities
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-brand-black uppercase">
            What We Do
          </h2>
          <div className="mt-6 h-1 w-24 bg-brand-blue" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="group relative bg-white border-l-4 border-brand-blue p-8 md:p-10 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.15)] hover:bg-brand-blue transition-colors duration-300"
            >
              <Icon className="h-10 w-10 text-brand-blue group-hover:text-white transition-colors" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl uppercase tracking-wide text-brand-black group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground group-hover:text-white/90 transition-colors leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
