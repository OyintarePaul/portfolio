import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is reqired"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  userEmail: z.email("Email is required"),
});
