"use server";

import { Resend } from "resend";
import { Contact } from "@/emails/contact";

interface SendEmailResponse {
  status: "idle" | "success" | "error";
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormPayload {
  firstName: string;
  lastName: string;
  message: string;
  userEmail: string;
  subject: string;
}

export async function sendEmail(
  _: {},
  formData: FormData
): Promise<SendEmailResponse> {
  const rawData = Object.fromEntries(formData) as unknown as ContactFormPayload;
  const { firstName, lastName, message, userEmail, subject } = rawData;
  try {
    const { data, error } = await resend.emails.send({
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

    console.log(data);

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
