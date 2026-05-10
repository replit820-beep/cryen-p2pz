import { Link } from "@tanstack/react-router";
import { Bell, Wallet, Crown, Globe } from "lucide-react";

export function TopHeader() {
  return (
    <header className="sticky top-0 z-30 glass-strong border-b border-primary/30">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="tap rounded-xl px-2 py-1.5 flex items-center gap-1.5 bg-white/5 border border-white/10">
          <Globe className="size-4 text-primary" />
          <span className="text-xs font-semibold">EN</span>
        </button>

        <Link to="/" className="flex flex-col items-center -mt-1">
          <Crown className="size-3.5 text-gold -mb-1" style={{ color: "oklch(0.85 0.16 85)" }} />
          <span className="font-extrabold tracking-widest text-[15px] text-glow-blue">JAI CLUB</span>
        </Link>

        <div className="flex items-center gap-1.5">
          <button className="tap relative size-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
            <Bell className="size-4" />
            <span className="absolute -top-1 -right-1 size-4 rounded-full bg-red-bet text-[9px] font-bold grid place-items-center" style={{ background: "oklch(0.65 0.24 27)" }}>3</span>
          </button>
          <Link to="/wallet" className="tap size-9 rounded-xl bg-grad-primary grid place-items-center glow">
            <Wallet className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
