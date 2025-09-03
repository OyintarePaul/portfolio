import Link from "next/link";
import { contactInfo } from "@/constants";
import Section from "./shared/section";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div id="contact">
      <Section
        heading="Have a Project?"
        subheading="CONTACT ME"
        secondary="Use the form below to send me an email. I usually respond within 60
          minutes."
      >
        <div className="flex max-w-7xl flex-col gap-10 lg:flex-row lg:gap-20 mt-4 lg:px-12">
          <ContactForm />

          <div className="flex-2">
            <ul className="flex flex-col gap-8">
              {contactInfo.map(({ label, value, href, Icon }, index) => (
                <div className="flex gap-4 items-center" key={index}>
                  <span className="size-16 flex shrink-0 items-center justify-center bg-primary rounded-full">
                    <Icon className="size-8 text-background" />
                  </span>

                  <div>
                    <p className="font-bold text-lg">{label}</p>
                    <Link
                      className="text-muted-foreground"
                      href={href}
                      target="_blank"
                    >
                      {value}
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
