"use client";
import { useActionState } from "react";
import { sendEmail } from "@/actions/email";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Check, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendEmail, {
    status: "idle",
    message: "",
  });
  return (
    <form className="flex flex-3 flex-col gap-6" action={action}>
      <div className="flex flex-col md:flex-row md:gap-4 gap-6">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="firstname">First Name</Label>
          <Input
            type="text"
            id="firstname"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            type="text"
            id="lastname"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="userEmail" placeholder="Email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" name="subject" placeholder="Subject" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          placeholder="Type your message here."
          name="message"
          id="message"
        />
      </div>
      <Button className="w-full" disabled={pending}>
        {pending ? (
          <Loader2 className="animate-spin" />
        ) : state.status == "idle" ? (
          "Send Message"
        ) : (
          <Check />
        )}
      </Button>
    </form>
  );
}
