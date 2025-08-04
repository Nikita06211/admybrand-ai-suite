"use client";
import { features } from "./data/features";
import ButtonTag from "./ui/ButtonTag";
import Image from "next/image";
import FeatureCard from "./ui/FeatureCard";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#0c0e13]">
      <div className="container mx-auto px-4 text-center">
        <ButtonTag
          content="AI-Powered Marketing Suite"
          logo={
            <Image
              src="/icons/thunder.png"
              alt="AI Technology"
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
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-4">
          Everything You Need to Scale
        </h2>
        <p className="text-gray-400 text-lg">
          Our comprehensive AI suite provides all the tools you need to transform
        </p>
        <p className="mb-8 text-gray-400 text-lg">
          your marketing from ordinary to extraordinary.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
