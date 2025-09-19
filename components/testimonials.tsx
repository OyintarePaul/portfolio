"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import Section from "./shared/section";
import { testimonials } from "@/constants";

export default function Testimonials() {
  return (
    <div className="bg-primary/10" id="testimonials">
      <Section
        heading="What client says about me?"
        subheading="TESTIMONIALS"
        secondary="I have been priveledged to work with a few clients and here's what
        thay have to say about me."
      >
        <motion.div
          initial={{
            x: 150,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map(({ name, message, image, role }, index) => (
            <Card className="bg-transparent" key={index}>
              <CardContent className="flex flex-col h-full gap-8 justify-between">
                <div className="flex gap-4">
                  <span>
                    <Quote className="rotate-180 hidden lg:block" size={40} />
                  </span>
                  <div>{message}</div>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={image}
                    width={48}
                    height={48}
                    alt=""
                    className="size-12 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-lg font-bold text-primary">{name}</p>
                    <p className="text-muted-foreground">{role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}
