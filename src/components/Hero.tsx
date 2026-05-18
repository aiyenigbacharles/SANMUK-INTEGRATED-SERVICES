import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: EASE });
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v).toString() + suffix;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, suffix, mv]);

  return <span ref={ref}>0{suffix}</span>;
}

const headline = "WE BUILD MORE THAN STRUCTURES.".split(" ");

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full bg-brand-black text-white flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/80" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-block border border-brand-blue text-brand-blue-light px-4 py-1.5 text-xs uppercase tracking-[0.2em] mb-10 max-w-full"
        >
          RC 6953913 · Registered & Trusted
        </motion.div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[96px] leading-[0.95] uppercase tracking-tight break-words">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-2 sm:mr-3 last:mr-0">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 + i * 0.08 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="mt-8 text-base md:text-xl text-white/70 tracking-wide px-2"
        >
          Real Estate · Construction · Community Development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center px-2"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-blue-light transition-colors text-center"
          >
            Explore Our Work
          </a>
          <a
            href="https://wa.me/2349078254973"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors text-center"
          >
            Talk to Us on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-2"
        >
          {[
            { num: 100, suffix: "+", label: "Families Housed" },
            { num: 50, suffix: "+", label: "Quality Builds Delivered" },
            { num: 12, suffix: "", label: "Communities Transformed" },
          ].map((s) => (
            <div key={s.label} className="border-t border-brand-blue/40 pt-5">
              <div className="font-display text-5xl md:text-6xl text-brand-blue-light">
                <Counter to={s.num} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
