import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { contactInfo, openingHours } from "@/data/restaurant";

const contactCards = [
  { icon: MapPin, label: "Address", value: contactInfo.address },
  { icon: Phone, label: "Phone", value: contactInfo.phone },
  { icon: Mail, label: "Email", value: contactInfo.email },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find your way to Urban Bites"
          description="Drop by for lunch, dinner or a late-night bite. Walk-ins are always welcome."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {contactCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 text-base font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-cream p-8 text-cream-foreground">
            <div className="flex items-center gap-3">
              <Clock className="size-6 text-primary" />
              <h3 className="text-2xl font-semibold">Opening Hours</h3>
            </div>
            <ul className="mt-6 divide-y divide-cream-border">
              {openingHours.map((row) => (
                <li key={row.days} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
                  <span className="font-semibold">{row.days}</span>
                  <span className="text-cream-muted">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-cream-muted">Kitchen closes 30 minutes before closing time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
