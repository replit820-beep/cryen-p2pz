import { useState } from "react";

const STATS = [
  { value: "145+", label: "Supported countries", chips: ["ENG", "APAC", "LATAM"] },
  { value: "42+", label: "Fiat currencies", chips: ["$", "€", "£"] },
  { value: "255+", label: "Fiat payment channels", chips: ["VISA", "Pay", "MC"] },
  { value: "ALL", label: "Cryptocurrencies supported", chips: ["₿", "Ξ", "₮"] },
];

const PAYMENT_LOGOS: ReadonlyArray<readonly [string, string, string]> = [
  ["DANA", "bg-logo-blue", "rounded-full"], ["BDO", "bg-logo-red", "rounded-sm"],
  ["GCash", "bg-logo-blue", "rounded-full"], ["kakaopay", "bg-logo-yellow", "rounded-full"],
  ["SPEi", "bg-logo-red", "rotate-45 rounded-sm"], ["PIX", "bg-logo-teal", "rotate-45 rounded-sm"],
  ["UPI", "bg-logo-orange", "rounded-sm"], ["GrabPay", "bg-logo-green", "rounded-full"],
  ["OVO", "bg-logo-violet", "rounded-full"], ["Maya", "bg-logo-green", "rounded-sm"],
];

const PROJECTS: ReadonlyArray<readonly [string, string, string]> = [
  ["OKX", "bg-ink", "grid"], ["Bitget", "bg-logo-teal", "diamond"], ["NEAR", "bg-ink", "ring"],
  ["polygon", "bg-logo-violet", "hex"], ["ARBITRUM", "bg-logo-blue", "hex"], ["CHAINUP", "bg-logo-blue", "diamond"],
  ["Sui", "bg-logo-blue", "drop"], ["TOKEN POCKET", "bg-logo-blue", "rounded"], ["Bitget Wallet", "bg-logo-teal", "diamond"],
  ["bitrue", "bg-logo-blue", "ring"], ["CELO", "bg-logo-yellow", "circle"], ["Pionex", "bg-logo-teal", "grid"],
  ["DODO", "bg-logo-yellow", "circle"], ["BingX", "bg-logo-blue", "diamond"], ["LBANK", "bg-logo-blue", "ring"],
  ["METAONE", "bg-logo-violet", "hex"], ["CoinTR", "bg-logo-red", "circle"], ["SaaSGo", "bg-logo-blue", "rounded"],
  ["BEFI WALLET", "bg-logo-green", "diamond"], ["Bit.Store", "bg-logo-orange", "circle"], ["CoinW", "bg-logo-blue", "ring"],
];

function LogoMark({ color, shape }: { color: string; shape: string }) {
  const shapeClass = shape === "circle" || shape === "ring" ? "rounded-full" : shape === "hex" ? "logo-hex" : shape === "drop" ? "rounded-full rounded-bl-none" : shape === "diamond" ? "rotate-45 rounded-sm" : "rounded-sm";
  return <span className={`relative h-4 w-4 shrink-0 ${color} ${shapeClass} ${shape === "ring" ? "ring-2 ring-inset ring-white/70" : ""}`} />;
}

const TESTIMONIALS = [
  {
    name: "Sandeep Nailwal",
    role: "Co Founder Polygon",
    brand: "polygon",
    quote:
      "Thanks to Velqorfi, we can provide an essential gateway between fiat and crypto transactions. This development opens up new capital inroads that will propel users of polygon's DeFi ecosystem to the next level.",
  },
  {
    name: "Gracy Chen",
    role: "CEO Bitget",
    brand: "Bitget",
    quote:
      "Velqorfi's coverage of local payment channels lets our users onboard in minutes with the methods they already trust, in the currency they already hold.",
  },
  {
    name: "Illia Polosukhin",
    role: "Co Founder NEAR",
    brand: "NEAR",
    quote:
      "A frictionless fiat gateway is the missing layer for mainstream Web3 adoption, and Velqorfi delivers it at global scale.",
  },
];

export function TrustBar() {
  return (
    <section className="bg-surface-soft py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl bg-ink p-6">
          <div className="grid grid-cols-2 gap-y-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[26px] font-bold text-white">{s.value}</p>
                <p className="mx-auto mt-1 max-w-[130px] text-[13px] leading-tight text-white/60">
                  {s.label}
                </p>
                <div className="mt-2 flex justify-center">
                  {s.chips.map((c, i) => (
                    <span
                      key={c}
                      className="-ml-1.5 flex h-6 min-w-6 items-center justify-center rounded-full border border-ink bg-white px-1 text-[8px] font-bold text-ink"
                      style={{ zIndex: 10 - i }}
                    >
                      {c}
                    </span>
                  ))}
                  <span className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-white text-[10px] font-bold text-ink">
                    ···
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="payment-marquee flex w-max gap-3 px-5 hover:[animation-play-state:paused]">
          {[...PAYMENT_LOGOS, ...PAYMENT_LOGOS].map(([name, color, shape], index) => (
            <span key={`${name}-${index}`} className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-[13px] font-bold text-ink">
              <LogoMark color={color} shape={shape} />{name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section className="bg-surface-soft px-5 pb-4 pt-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[27px] font-bold leading-tight text-ink">
          Peerless <span className="text-brand">global</span> coverage
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          Velqorfi supports fiat-crypto purchases from 173 countries, using
          methods such as Visa, Mastercard, regional mobile wallets, and domestic
          transfers. Comprehensive coverage in Europe, Northern &amp; Latin
          America, and Southeast Asia, with a focus on access to emerging markets.
        </p>
        <button className="mt-6 h-11 rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground">
          Follow us
        </button>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[27px] font-bold leading-tight text-ink">
          Powering the leading <span className="text-brand">Web3 projects</span>
        </h2>
        <div className="mt-7 grid grid-cols-3 gap-3">
          {PROJECTS.map(([name, color, shape]) => (
            <span
              key={name}
              className="flex h-12 items-center justify-center gap-1.5 rounded-xl bg-white px-2 text-center text-[12px] font-bold text-ink shadow-[0_2px_10px_-4px_oklch(0.3_0.05_265/0.35)]"
            >
              <LogoMark color={color} shape={shape} />{name}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="h-11 rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground">
            See list of partners
          </button>
          <button className="h-11 rounded-full border border-brand px-7 text-sm font-semibold text-brand">
            Talk to us
          </button>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i]!;
  return (
    <section className="bg-hero-gradient px-5 pb-14 pt-10">
      <div className="mx-auto max-w-3xl">
        <div className="relative pt-10">
          <span className="absolute left-6 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-brand-violet text-xl font-bold text-white">
            {t.name.charAt(0)}
          </span>
          <div className="rounded-[22px] bg-gradient-to-b from-white/80 to-white/95 p-6 pt-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[17px] font-bold text-ink">{t.name}</p>
                <p className="text-[13px] text-ink-soft">{t.role}</p>
              </div>
              <span className="text-[13px] font-bold text-ink">{t.brand}</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">{t.quote}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[3px] w-8 rounded-full ${
                idx === i ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="bg-cta-gradient px-5 py-14 text-center">
      <p className="mx-auto max-w-lg text-[17px] leading-relaxed text-white">
        Contact us today for more information and the best option for your
        project.
      </p>
      <button className="mt-6 h-12 rounded-full border border-white/70 px-8 text-[15px] text-white">
        Contact us
      </button>
    </section>
  );
}
