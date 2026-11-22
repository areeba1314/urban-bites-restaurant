import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/MenuSection";
import { Navbar } from "@/components/site/Navbar";
import { ReservationSection } from "@/components/site/ReservationSection";

const title = "Urban Bites — Burgers, Pizza & Pasta Restaurant";
const description =
  "Explore the Urban Bites menu of gourmet burgers, wood-fired pizza, fresh pasta and drinks, and book your table online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
