import Link from "next/link";
import { Button } from "./ui/button";
import {socialLinks} from "@/constants"


export default function Footer() {
  return (
    <section className="py-32 px-4 bg-primary/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <p>Copyright ©2025 Egrenbido Oyintare</p>
          <ul className="flex gap-4 items-center">
            <p className="text-muted-foreground">Stay Connected</p>
            {socialLinks.map(({ Icon, href }, index) => (
              <li key={index}>
                <Button asChild size="icon" className="rounded-full">
                  <Link href={href} target="_blank">
                    <Icon className="size-5" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
