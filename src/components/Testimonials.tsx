import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const items = [
  {
    quote: "Sanmuk delivered our family home on schedule and to a standard we didn't expect on this side of the city. The quality is undeniable.",
    name: "Adeola O.",
    role: "Homeowner, Lagos",
  },
  {
    quote: "From the first site visit to the final handover, every step felt deliberate. They build the way you wish everyone built.",
    name: "Chuka E.",
    role: "Commercial Client",
  },
  {
    quote: "Our entire estate was transformed. Sanmuk doesn't just put up buildings — they shape how a community lives.",
    name: "Mrs. Bello",
    role: "Estate Resident",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-brand-blue mb-4">
            Testimonials
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-brand-black uppercase">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
              className={`relative bg-[#F4F4F4] p-8 md:p-10 ${i === 1 ? "md:translate-y-6" : ""}`}
            >
              <div className="font-display text-7xl text-brand-blue leading-none absolute top-4 left-6 select-none">
                "
              </div>
              <p className="relative pt-8 text-muted-foreground leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-semibold text-brand-black">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-brand-blue mt-1">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
