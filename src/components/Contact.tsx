import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Instagram, Building2 } from "lucide-react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-brand-black text-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-brand-blue-light mb-6">
            Contact
          </div>
          <h2 className="font-display text-4xl md:text-7xl uppercase leading-[0.95]">
            Let's Build Something Great Together.
          </h2>

          <div className="mt-12 space-y-5">
            <a
              href="https://wa.me/2349078254973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-brand-blue-light" />
              <span className="text-sm sm:text-base">WhatsApp: +234 907 825 4973</span>
            </a>
            <a
              href="https://instagram.com/sanmuk_homes_services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5 shrink-0 text-brand-blue-light" />
              <span className="text-sm sm:text-base">@sanmuk_homes_services</span>
            </a>
            <div className="flex items-center gap-4 text-white/80">
              <Building2 className="h-5 w-5 shrink-0 text-brand-blue-light" />
              <span className="text-sm sm:text-base">RC Number: 6953913</span>
            </div>
          </div>

          <a
            href="https://wa.me/2349078254973"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-5 w-full"
        >
          {[
            { label: "Full Name", type: "text", name: "name", required: true },
            { label: "Phone or Email", type: "text", name: "contact", required: true },
          ].map((f) => (
            <div key={f.name} className="w-full">
              <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">
                {f.label}
              </label>
              <input
                type={f.type}
                name={f.name}
                required={f.required}
                maxLength={200}
                className="w-full box-border bg-brand-grey border border-transparent focus:border-brand-blue text-white px-4 py-3.5 outline-none transition-colors text-sm"
              />
            </div>
          ))}

          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">
              Service Interest
            </label>
            <select
              name="service"
              defaultValue=""
              className="w-full box-border bg-brand-grey border border-transparent focus:border-brand-blue text-white px-4 py-3.5 outline-none transition-colors text-sm appearance-none"
            >
              <option value="" disabled>Select an option</option>
              <option>Buy Property</option>
              <option>Build with Us</option>
              <option>Investment</option>
              <option>Other</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              className="w-full box-border bg-brand-grey border border-transparent focus:border-brand-blue text-white px-4 py-3.5 outline-none transition-colors resize-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full box-border bg-brand-blue text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-blue-light transition-colors"
          >
            {sent ? "Message Received — We'll Be In Touch" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
