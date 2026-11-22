import { ChefHat, Flame, Leaf } from "lucide-react";

import interior from "@/assets/about-interior.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

const highlights = [
  { icon: Flame, title: "Wood-fired kitchen", text: "Our oven runs at 450°C for that perfect char." },
  { icon: Leaf, title: "Fresh, local produce", text: "Vegetables and herbs sourced daily from Punjab farms." },
  { icon: ChefHat, title: "Crafted by chefs", text: "Every sauce, dough and patty is made in-house." },
];

const stats = [
  { value: "2018", label: "Serving since" },
  { value: "40+", label: "Dishes on rotation" },
  { value: "4.8★", label: "Guest rating" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={interior}
              alt="Warm, modern dining room at Urban Bites with an open kitchen"
              loading="lazy"
              width={1536}
              height={1024}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-gradient-primary px-6 py-5 text-primary-foreground shadow-glow sm:-right-6">
            <p className="font-display text-4xl font-semibold">8 yrs</p>
            <p className="text-sm font-semibold">of good food & good company</p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A neighbourhood spot with big-city flavour"
          />
          <div className="mt-6 space-y-4 text-foreground/75">
            <p>
              Urban Bites started in 2018 as a small burger counter with one goal: honest food,
              cooked with care, served in a place you never want to leave.
            </p>
            <p>
              Today our open kitchen turns out wood-fired pizzas, fresh pasta and our famous
              smash burgers to families, friends and late-night food lovers. Low lights, warm
              service and a playlist that keeps the evening going — that's the Urban Bites way.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/60">
                <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-3 font-sans text-sm font-bold tracking-normal">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>

          <dl className="mt-10 flex flex-wrap gap-10 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
