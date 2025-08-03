// src/components/FeaturesSection.tsx
"use client";
import {features} from "./data/features"
import {motion} from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-[#0c0e13] ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-4">Everything You Need to Scale</h2>
        <div className=" text-gray-400 text-lg">
          Our comprehensive AI suite provides all the tools you need to transform 
        </div>
        <div className="mb-8 text-gray-400 text-lg">
          your marketing from ordinary to extraordinary.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-[#14171b] border-gray-800 border-1 bg-opacity-70 rounded-xl p-6 glass-effect hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: i * 0.08, // stagger cards
                ease: [0.22, 1, 0.36, 1], // ease-out-cubic
              }}
              viewport={{ once: true, amount: 0.25 }} // triggers animation when 25% of card is in view, only once
            >
              <img
                src={feature.icon}
                className="h-8 mb-4"
                alt={feature.title + " icon"}
              />
              <h2 className="text-xl font-bold mb-2 text-left">{feature.title}</h2>
              <p className="text-sm text-gray-400 text-left">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
