// src/utils/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty("Full name is required."),
  email: z.string().email("Valid email address required."),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().nonempty("Please select a subject."),
  message: z.string().nonempty("Please enter your message."),
});

export type ContactFormFields = z.infer<typeof contactSchema>;
