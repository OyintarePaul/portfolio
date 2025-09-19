"use client";

import { motion } from "motion/react";

export default function Section({
  heading,
  subheading,
  secondary,
  children,
}: Partial<{
  heading: string;
  subheading: string;
  secondary: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="py-16 md:py-32 container mx-auto px-4">
      <div className="text-center">
        <motion.p
          initial={{
            x: 90
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.5
          }}
          className="text-primary font-bold uppercase"
        >
          {subheading}
        </motion.p>
        <motion.h2
          initial={{
            x: -90,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.5
          }}
          className="my-4 text-pretty text-4xl font-bold lg:text-6xl"
        >
          {heading}
        </motion.h2>
        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl mx-auto">
          {secondary}
        </p>
      </div>
      {children}
    </section>
  );
}
