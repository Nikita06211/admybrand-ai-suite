import React from "react";

interface Testimonial {
  name: string;
  title: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[#181c24]/95 border border-white/10 rounded-xl p-8 shadow-lg transition hover:shadow-[0_6px_32px_8px_rgba(155,84,231,0.18)] glass-effect">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full border-2 border-blue-500 object-cover"
        />
        <div>
          <div className="font-bold text-white">{testimonial.name}</div>
          <div className="text-sm text-gray-400">
            {testimonial.title}
            {testimonial.company && (
              <span className="text-blue-400">&nbsp;&bull; {testimonial.company}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex mb-2">
        {Array(testimonial.rating).fill(null).map((_, i) => (
          <span key={i} className="text-yellow-400 mr-1">★</span>
        ))}
      </div>
      <blockquote className="text-gray-300 text-base italic">
        “{testimonial.content}”
      </blockquote>
    </div>
  );
}
