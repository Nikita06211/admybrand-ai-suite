"use client";
import { useState } from "react";
import { contactSchema, ContactFormFields } from "@/utils/contactSchema";
import ActionButtons from "./ui/ActionButtons";
import InputField from "./ui/InputField"; // Assuming you have created this reusable input component
import { FiUser, FiMail, FiBriefcase, FiPhone } from "react-icons/fi";

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
    <section id="contact" className="py-20 bg-[#0c0e13]">
      <div className="container mx-auto px-4">
        <h2 className="bg-gradient-to-r from-[#7ce3ff] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-3 text-center">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-xl mx-auto">
          {"Ready to transform your marketing with AI? Let's discuss how ADmyBRAND AI Suite can help your business grow."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left info column */}
          <div className="flex flex-col gap-8 md:col-span-1">
            <div className="rounded-xl bg-[#14171b]/90 p-8 text-white shadow-lg h-fit">
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <span className="bg-purple-900/30 rounded-full p-2">
                    <FiMail className="w-6 h-6 text-purple-400" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-400">Email</span>
                    hello@admybrand.ai
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-purple-900/30 rounded-full p-2">
                    <FiPhone className="w-6 h-6 text-purple-400" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-400">Phone</span>
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-purple-900/30 rounded-full p-2">
                    <FiBriefcase className="w-6 h-6 text-purple-400" />
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

          {/* Form column */}
          <form
            className="rounded-xl border border-gray-700 bg-[#14171b]/90 p-8 shadow-lg text-white space-y-6 md:col-span-2"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                name="name"
                placeholder="Full Name"
                value={fields.name}
                onChange={handleChange}
                error={errors.name}
                required
                iconLeft={<FiUser />}
              />
              <InputField
                label="Email Address"
                name="email"
                placeholder="example@gmail.com"
                value={fields.email}
                onChange={handleChange}
                error={errors.email}
                type="email"
                required
                iconLeft={<FiMail />}
              />
              <InputField
                label="Company"
                name="company"
                placeholder="Company name"
                value={fields.company || ""}
                onChange={handleChange}
                iconLeft={<FiBriefcase />}
              />
              <InputField
                label="Phone (Optional)"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={fields.phone || ""}
                onChange={handleChange}
                iconLeft={<FiPhone />}
              />
            </div>
            <InputField
              label="Subject"
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              error={errors.subject}
              required
              options={["Schedule a Demo", "Pricing Inquiry", "Product Support", "Other"]}
              placeholder="Select a subject"
            />
            <InputField
              label="Message"
              name="message"
              placeholder="Tell us about your marketing goals and how we can help..."
              value={fields.message}
              onChange={handleChange}
              error={errors.message}
              required
              multiline
            />
            <ActionButtons
              className="items-center justify-center w-full"
              mainLabel={submitted ? "Sending..." : "Send Message"}
              showArrow={true}
              disabled={submitted}
              onMainClick={() => { /* handle submit click */ }}
            />
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
