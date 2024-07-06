import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  number: z.string().regex(/^\d{10}$/, "Invalid phone number format"),
  message: z.string().min(1, "Message is required"),
});
