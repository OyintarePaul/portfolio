"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
  ];

  return (
    <section className="py-8 px-4 border-b">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              EGRENBIDO OYINTARE PAUL
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem asChild key={index}>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline" asChild>
              <Link href="#contact">Let's Chat</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Shadcnblocks.com
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                {menuItems.map((item, index) => (
                  <Link href={item.href} className="font-medium" key={index}>
                    {item.title}
                  </Link>
                ))}

                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Let's Chat</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
