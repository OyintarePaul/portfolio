"use client";

import { useTransition } from "react";
import { sendEmail } from "@/actions/email";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/zodSchemas";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { toast } from "sonner";

export default function ContactForm() {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      subject: "",
      userEmail: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof contactFormSchema>) => {
    startTransition(async () => {
      const response = await sendEmail(values);
      if (response.status == "success") {
        toast.success("Email sent successfully", {});
      } else {
        toast.error("There was an error sending your email.");
      }
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-3 flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col md:flex-row md:gap-4 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First name"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last name"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={form.control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button className="w-full" disabled={pending}>
          {pending ? <Loader2 className="animate-spin" /> : "Send message"}
        </Button>
      </form>
    </Form>
  );
}
