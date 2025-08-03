// src/components/FeaturesSection.tsx
import {features} from "./data/features"

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-tl from-gray-900 via-slate-950 to-blue-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Everything You Need to Scale</h2>
        <p className="mb-8 text-gray-300 text-lg">
          Our comprehensive AI suite provides all the tools you need to transform marketing from ordinary to extraordinary.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-800 bg-opacity-70 rounded-xl p-6 glass-effect hover:scale-105 transition">
              <img src={feature.icon} className="h-12 mx-auto mb-4" alt={feature.title + ' icon'} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
