import React from "react";

interface Plan {
  title: string;
  price: number;
  features: string[];
  maxUsers: number;
  maxWords: number;
}

interface PlanCardProps {
  plan: Plan;
  isRecommended: boolean;
  exceeded: boolean;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export default function PlanCard({
  plan,
  isRecommended,
  exceeded,
  ctaLabel = "Get Started",
  onCtaClick,
}: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col bg-[#20232A]/70 rounded-2xl p-12 glass-effect shadow-2xl transition
        ${
          isRecommended
            ? "border-2 border-blue-500 shadow-blue-500/30 scale-105 z-10"
            : "border border-white/10 opacity-80"
        }
        hover:shadow-[0_6px_48px_12px_rgba(95,163,255,0.18)]
        backdrop-blur-lg`}
      style={{
        backgroundColor: "rgba(32,35,42,0.68)",
        border: isRecommended
          ? "2px solid rgba(59,130,246,0.30)"
          : "1px solid rgba(255,255,255,0.075)",
        backdropFilter: "blur(7px) saturate(120%)",
        WebkitBackdropFilter: "blur(7px) saturate(120%)",
      }}
    >
      {isRecommended && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-xs px-4 py-1 rounded-full text-white font-bold shadow-md z-20">
          <span role="img" aria-label="recommended">
            ⚡
          </span>{" "}
          Recommended
        </span>
      )}
      <div className="text-lg font-semibold text-[#a3a9c5] mb-2 uppercase tracking-wide text-center">{plan.title}</div>
      <div className="text-5xl font-bold mb-8 mt-3 text-white text-center">
        ${plan.price}
        <span className="text-base font-normal text-blue-300">/month</span>
      </div>
      {exceeded && (
        <div className="text-sm text-orange-400 text-center mb-4">Exceeds plan limits</div>
      )}
      <ul className="mb-7 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex mb-2 items-center text-sm text-left text-gray-300">
            <span className="mr-2 flex-shrink-0 text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-xs text-gray-400 mt-auto mb-6 text-center">
        Max users: {plan.maxUsers}
        <br />
        Max words: {plan.maxWords.toLocaleString()}/month
      </div>
      <button
        disabled={exceeded}
        onClick={onCtaClick}
        className={`w-full py-3 rounded-xl font-bold shadow-lg transition
          ${
            isRecommended
              ? "bg-gradient-to-r from-[#79aaff] to-[#2a6ff2] text-white hover:from-[#92cfff] hover:to-[#4d8dfe]"
              : "border border-purple-600 text-purple-300 bg-transparent hover:bg-purple-800/20"
          }
          ${exceeded ? "opacity-50 cursor-not-allowed bg-gray-700 text-gray-400 border-none" : "hover:scale-105"}
        `}
      >
        {exceeded ? "Plan Exceeded" : ctaLabel}
      </button>
    </div>
  );
}
