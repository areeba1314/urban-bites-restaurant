import { Facebook, Instagram, Music2 } from "lucide-react";

import { Logo } from "@/components/site/Navbar";
import { navLinks, restaurant, socialLinks } from "@/data/restaurant";

const socialIcons = { Instagram, Facebook, TikTok: Music2 } as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{restaurant.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="border-t border-border">
        <p className="container-page py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {restaurant.name}. All rights reserved. Contact details shown are for demo purposes.
        </p>
      </div>
    </footer>
  );
}
