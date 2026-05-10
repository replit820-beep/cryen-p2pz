import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, Flame, Trophy, Sparkles, Coins, Zap, Wallet, ArrowDown, ArrowUp } from "lucide-react";
import { SectionTitle } from "@/components/ui-bits/SectionTitle";

export const Route = createFileRoute("/")({ component: Home });

const banners = [
  { title: "AR Wallet", subtitle: "Top up with ARPay · Quick · Secure · Stable", grad: "bg-grad-banner", icon: "💎" },
  { title: "Welcome Bonus", subtitle: "Get up to ₹558 on first deposit", grad: "bg-grad-pink", icon: "🎁" },
  { title: "VIP Cashback", subtitle: "Up to 10% daily rebate on every bet", grad: "bg-grad-gold", icon: "👑" },
];

const categories = ["Popular", "Lottery", "Mini Games", "Slots", "Casino", "Sports", "Fishing"];

const games = [
  { name: "WIN GO", tag: "Hot", grad: "bg-grad-primary", icon: "🎯", to: "/wingo" },
  { name: "AVIATOR", tag: "Live", grad: "bg-grad-red", icon: "✈️", to: "/aviator" },
  { name: "CRICKET", tag: "New", grad: "bg-grad-green", icon: "🏏", to: "/wingo" },
  { name: "PUBG MINI", tag: "Hot", grad: "bg-grad-blue", icon: "🔫", to: "/wingo" },
  { name: "VORTEX", tag: "🔥", grad: "bg-grad-pink", icon: "🌀", to: "/wingo" },
  { name: "HOT SPIN", tag: "Top", grad: "bg-grad-gold", icon: "🎰", to: "/wingo" },
  { name: "FRUIT 777", tag: "Hot", grad: "bg-grad-red", icon: "🍒", to: "/wingo" },
  { name: "WILDFIRE", tag: "New", grad: "bg-grad-primary", icon: "🔥", to: "/wingo" },
  { name: "KRAKEN", tag: "VIP", grad: "bg-grad-blue", icon: "🐙", to: "/wingo" },
];

const winners = [
  { user: "Rahul***23", game: "WinGo 1Min", amount: "₹12,540" },
  { user: "Priya***88", game: "Aviator", amount: "₹8,210" },
  { user: "Vikram***01", game: "Cricket", amount: "₹24,910" },
  { user: "Anita***77", game: "Hot Spin", amount: "₹3,455" },
  { user: "Karan***12", game: "WinGo 30s", amount: "₹6,120" },
];

