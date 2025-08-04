"use client";
import { useState, useEffect, useRef } from "react";
import { testimonials } from "./data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import ButtonTag from "./ui/ButtonTag";
import Image from "next/image";
import TestimonialCard from "./ui/TestimonialCard";

const AUTO_PLAY_INTERVAL = 3000;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    timeoutRef.current = setTimeout(next, AUTO_PLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const goTo = (i: number) => setIndex(i);

  return (
    <section id="reviews" className="py-24 bg-[#0c0e13]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ButtonTag
          content="Customer Success Stories"
          logo={"☆"}
          borderColor="border-cyan-600/20"
          bgColor="bg-cyan-600/20"
          textColor="text-cyan-200"
        />
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-12 text-center">
          Loved by Marketing Teams
        </h2>
        <span className="text-center text-lg text-gray-400 mb-10 -mt-5">
          {"Join thousands of marketers who've transformed their campaigns with ADmyBRAND AI."}
        </span>

        <div className="relative w-full max-w-2xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.48, ease: "easeInOut" }}
              className="bg-[#14171b]/80 border border-white/10 rounded-2xl p-12 glass-effect text-center min-h-[340px] flex flex-col items-center justify-center shadow-[0_6px_42px_8px_rgba(155,84,231,0.27)]"
            >
              <div className="mb-4">
                <Image
                  src="/icons/quote.png"
                  width={64}
                  height={64}
                  alt="Quote icon"
                  className="mx-auto shadow-lg mb-3 object-contain"
                  priority
                />
                <blockquote className="text-xl font-semibold text-gray-200 italic">
                  {testimonials[index].content}
                </blockquote>
                <div className="flex mx-auto justify-center  mt-6 items-center">
                  <Image
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    width={64}
                    height={64}
                    className="rounded-full ml-2 border-2 border-blue-500 shadow-lg object-cover"
                    priority
                  />
                  <div className="mb-2 ml-4 text-left">
                    <div className="font-semibold text-white">{testimonials[index].name}</div>
                    <div className="font-medium text-gray-400">{testimonials[index].title}</div>
                    <div className="text-[#9b54e7] text-sm">{testimonials[index].company}</div>
                  </div>
                </div>
                <div className="flex justify-center text-yellow-400 font-bold text-2xl mb-3">
                  {"★".repeat(testimonials[index].rating).padEnd(5, "☆")}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial #${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-[#9b54e7] w-6" : "bg-gray-700"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((card) => (
              <TestimonialCard key={card.name} testimonial={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
