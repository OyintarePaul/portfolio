"use server";

import { z } from "zod";
import { Resend } from "resend";
import { Contact } from "@/emails/contact";
import { contactFormSchema } from "@/lib/zodSchemas";


type ContactFormPayload = z.infer<typeof contactFormSchema>;

interface SendEmailResponse {
  status: "success" | "error";
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  values: ContactFormPayload
): Promise<SendEmailResponse> {
  
  const { success } = contactFormSchema.safeParse(values);

  if (!success) {
    return {
      status: "error",
      message: "There was an error sending your email",
    };
  }

  const { firstName, lastName, message, userEmail, subject } = values;

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["devpaul3000@gmail.com"],
      subject,
      react: Contact({ firstName, lastName, message, userEmail }),
    });

    if (error) {
      console.log(error);
      return {
        status: "error",
        message: "Your message was not successful",
      };
    }

    return {
      status: "success",
      message: "You message has been sent successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Your message was not successful",
    };
  }
}
