"use client";
import React, { useState } from "react";
import { plans as allPlans } from "./data/plans";
import PlanCard from "./ui/PlanCard";
import Image from "next/image";
import ButtonTag from "./ui/ButtonTag";

export default function PricingSection() {
  const [teamSize, setTeamSize] = useState(12);
  const [monthlyContent, setMonthlyContent] = useState(16000);

  const planIdx = (() => {
    if (teamSize <= 10 && monthlyContent <= 25000) return 0;
    if (teamSize <= 50 && monthlyContent <= 100000) return 1;
    return 2;
  })();

  return (
    <section id="pricing" className="py-24 bg-[#0c0e13]">
      <div className="container mx-auto px-4 text-center">
        <ButtonTag
          content="AI-Powered Marketing Suite"
          logo={
            <Image
              src="/icons/price-tag.png"
              alt="AI Technology"
              width={20}
              height={20}
              className="object-contain"
              priority={false}
            />
          }
          borderColor="border-purple-600/20"
          bgColor="bg-purple-400/20"
          textColor="text-purple-200"
        />
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-4">
          Choose Your Growth Plan
        </h2>
        <p className="text-lg text-gray-400">
          Customize your plan based on your team size and content needs.
        </p>
        <p className="mb-8 text-lg text-gray-400">Get instant pricing estimates.</p>
        <div className="mb-28 bg-[#18182e] p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center justify-center max-w-3xl mx-auto">
          <div className="flex-1 w-full">
            <label className="text-left block font-semibold text-white mb-1">
              <span className="text-purple-400">Team Size: {teamSize} members</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>1</span>
              <span>100+</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <label className="text-left block font-semibold text-white mb-1">
              <span className="text-purple-400">Monthly Content: {monthlyContent.toLocaleString()} words</span>
            </label>
            <input
              type="range"
              min={5000}
              max={200000}
              step={1000}
              value={monthlyContent}
              onChange={(e) => setMonthlyContent(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>5K</span>
              <span>200K+</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {allPlans.map((plan, idx) => {
            const exceeded = teamSize > plan.maxUsers || monthlyContent > plan.maxWords;
            const isRecommended = planIdx === idx;
            return (
              <PlanCard
                key={plan.title}
                plan={plan}
                isRecommended={isRecommended}
                exceeded={exceeded}
                ctaLabel="Get Started"
                onCtaClick={() => {
                  console.log(`Clicked plan ${plan.title}`);
                }}
              />
            );
          })}
        </div>
        <div className="text-center m-8 text-gray-400">
          All plans include a 14-day free trial. No credit card required.
        </div>
      </div>
    </section>
  );
}
