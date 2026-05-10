import { createFileRoute } from "@tanstack/react-router";
import { Copy, Share2, Users, IndianRupee, TrendingUp } from "lucide-react";
import { SectionTitle } from "@/components/ui-bits/SectionTitle";

export const Route = createFileRoute("/promotion")({ component: PromotionPage });

function PromotionPage() {
  return (
    <div className="px-3 pt-3 space-y-4">
      <div className="bg-grad-primary rounded-3xl p-5 relative overflow-hidden glow">
        <div className="absolute inset-0 shimmer-overlay opacity-40" />
        <div className="relative">
          <div className="text-xs uppercase opacity-80">Total Commission</div>
          <div className="text-3xl font-black text-glow">₹84,250.00</div>
          <div className="text-xs opacity-90 mt-1">Earn up to 30% commission per referral</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Direct", v: "128", I: Users, g: "bg-grad-blue" },
          { l: "Team", v: "1,420", I: TrendingUp, g: "bg-grad-pink" },
          { l: "Today Earn", v: "₹2.4K", I: IndianRupee, g: "bg-grad-gold" },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-3 text-center">
            <div className={`size-9 mx-auto rounded-xl ${s.g} grid place-items-center mb-1.5`}>
              <s.I className="size-4" />
            </div>
            <div className="text-[10px] text-muted-foreground">{s.l}</div>
            <div className="text-sm font-extrabold">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-2xl p-4 neon-border">
        <div className="text-xs text-muted-foreground">Your invite code</div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-2xl font-extrabold tracking-wider text-glow">JAI8842X</div>
          <button className="tap p-2 rounded-xl bg-primary/20 border border-primary/40">
            <Copy className="size-4 text-primary" />
          </button>
        </div>
        <button className="tap mt-3 w-full py-3 rounded-2xl bg-grad-primary font-bold glow flex items-center justify-center gap-2">
          <Share2 className="size-4" /> Share Invite Link
        </button>
      </div>

      <SectionTitle title="Commission Levels" />
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Lvl 1", v: "30%", g: "bg-grad-gold" },
          { l: "Lvl 2", v: "20%", g: "bg-grad-pink" },
          { l: "Lvl 3", v: "10%", g: "bg-grad-blue" },
        ].map((c) => (
          <div key={c.l} className={`${c.g} rounded-2xl p-3 text-center glow`}>
            <div className="text-xs opacity-80">{c.l}</div>
            <div className="text-2xl font-black text-glow">{c.v}</div>
          </div>
        ))}
      </div>

      <SectionTitle title="Recent Referrals" />
      <div className="space-y-2">
        {[
          { user: "Amit***54", earn: "₹420", time: "2 min ago" },
          { user: "Sneha***22", earn: "₹180", time: "1 hr ago" },
          { user: "Rohit***91", earn: "₹650", time: "3 hr ago" },
          { user: "Kiran***08", earn: "₹240", time: "Yesterday" },
        ].map((r) => (
          <div key={r.user} className="glass rounded-2xl p-3 flex items-center gap-3">
            <div className="size-10 rounded-full bg-grad-primary grid place-items-center text-sm font-bold">{r.user[0]}</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">{r.user}</div>
              <div className="text-[10px] text-muted-foreground">{r.time}</div>
            </div>
            <div className="font-extrabold text-sm" style={{ color: "oklch(0.72 0.18 150)" }}>+{r.earn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