function Home() {
  const [slide, setSlide] = useState(0);
  const [cat, setCat] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % banners.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="px-3 pt-3 space-y-5">
      {/* Banner Carousel */}
      <div className="relative h-36 rounded-3xl overflow-hidden">
        {banners.map((b, i) => (
          <div
            key={b.title}
            className={`absolute inset-0 ${b.grad} p-4 flex items-center justify-between transition-all duration-700 ${
              i === slide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute inset-0 shimmer-overlay opacity-40" />
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-wider opacity-80">Featured</div>
              <h3 className="text-2xl font-extrabold text-glow">{b.title}</h3>
              <p className="text-xs opacity-90 mt-1 max-w-[200px]">{b.subtitle}</p>
              <button className="tap mt-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-semibold border border-white/30">
                Detail <ChevronRight className="inline size-3" />
              </button>
            </div>
            <div className="text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-float">{b.icon}</div>
          </div>
        ))}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {banners.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="glass rounded-2xl px-3 py-2 flex items-center gap-2 overflow-hidden">
        <div className="size-7 rounded-full bg-grad-pink grid place-items-center shrink-0">
          <Flame className="size-4" />
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {[...winners, ...winners].map((w, i) => (
              <span key={i} className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">{w.user}</span> won <span className="text-gold font-bold" style={{ color: "oklch(0.85 0.16 80)" }}>{w.amount}</span> on {w.game}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Wallet", value: "₹12,480", Icon: Wallet, grad: "bg-grad-primary" },
          { label: "Today Win", value: "₹2,340", Icon: ArrowUp, grad: "bg-grad-green" },
          { label: "Today Bet", value: "₹890", Icon: ArrowDown, grad: "bg-grad-red" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-2.5 text-center lift">
            <div className={`size-7 mx-auto rounded-lg ${s.grad} grid place-items-center mb-1`}>
              <s.Icon className="size-3.5" />
            </div>
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
            <div className="text-xs font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-3 px-3">
        {categories.map((c, i) => (
          <button
            key={c}
            onClick={() => setCat(i)}
            className={`tap px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              cat === i
                ? "bg-grad-primary glow border border-primary/60"
                : "glass text-muted-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Lottery Section */}
      <div>
        <SectionTitle title="Lottery" action={<span className="text-xs text-muted-foreground flex items-center gap-1"><Sparkles className="size-3" /> All</span>} />
        <Link to="/wingo" className="block lift">
          <div className="bg-grad-primary rounded-2xl p-4 relative overflow-hidden glow">
            <div className="absolute inset-0 shimmer-overlay opacity-60" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="text-xs opacity-80">Color Prediction</div>
                <h3 className="text-2xl font-extrabold text-glow">Win Go</h3>
                <p className="text-xs opacity-90 mt-1">Guess the color & number to win 9x</p>
              </div>
              <div className="text-5xl animate-float">🎯</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Game grid */}
      <div>
        <SectionTitle title="Popular Games" action={<span className="text-xs text-muted-foreground">View all</span>} />
        <div className="grid grid-cols-2 gap-2.5">
          {games.map((g) => (
            <Link to={g.to} key={g.name} className="lift">
              <div className={`relative h-32 rounded-2xl ${g.grad} p-3 overflow-hidden border border-white/10 shadow-card`}>
                <div className="absolute inset-0 shimmer-overlay opacity-40" />
                <div className="absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur border border-white/20">
                  {g.tag}
                </div>
                <div className="absolute bottom-2 left-3 right-3">
                  <div className="text-3xl mb-1 drop-shadow-lg">{g.icon}</div>
                  <div className="font-extrabold text-sm tracking-wider text-glow">{g.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Winners list */}
      <div>
        <SectionTitle title="Winning Information" action={<Trophy className="size-4 text-gold" style={{ color: "oklch(0.85 0.16 80)" }} />} />
        <div className="space-y-2">
          {winners.map((w) => (
            <div key={w.user} className="glass rounded-2xl p-3 flex items-center gap-3">
              <div className="size-10 rounded-xl bg-grad-primary grid place-items-center text-lg">🏆</div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{w.user}</div>
                <div className="text-[11px] text-muted-foreground">won at {w.game}</div>
              </div>
              <div className="text-right">
                <div className="font-extrabold text-sm" style={{ color: "oklch(0.85 0.16 80)" }}>{w.amount}</div>
                <div className="text-[10px] text-muted-foreground">just now</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-[10px] text-muted-foreground py-4 flex items-center justify-center gap-1">
        <Zap className="size-3 text-primary" /> Powered by JAI CLUB · Play Responsibly
      </div>

      {/* Announcement modal */}
      {showAnnouncement && (
        <div className="fixed inset-0 z-50 grid place-items-center p-6 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setShowAnnouncement(false)}>
          <div className="glass-strong w-full max-w-sm rounded-3xl p-5 neon-border animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <div className="size-14 rounded-2xl bg-grad-primary mx-auto grid place-items-center glow mb-3">
              <Coins className="size-7" />
            </div>
            <h3 className="text-center text-lg font-extrabold text-glow">Official Announcement</h3>
            <p className="text-xs text-muted-foreground text-center mt-2 leading-relaxed">
              Welcome to JAI CLUB! Enjoy 100% bonus on first deposit. New WinGo 30s game launched with instant payouts.
            </p>
            <button onClick={() => setShowAnnouncement(false)} className="tap mt-4 w-full py-3 rounded-2xl bg-grad-primary font-bold glow">
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
