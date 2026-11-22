import { useState } from "react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { formatPrice, menuCategories, menuItems, type MenuCategory } from "@/data/restaurant";
import { cn } from "@/lib/utils";

type Filter = "All" | MenuCategory;
const filters: Filter[] = ["All", ...menuCategories];

export function MenuSection() {
  const [active, setActive] = useState<Filter>("All");
  const items = active === "All" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="bg-cream py-24 text-cream-foreground sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Menu"
          title="Made fresh, served bold"
          description="Hand-pressed burgers, wood-fired pizza, slow-simmered sauces and drinks worth staying for."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Menu categories">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
                active === filter
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-cream-border bg-cream-card text-cream-foreground hover:border-primary hover:text-primary",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cream-border bg-cream-card shadow-card transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-background px-3 py-1 text-xs font-semibold text-primary">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.category}</p>
                <div className="mt-2 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-snug">{item.name}</h3>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-muted">{item.description}</p>
                <p className="mt-4 font-display text-xl font-semibold">{formatPrice(item.price)}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cream-muted">Prices include tax. Sample menu for demo purposes.</p>
      </div>
    </section>
  );
}
