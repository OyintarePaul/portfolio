import Image from "next/image";
import Section from "./shared/section";

export default function About() {
  return (
    <div className="bg-primary/10" id="about">
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              src="/images/portrait-2.jpg"
              alt="Another picture of me"
              width={350}
              height={350}
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <p className="text-primary font-bold">MY INTRO</p>
            <h2 className="mt-4 mb-6 text-pretty text-4xl font-bold lg:text-6xl">
              About Me
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              I am a Senior Fullstack Developer specializing in building
              high-performance, SEO-friendly, accessible, and fully responsive
              web and mobile applications. With over four years of intensive
              experience as a Senior Next.js Developer at Philland Engineering
              Services, I consistently transform complex ideas into robust,
              user-centric digital products that drive tangible business
              results. My passion lies in engineering web solutions that are not
              just visually impressive, but also technically superior, scalable,
              and built for long-term success.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
