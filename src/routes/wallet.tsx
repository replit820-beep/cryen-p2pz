import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, Crown, Gift, History, Bell, ScrollText, ReceiptText, Wallet as WIcon } from "lucide-react";
import { SectionTitle } from "@/components/ui-bits/SectionTitle";

export const Route = createFileRoute("/wallet")({ component: WalletPage });

function WalletPage() {
  return (
    <div className="px-3 pt-3 space-y-4">
      {/* balance card */}
      <div className="relative rounded-3xl p-5 bg-grad-primary overflow-hidden glow">
        <div className="absolute inset-0 shimmer-overlay opacity-40" />
        <div className="absolute -top-8 -right-8 text-7xl opacity-20 animate-float">💰</div>
        <div className="absolute bottom-0 right-4 text-4xl opacity-30">🪙</div>
        <div className="relative">
          <div className="text-xs uppercase tracking-wider opacity-80">Total Balance</div>
          <div className="text-4xl font-black mt-1 text-glow">₹12,480.50</div>
          <div className="text-[11px] opacity-80 mt-0.5">≈ 0.2154 USDT</div>
          <div className="flex gap-2 mt-4">
            <Link to="/deposit" className="tap flex-1 py-2.5 rounded-xl bg-white/20 backdrop-blur font-bold text-sm border border-white/30 flex items-center justify-center gap-1">
              <ArrowDown className="size-4" /> Deposit
            </Link>
            <Link to="/withdraw" className="tap flex-1 py-2.5 rounded-xl bg-white/20 backdrop-blur font-bold text-sm border border-white/30 flex items-center justify-center gap-1">
              <ArrowUp className="size-4" /> Withdraw
            </Link>
          </div>
        </div>
      </div>

      {/* sub balances */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Main Wallet", v: "₹10,200" },
          { l: "Bonus", v: "₹1,580" },
          { l: "Locked", v: "₹700" },
        ].map((b) => (
          <div key={b.l} className="glass rounded-2xl p-3 text-center">
            <div className="text-[10px] text-muted-foreground">{b.l}</div>
            <div className="text-sm font-extrabold mt-1">{b.v}</div>
          </div>
        ))}
      </div>

      {/* quick grid */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: "Deposit", I: ArrowDown, g: "bg-grad-green", to: "/deposit" },
          { l: "Withdraw", I: ArrowUp, g: "bg-grad-red", to: "/withdraw" },
          { l: "VIP", I: Crown, g: "bg-grad-gold", to: "/vip" },
          { l: "Gifts", I: Gift, g: "bg-grad-pink", to: "/promotion" },
        ].map((m) => (
          <Link key={m.l} to={m.to} className="tap glass rounded-2xl p-3 flex flex-col items-center gap-1.5">
            <div className={`size-10 rounded-xl ${m.g} grid place-items-center glow`}>
              <m.I className="size-5" />
            </div>
            <span className="text-[10px] font-semibold">{m.l}</span>
          </Link>
        ))}
      </div>

      <SectionTitle title="Records" />
      <div className="space-y-2">
        {[
          { l: "Game History", d: "Bets, wins & losses", I: History, g: "bg-grad-primary" },
          { l: "Deposit History", d: "All your deposits", I: ArrowDown, g: "bg-grad-green" },
          { l: "Withdraw History", d: "All your withdrawals", I: ArrowUp, g: "bg-grad-red" },
          { l: "Transactions", d: "Full transaction log", I: ReceiptText, g: "bg-grad-blue" },
          { l: "Notifications", d: "System alerts & news", I: Bell, g: "bg-grad-pink" },
          { l: "Statements", d: "Monthly statements", I: ScrollText, g: "bg-grad-gold" },
        ].map((r) => (
          <div key={r.l} className="glass rounded-2xl p-3 flex items-center gap-3 lift">
            <div className={`size-11 rounded-xl ${r.g} grid place-items-center`}>
              <r.I className="size-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold">{r.l}</div>
              <div className="text-[11px] text-muted-foreground">{r.d}</div>
            </div>
            <WIcon className="size-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}
