import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Shield, CreditCard, MessageSquare, LogOut, Crown, Globe, Bell, Lock, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/account")({ component: Account });

function Account() {
  return (
    <div className="px-3 pt-3 space-y-4">
      <div className="relative rounded-3xl p-5 bg-grad-primary overflow-hidden glow">
        <div className="absolute inset-0 shimmer-overlay opacity-40" />
        <div className="relative flex items-center gap-3">
          <div className="size-16 rounded-2xl bg-white/20 backdrop-blur grid place-items-center text-3xl border border-white/30">
            🦁
          </div>
          <div className="flex-1">
            <div className="font-extrabold text-lg flex items-center gap-1">
              JaiPlayer98
              <Crown className="size-4" style={{ color: "oklch(0.85 0.16 80)" }} />
            </div>
            <div className="text-[11px] opacity-90">UID: 88420351</div>
            <div className="text-[10px] opacity-80 mt-0.5">Last login: 9 May 2026, 21:13</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 relative">
          {[{ l: "Wallet", v: "₹12,480" }, { l: "VIP", v: "Lv.3" }, { l: "Today P/L", v: "+₹1,450" }].map((s) => (
            <div key={s.l} className="bg-white/15 backdrop-blur rounded-xl p-2 text-center border border-white/20">
              <div className="text-[10px] opacity-80">{s.l}</div>
              <div className="text-sm font-extrabold">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/vip" className="block">
        <div className="bg-grad-gold rounded-2xl p-4 flex items-center justify-between glow-gold lift">
          <div>
            <div className="text-xs opacity-90">VIP Center</div>
            <div className="font-extrabold text-glow">Upgrade to VIP 4</div>
            <div className="text-[10px] opacity-80 mt-0.5">Just ₹50,000 turnover away</div>
          </div>
          <Crown className="size-10" />
        </div>
      </Link>

      <div className="glass rounded-2xl overflow-hidden">
        {[
          { l: "Settings", I: Settings, to: "/account" },
          { l: "Security Center", I: Shield, to: "/account" },
          { l: "Bank Account", I: CreditCard, to: "/withdraw" },
          { l: "Notifications", I: Bell, to: "/account" },
          { l: "Language", I: Globe, to: "/account", badge: "EN" },
          { l: "Change Password", I: Lock, to: "/account" },
          { l: "Feedback", I: MessageSquare, to: "/account" },
        ].map((m) => (
          <Link to={m.to} key={m.l} className="flex items-center gap-3 px-4 py-3 border-b border-white/5 last:border-0 tap">
            <div className="size-9 rounded-xl bg-primary/20 border border-primary/40 grid place-items-center">
              <m.I className="size-4 text-primary" />
            </div>
            <div className="flex-1 text-sm font-semibold">{m.l}</div>
            {m.badge && <span className="text-[10px] px-2 py-0.5 rounded-full glass">{m.badge}</span>}
            <ChevronRight className="size-4 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <Link to="/login" className="block tap">
        <div className="glass rounded-2xl py-3.5 text-center font-bold text-red-bet flex items-center justify-center gap-2" style={{ color: "oklch(0.65 0.24 27)" }}>
          <LogOut className="size-4" /> Logout
        </div>
      </Link>

      <div className="text-[10px] text-center text-muted-foreground py-2">JAI CLUB v2.4.1 · © 2026</div>
    </div>
  );
}
