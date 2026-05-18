import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function About() {
  return (
    <section id="about" className="bg-[#1A1A1A] text-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-brand-blue-light mb-6">
              About Sanmuk
            </div>
            <p className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-blue leading-[1.05] uppercase">
              "Recognized for remarkable projects and a dedication to building lovely communities across Nigeria."
            </p>
            <div className="mt-10 text-sm uppercase tracking-[0.25em] text-white/40">
              RC 6953913
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="space-y-8 text-white/75 text-base md:text-lg leading-relaxed"
          >
            <p>
              <span className="text-white font-semibold">Who we are.</span> Sanmuk Integrated Services Ltd is an integrated real estate and construction company headquartered in Nigeria, dedicated to building infrastructure that defines neighbourhoods and outlasts generations.
            </p>
            <p>
              <span className="text-white font-semibold">What we do.</span> From land acquisition and architectural planning to construction, finishing and final handover — we deliver the entire build cycle under one roof, with one standard.
            </p>
            <p>
              <span className="text-white font-semibold">Our mission.</span> To build homes that become legacies and communities that become landmarks. Every foundation we pour is a promise to the families who will live above it.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mt-24 h-[2px] bg-brand-blue origin-left"
        />
      </div>
    </section>
  );
}
