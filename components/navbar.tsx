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
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { menuItems } from "@/constants";

const Navbar = () => {
  return (
    <section className="py-8 px-4 border-b sticky top-0 z-50 bg-background shadow">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">DEV PAUL</span>
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
                  <Link href="/" className="flex items-center gap-2">
                    DEV PAUL
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                {menuItems.map((item, index) => (
                  <SheetClose key={index} asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-medium p-6 w-full justify-start"
                      )}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-6 flex flex-col gap-4 w-min">
                  <Button variant="outline" asChild>
                    <SheetClose>
                      <Link href="#contact">Let's Chat</Link>
                    </SheetClose>
                  </Button>
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
