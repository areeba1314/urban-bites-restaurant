import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <a href="#home" className="font-display text-2xl font-semibold tracking-tight text-foreground">
      Urban<span className="text-primary">Bites</span>
      <span className="sr-only">{restaurant.name}</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="container-page flex h-18 items-center justify-between py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm" className="rounded-full px-5">
            <a href="#reservations">Book a Table</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-background">
            <SheetTitle className="font-display text-2xl">
              Urban<span className="text-primary">Bites</span>
            </SheetTitle>
            <ul className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <a
                      href={link.href}
                      className="block rounded-md px-3 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <SheetClose asChild>
              <Button asChild variant="hero" size="lg" className="mt-6 w-full rounded-full">
                <a href="#reservations">Book a Table</a>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
