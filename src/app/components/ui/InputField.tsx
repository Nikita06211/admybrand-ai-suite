import React from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  options?: string[]; // for select dropdown if needed
}

export default function InputField({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  multiline = false,
  iconLeft,
  iconRight,
  options,
}: InputFieldProps) {
  const inputStyles = `w-full rounded-lg bg-[#171a23] px-4 py-2 focus:outline-none text-white ${
    error ? "border border-red-500" : ""
  }`;

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="block text-gray-400 text-sm mb-1 font-semibold">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {iconLeft && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{iconLeft}</span>}
        {multiline ? (
          <textarea
            id={name}
            name={name}
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${inputStyles} ${iconLeft ? "pl-10" : ""} ${iconRight ? "pr-10" : ""} resize-none`}
          />
        ) : options ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`${inputStyles} ${iconLeft ? "pl-10" : ""} ${iconRight ? "pr-10" : ""}`}
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${inputStyles} ${iconLeft ? "pl-10" : ""} ${iconRight ? "pr-10" : ""}`}
          />
        )}
        {iconRight && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{iconRight}</span>}
      </div>
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
