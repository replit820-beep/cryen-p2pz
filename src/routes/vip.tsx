import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Crown, Check } from "lucide-react";

export const Route = createFileRoute("/vip")({ component: VIP });

const tiers = [
  { l: "VIP 1", req: "₹10K", cb: "1%", salary: "₹100", g: "bg-grad-blue" },
  { l: "VIP 2", req: "₹50K", cb: "2%", salary: "₹500", g: "bg-grad-pink" },
  { l: "VIP 3", req: "₹2L", cb: "3%", salary: "₹1.5K", g: "bg-grad-primary", current: true },
  { l: "VIP 4", req: "₹10L", cb: "5%", salary: "₹5K", g: "bg-grad-gold" },
  { l: "VIP 5", req: "₹50L", cb: "8%", salary: "₹15K", g: "bg-grad-red" },
];

function VIP() {
  return (
    <div className="px-3 pt-3 space-y-4">
      <div className="flex items-center gap-2">
        <Link to="/account" className="tap size-9 rounded-xl glass grid place-items-center"><ArrowLeft className="size-4" /></Link>
        <h1 className="font-extrabold text-lg">VIP Center</h1>
      </div>

      <div className="bg-grad-gold rounded-3xl p-5 relative overflow-hidden glow-gold">
        <div className="absolute inset-0 shimmer-overlay opacity-50" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <Crown className="size-7" />
            <div className="font-extrabold text-glow">Current: VIP 3</div>
          </div>
          <div className="text-xs opacity-90 mt-1">Total turnover ₹2,45,000</div>
          <div className="mt-3 h-2 rounded-full bg-black/30 overflow-hidden">
            <div className="h-full bg-white/80 rounded-full" style={{ width: "62%" }} />
          </div>
          <div className="flex justify-between text-[10px] opacity-90 mt-1">
            <span>VIP 3</span><span>62% to VIP 4</span><span>VIP 4</span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {tiers.map((t) => (
          <div key={t.l} className={`relative rounded-2xl p-4 ${t.g} overflow-hidden lift glow border border-white/10`}>
            <div className="absolute inset-0 shimmer-overlay opacity-30" />
            <div className="relative flex items-center gap-3">
              <Crown className="size-10" />
              <div className="flex-1">
                <div className="font-extrabold text-glow flex items-center gap-2">
                  {t.l}
                  {t.current && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/30 font-bold">CURRENT</span>}
                </div>
                <div className="text-[11px] opacity-90">Turnover required: {t.req}</div>
              </div>
              <div className="text-right text-[11px]">
                <div>Cashback: <b>{t.cb}</b></div>
                <div>Daily: <b>{t.salary}</b></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-4">
        <div className="font-bold text-sm mb-2">VIP Benefits</div>
        {["Higher daily withdraw limit", "Exclusive cashback up to 8%", "Daily salary bonus", "Birthday gift", "Priority support 24x7"].map((b) => (
          <div key={b} className="flex items-center gap-2 text-xs py-1.5">
            <div className="size-5 rounded-full bg-primary/20 grid place-items-center"><Check className="size-3 text-primary" /></div>
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}
