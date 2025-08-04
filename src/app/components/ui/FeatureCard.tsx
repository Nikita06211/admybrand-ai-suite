import { motion, MotionProps } from "framer-motion";
import React from "react";

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface FeatureCardProps extends MotionProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index, ...motionProps }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#14171b] border-gray-800 border border-opacity-10 rounded-xl p-6 glass-effect hover:scale-105 transition cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
      {...motionProps}
    >
      <img src={feature.icon} alt={`${feature.title} icon`} className="h-8 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-left">{feature.title}</h3>
      <p className="text-sm text-gray-400 text-left">{feature.desc}</p>
    </motion.div>
  );
}
