import { ArrowRight, Star } from "lucide-react";

import heroFood from "@/assets/hero-food.jpg";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroFood}
        alt="Gourmet burger, wood-fired pizza and creamy pasta on a dark table"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        width={1536}
        height={1024}
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-fade-bottom" />

      <div className="container-page pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-up">Modern kitchen · Lahore</p>
          <h1 className="mt-5 animate-fade-up text-5xl font-semibold leading-[1.02] [animation-delay:120ms] sm:text-6xl lg:text-8xl">
            {restaurant.name}
          </h1>
          <p className="mt-6 max-w-lg animate-fade-up text-lg text-foreground/80 [animation-delay:240ms] sm:text-xl">
            {restaurant.tagline}
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms]">
            <Button asChild variant="hero" size="xl">
              <a href="#menu">
                Explore Menu <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#reservations">Book a Table</a>
            </Button>
          </div>

          <div className="mt-14 flex animate-fade-up items-center gap-3 text-sm text-foreground/70 [animation-delay:480ms]">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span>4.8 from 1,200+ happy diners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
