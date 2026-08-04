import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/velqorfi/SiteHeader";
import { SiteFooter } from "@/components/velqorfi/SiteFooter";
import { BuyWidget } from "@/components/velqorfi/BuyWidget";
import {
  ContactCta,
  Coverage,
  Projects,
  Testimonials,
  TrustBar,
} from "@/components/velqorfi/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velqorfi — Buy Crypto with Fiat in Minutes" },
      {
        name: "description",
        content:
          "Velqorfi bridges fiat and crypto: buy and sell digital assets with 42+ currencies, cards, and local payment channels across 145+ countries.",
      },
      { property: "og:title", content: "Velqorfi — Buy Crypto with Fiat in Minutes" },
      {
        property: "og:description",
        content:
          "Global fiat-to-crypto on and off ramps for consumers, merchants, and Web3 projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-gradient px-5 pb-14 pt-24">
        <SiteHeader />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[32px] font-bold leading-[1.17] text-brand-foreground animate-rise md:text-5xl">
            Bridging the <span className="text-brand-cyan">fiat</span> and{" "}
            <span className="text-brand-cyan">crypto</span> global economies
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-[1.7] text-brand-foreground/85 animate-rise">
            Crucial payment support for Web3 is here. Enable your users to buy and
            sell digital assets with fiat currencies on your platform. Empower
            your project for global adoption.
          </p>
          <button className="mt-7 h-12 rounded-full border border-brand-foreground/70 px-8 text-[14px] text-brand-foreground transition-colors hover:bg-brand-foreground/10">
            Contact us
          </button>
        </div>
        <div className="mt-10">
          <BuyWidget />
        </div>
      </section>

      <TrustBar />
      <Coverage />
      <Projects />
      <Testimonials />
      <ContactCta />
      <SiteFooter />
    </main>
  );
}
