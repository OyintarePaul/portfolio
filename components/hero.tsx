import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import { socialLinks } from "@/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold sm:text-6xl">
              Hello, I'm Paul, <br /> a fullstack web <br />
              and mobile dev.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              I build fullstack, scalabale, performant and responsive websites
              and mobile applications that grow businesses. My core technologies
              include Node.js React, Next.js, Tailwind CSS, React Native,
              MongoDB, etc.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Hire me</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/portrait.jpg"
              alt="An picture of me"
              width={400}
              height={400}
              className="rounded-full w-2/3 max-w-3xl aspect-square object-cover"
            />
          </div>
        </div>
        <div className="pt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center item-center">
          {socialLinks.map(({ title, Icon, description, href }) => (
            <Link href={href} key={title} target="_blank">
              <Card key={title} className="bg-transparent">
                <CardContent>
                  <div className="flex gap-3 items-center">
                    <Icon size={40} />
                    <span className="flex flex-col">
                      <span className="font-bold text-primary">{title}</span>
                      <span>{description}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
