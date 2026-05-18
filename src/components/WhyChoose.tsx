import { motion } from "framer-motion";
import { ShieldCheck, Workflow, Layers } from "lucide-react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const blocks = [
  {
    Icon: ShieldCheck,
    title: "Registered & Verified",
    body: "RC 6953913 — fully incorporated and operating under Nigerian law.",
  },
  {
    Icon: Workflow,
    title: "End-to-End Delivery",
    body: "From land acquisition to community handover, we handle the entire build cycle.",
  },
  {
    Icon: Layers,
    title: "Built to Last",
    body: "Every project engineered to outlive its builder — quality is non-negotiable.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-brand-black text-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-20 max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-brand-blue-light mb-4">
            Why Sanmuk
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase">
            Built on Trust. Delivered with Precision.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {blocks.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
              className={`p-8 md:p-10 ${i > 0 ? "md:border-l border-brand-blue/40" : ""}`}
            >
              <Icon className="h-12 w-12 text-brand-blue-light" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-3xl md:text-4xl uppercase">
                {title}
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
