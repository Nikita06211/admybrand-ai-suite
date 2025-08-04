import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

export default function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => setOpen((o) => !o);

  return (
    <div className="mb-2 last:mb-0 group">
      <button
        className={`w-full flex justify-between items-center transition px-6 py-5 rounded-xl text-left font-semibold text-lg
          ${open
            ? "bg-gradient-to-r from-[#322651]/30 to-[#1a1921]/10 text-[#9b54e7]"
            : "text-white bg-transparent"}
          hover:shadow-[0_4px_24px_0px_rgba(155,84,231,0.08)] hover:bg-[#1c1626]/40 hover:text-[#9b54e7]
          focus:outline-none`}
        onClick={toggle}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="ml-4 flex-shrink-0 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <svg width="24" height="24" className="text-[#9b54e7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pl-6 pr-4 text-gray-400 font-medium overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
