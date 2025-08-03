"use client";
import { useState } from "react";
import { faqs } from "./data/faqs";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (idx: number) => setOpen(open === idx ? null : idx);

  return (
    <section className="py-24 bg-[#0c0e13]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-10 text-center">
          Everything You Need to Know
        </h2>
        <span className="mt-4 text-gray-400">
            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
        </span>
        <div className="mt-8 rounded-2xl shadow-xl bg-[#161924]/80 border border-white/10 glass-effect px-4 md:px-8 py-6">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="mb-2 last:mb-0 group">
              <button
                className={`w-full flex justify-between items-center transition px-6 py-5 rounded-xl text-left font-semibold text-lg
                  ${open === i
                    ? "bg-gradient-to-r from-[#322651]/30 to-[#1a1921]/10 text-[#9b54e7]"
                    : "text-white bg-transparent"
                  }
                  hover:shadow-[0_4px_24px_0px_rgba(155,84,231,0.08)] hover:bg-[#1c1626]/40 hover:text-[#9b54e7]
                  focus:outline-none`}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span>{faq.question}</span>
                <span className="ml-4 flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  <svg width="24" height="24" className="text-[#9b54e7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="pl-6 pr-4 text-gray-400 font-medium overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
