// src/components/PricingSection.tsx

import Button from "./Button";
import {plans} from "./data/plans"

export default function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-purple-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Choose Your Growth Plan</h2>
        <p className="mb-8 text-lg text-gray-300">
          Start free and scale as you grow. All plans include our core AI features with <b>no hidden fees</b>.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {plans.map((plan) => (
            <div key={plan.title} className={`bg-black bg-opacity-60 rounded-2xl p-8 flex-1 glass-effect shadow-xl ${plan.highlight ? 'border-4 border-blue-400 scale-105' : ''}`}>
              <div className="text-2xl font-bold mb-2">{plan.title}</div>
              <div className="text-5xl font-extrabold mb-8">${plan.price}<span className="text-lg font-normal">/month</span></div>
              <ul className="mb-8">
                {plan.features.map((f, idx) => (
                  <li key={f} className="text-left flex items-center mb-2 last:mb-0">
                    <span className="mr-2 text-green-400 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="primary">Start Free Trial</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
