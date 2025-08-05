"use client";
import { faqs } from "./data/faqs";
import ButtonTag from "./ui/ButtonTag";
import Image from "next/image";
import FaqItem from "./ui/FaqItem";
import { motion } from "framer-motion";

export default function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="py-24 bg-[#0c0e13]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.14 }}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <ButtonTag
            content="AI-Powered Marketing Suite"
            logo={
              <Image
                src="/icons/faq.png"
                alt="FAQ Icon"
                width={20}
                height={20}
                className="object-contain"
                priority={false}
              />
            }
            borderColor="border-cyan-600/20"
            bgColor="bg-cyan-600/20"
            textColor="text-cyan-200"
          />
          <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-10 text-center">
            Everything You Need to Know
          </h2>
          <span className="mt-4 text-gray-400">
            {"Have questions? We've got answers. Can't find what you're looking for? Contact our support team."}
          </span>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 rounded-2xl shadow-xl bg-[#161924]/80 border border-white/10 glass-effect px-4 md:px-8 py-6"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.45 + i * 0.08 }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-400 mt-4 text-center"
        >
          Still have questions?
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-2"
        >
          <span className="text-purple-500 text-center hover:text-purple-300 hover:cursor-pointer">Contact Support</span>
          <span className="text-gray-400 mx-2 rounded-full text-2xl">.</span>
          <span className="text-purple-500 hover:text-purple-300 hover:cursor-pointer">View Documentation</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
