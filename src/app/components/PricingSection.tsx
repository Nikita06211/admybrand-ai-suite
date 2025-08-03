// src/components/PricingSection.tsx
"use client";

import Button from "./Button";
import { plans } from "./data/plans";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#0c0e13]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-4">
          Choose Your Growth Plan
        </h2>
        <p className="mb-20 text-lg text-gray-400">
          Start free and scale as you grow. All plans include our core AI features with <b>no hidden fees</b>.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className={`
                relative flex flex-col bg-[#20232A]/70
                rounded-2xl
                p-12
                glass-effect
                shadow-2xl
                transition
                ${plan.highlight ? 'border-2 border-blue-500 shadow-[...] z-10' : 'border border-white/10'}
                hover:shadow-[0_6px_48px_12px_rgba(95,163,255,0.18)]
                backdrop-blur-lg
                `}
              style={{
                backgroundColor: "rgba(32,35,42,0.68)",
                border: plan.highlight ? '2px solid rgba(59,130,246,0.30)' : '1px solid rgba(255,255,255,0.075)',
                backdropFilter: "blur(6px) saturate(120%)",
                WebkitBackdropFilter: "blur(6px) saturate(120%)"
              }}
              whileHover={{ scale: 1.065, boxShadow: "0 12px 48px 16px rgba(119,179,255,0.17)" }}
              transition={{ type: "spring", stiffness: 275, damping: 24, duration: 0.32 }}
            >
              <div className="text-lg font-semibold text-[#a3a9c5] mb-2 uppercase tracking-wide">{plan.title}</div>
              <div className="text-5xl font-bold mb-8 mt-3 text-white">${plan.price}<span className="text-base font-normal text-blue-300">/month</span></div>
              <ul className="mb-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex mb-4 items-center text-sm text-left text-gray-300">
                    <span className="mr-2 flex-shrink-0 text-blue-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-[#79aaff] to-[#2a6ff2] text-white py-3 rounded-xl font-bold shadow-lg hover:from-[#92cfff] hover:to-[#4d8dfe] transition">
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center m-8 text-gray-400"> All plans include a 14-day free trial. No credit card required.</div>
    </section>
  );
}
