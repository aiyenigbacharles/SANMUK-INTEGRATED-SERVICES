import { motion } from "framer-motion";
import { useRef } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const projects = [
  {
    name: "Sanmuk Residential Estate",
    location: "Community Living, Nigeria",
    gradient: "from-brand-blue/40 via-brand-black to-brand-black",
  },
  {
    name: "Sanmuk Commercial Build",
    location: "Modern Infrastructure, Nigeria",
    gradient: "from-brand-blue-light/40 via-brand-grey to-brand-black",
  },
  {
    name: "Sanmuk Homes Phase II",
    location: "Affordable Excellence, Nigeria",
    gradient: "from-brand-blue/30 via-brand-grey to-brand-black",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="bg-[#F4F4F4] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-blue mb-4">
              Portfolio
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-brand-black uppercase">
              Our Projects
            </h2>
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            drag to explore →
          </div>
        </motion.div>
      </div>

      <motion.div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          dragElastic={0.1}
          className="flex gap-4 sm:gap-6 px-4 sm:px-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] bg-white border-b-2 border-brand-blue"
            >
              <div className={`aspect-video bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 blueprint-grid opacity-50" />
                <div className="absolute bottom-4 left-4 text-white/40 text-xs uppercase tracking-widest">
                  0{i + 1}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl uppercase text-brand-black">{p.name}</h3>
                <div className="mt-2 text-xs sm:text-sm text-brand-blue uppercase tracking-widest">
                  {p.location}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="shrink-0 w-4 sm:w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
