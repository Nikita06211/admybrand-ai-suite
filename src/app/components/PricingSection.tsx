"use client";
import { useState, useEffect } from "react";
import { plans as allPlans } from "./data/plans"; // Your data file

export default function PricingSection() {
  const [teamSize, setTeamSize] = useState(12);
  const [monthlyContent, setMonthlyContent] = useState(16000);

  // Determine recommended plan index
  const planIdx = (() => {
    if (teamSize <= 10 && monthlyContent <= 25000) return 0;
    if (teamSize <= 50 && monthlyContent <= 100000) return 1;
    return 2;
  })();

  return (
    <section className="py-24 bg-[#0c0e13]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-4">
          Choose Your Growth Plan
        </h2>
        <p className="mb-5 text-lg text-gray-400">
          Customize your plan based on your team size and content needs. Get instant pricing estimates.
        </p>
        {/* --- Calculator Sliders --- */}
        <div className="mb-12 bg-[#18182e] p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center justify-center max-w-3xl mx-auto">
          <div className="flex-1 w-full">
            <label className="text-left block font-semibold text-white mb-1">
              <span className="text-purple-400">Team Size: {teamSize} members</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={teamSize}
              onChange={e => setTeamSize(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2"><span>1</span><span>100+</span></div>
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
              onChange={e => setMonthlyContent(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2"><span>5K</span><span>200K+</span></div>
          </div>
        </div>
        {/* --- Plan Cards --- */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {allPlans.map((plan, idx) => {
            // Determine exceeded
            const exceeded = teamSize > plan.maxUsers || monthlyContent > plan.maxWords;
            const isRecommended = planIdx === idx;
            return (
              <div
                key={plan.title}
                className={`relative flex flex-col bg-[#20232A]/70 rounded-2xl p-12 glass-effect shadow-2xl transition
                  ${isRecommended ? "border-2 border-blue-500 shadow-blue-500/30 scale-105 z-10" : "border border-white/10 opacity-80"}
                  hover:shadow-[0_6px_48px_12px_rgba(95,163,255,0.18)]
                  backdrop-blur-lg
                `}
                style={{
                  backgroundColor: "rgba(32,35,42,0.68)",
                  border: isRecommended
                    ? "2px solid rgba(59,130,246,0.30)"
                    : "1px solid rgba(255,255,255,0.075)",
                  backdropFilter: "blur(7px) saturate(120%)",
                  WebkitBackdropFilter: "blur(7px) saturate(120%)",
                }}
              >
                {/* Recommended Label */}
                {isRecommended && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-xs px-4 py-1 rounded-full text-white font-bold shadow-md z-20">
                    <span role="img" aria-label="recommended">⚡</span> Recommended
                  </span>
                )}
                <div className="text-lg font-semibold text-[#a3a9c5] mb-2 uppercase tracking-wide text-center">{plan.title}</div>
                <div className="text-5xl font-bold mb-8 mt-3 text-white text-center">
                  ${plan.price}
                  <span className="text-base font-normal text-blue-300">/month</span>
                </div>
                {exceeded &&
                 <div className="text-sm text-orange-400 text-center mb-4">Exceeds plan limits</div>
                }
                <ul className="mb-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex mb-2 items-center text-sm text-left text-gray-300">
                      <span className="mr-2 flex-shrink-0 text-green-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-400 mt-auto mb-6 text-center">
                  Max users: {plan.maxUsers}<br/>
                  Max words: {plan.maxWords.toLocaleString()}/month
                </div>
                <button
                  disabled={exceeded}
                  className={`w-full py-3 rounded-xl font-bold shadow-lg transition
                    ${isRecommended 
                      ? "bg-gradient-to-r from-[#79aaff] to-[#2a6ff2] text-white hover:from-[#92cfff] hover:to-[#4d8dfe]"
                      : "border border-purple-600 text-purple-300 bg-transparent hover:bg-purple-800/20"
                    }
                    ${exceeded
                      ? "opacity-50 cursor-not-allowed bg-gray-700 text-gray-400 border-none"
                      : "hover:scale-105"}
                  `}
                >
                  {exceeded ? "Plan Exceeded" : "Get Started"}
                </button>
              </div>
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
