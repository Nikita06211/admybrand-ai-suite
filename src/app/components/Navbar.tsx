"use client";
import React from "react";

const SECTIONS = [
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "Reviews", id: "reviews" },
  { label: "FAQs", id: "faq" },
  { label: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e13]/80 backdrop-blur border-b border-[#151823] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-3 gap-2">
        {SECTIONS.map(section => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="px-4 py-2 rounded-full text-base font-semibold text-white hover:text-purple-300 transition-colors duration-200 tracking-wide focus:outline-none focus-visible:bg-[#22284a] focus-visible:ring-1 focus-visible:ring-purple-400"
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
