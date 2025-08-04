"use client";
import { useState } from "react";
import { contactSchema, ContactFormFields } from "@/utils/contactSchema";

const initialFields: ContactFormFields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [fields, setFields] = useState<ContactFormFields>(initialFields);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormFields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(fields);
    if (!result.success) {
      const fieldErrs: typeof errors = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormFields;
        fieldErrs[field] = err.message;
      });
      setErrors(fieldErrs);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFields(initialFields);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-[#0c0e13]">
      <div className="container mx-auto px-4">
        <h2 className="bg-gradient-to-r from-[#7ce3ff] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-3 text-center">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-xl mx-auto">
          Ready to transform your marketing with AI? Let&apos;s discuss how ADmyBRAND AI Suite can help your business grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT COLUMN: INFO BOXES STACKED */}
          <div className="flex flex-col gap-8 md:col-span-1">
            <div className="rounded-xl bg-[#14171b]/90 p-8 text-white shadow-lg h-fit">
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <span className="bg-purple-900/30 rounded-full p-2">
                    {/* Mail Icon */}
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 2H8C6.346 2 5 3.346 5 5v14c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zm0 2a1 1 0 011 1v.207l-5 3.03-5-3.03V5a1 1 0 011-1h8zm1 16c0 .551-.449 1-1 1H8c-.551 0-1-.449-1-1V7.373l5 3.031 5-3.031V18z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-400">Email</span>
                    hello@admybrand.ai
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-purple-900/30 rounded-full p-2">
                    {/* Phone Icon */}
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A5.75 5.75 0 018.75 0h6.5A5.75 5.75 0 0121 5.75v12.5A5.75 5.75 0 0115.25 24h-6.5A5.75 5.75 0 013 18.25V5.75zm6.657 2.486a.75.75 0 00-1.06 1.06l3.535 3.535a.75.75 0 001.06 0l3.535-3.535a.75.75 0 00-1.06-1.06l-2.655 2.655V6a.75.75 0 10-1.5 0v4.891l-2.655-2.655z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-400">Phone</span>
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-purple-900/30 rounded-full p-2">
                    {/* Marker Icon */}
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-400">Office</span>
                    San Francisco, CA
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-[#14171b]/90 p-8 text-white shadow-lg h-fit">
              <h3 className="font-bold text-lg mb-2">Why Choose ADmyBRAND?</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                <li>24/7 AI-powered content creation</li>
                <li>500% increase in engagement rates</li>
                <li>Trusted by 10,000+ businesses</li>
                <li>Enterprise-grade security</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM (SPANS TWO ON MD+) */}
          <form
            className="rounded-xl border-1 border-gray-700 bg-[#14171b]/90 p-8 shadow-lg text-white space-y-6 md:col-span-2"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Full Name</label>
                <input
                  placeholder="Full Name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white ${
                    errors.name && "border border-red-500"
                  }`}
                  autoComplete="name"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email Address</label>
                <input
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white ${
                    errors.email && "border border-red-500"
                  }`}
                  autoComplete="email"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Company</label>
                <input
                  placeholder="Company name"
                  name="company"
                  value={fields.company}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Phone (Optional)</label>
                <input
                  placeholder="+1 (555) 123-4567"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Subject</label>
              <select
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                className={`w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white ${
                  errors.subject && "border border-red-500"
                }`}
              >
                <option value="">Select a subject</option>
                <option value="demo">Schedule a Demo</option>
                <option value="pricing">Pricing Inquiry</option>
                <option value="support">Product Support</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Message</label>
              <textarea
                placeholder="Tell us about your marketing goals and how we can help..."
                name="message"
                rows={4}
                value={fields.message}
                onChange={handleChange}
                className={`w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white ${
                  errors.message && "border border-red-500"
                }`}
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>
            <button
              disabled={submitted}
              className="rounded-lg w-full py-3 font-bold bg-gradient-to-r from-[#7ce3ff] to-[#729cff] text-white shadow-lg mt-2 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 12l18-6-6 18-2-8-8-2z" /></svg>
              {submitted ? "Sending..." : "Send Message"}
            </button>
            {submitted && (
              <div className="text-green-400 text-center mt-3 font-medium">
                Message sent! We&apos;ll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
