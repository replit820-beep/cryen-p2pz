import { createFileRoute } from "@tanstack/react-router";
import { Disc3, Gift, Calendar, Target, Trophy, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui-bits/SectionTitle";

export const Route = createFileRoute("/activity")({ component: ActivityPage });

const events = [
  { l: "Lucky Spin", d: "Spin daily for free rewards", I: Disc3, g: "bg-grad-gold", reward: "₹5,000" },
  { l: "Daily Cashback", d: "Get up to 10% cashback", I: Gift, g: "bg-grad-pink", reward: "10%" },
  { l: "Daily Bonus", d: "Login 7 days for bonus", I: Calendar, g: "bg-grad-primary", reward: "₹500" },
  { l: "Missions", d: "Complete tasks to earn", I: Target, g: "bg-grad-blue", reward: "₹1,200" },
  { l: "Tournament", d: "WinGo championship", I: Trophy, g: "bg-grad-green", reward: "₹50,000" },
];

function ActivityPage() {
  return (
    <div className="px-3 pt-3 space-y-4">
      <div className="bg-grad-pink rounded-3xl p-5 relative overflow-hidden glow-pink">
        <div className="absolute inset-0 shimmer-overlay opacity-50" />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="text-xs uppercase opacity-80">Activity Center</div>
            <h2 className="text-2xl font-extrabold text-glow">Win Big Daily</h2>
            <p className="text-xs opacity-90 mt-1">Up to ₹50,000 in daily rewards</p>
          </div>
          <div className="text-5xl animate-float">🎁</div>
        </div>
      </div>

      <SectionTitle title="Featured Events" action={<Sparkles className="size-4 text-primary" />} />

      <div className="space-y-3">
        {events.map((e) => (
          <div key={e.l} className="glass-strong rounded-2xl p-4 flex items-center gap-3 lift border border-white/10">
            <div className={`size-14 rounded-2xl ${e.g} grid place-items-center glow`}>
              <e.I className="size-7" />
            </div>
            <div className="flex-1">
              <div className="font-bold">{e.l}</div>
              <div className="text-[11px] text-muted-foreground">{e.d}</div>
              <div className="text-[10px] mt-1 inline-block px-2 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold">
                Up to {e.reward}
              </div>
            </div>
            <button className="tap px-4 py-2 rounded-xl bg-grad-primary text-xs font-bold glow">Join</button>
          </div>
        ))}
      </div>

      <SectionTitle title="Daily Check-In" />
      <div className="glass rounded-2xl p-4">
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`aspect-square rounded-xl grid place-items-center text-[10px] font-bold ${i < 3 ? "bg-grad-primary glow" : "glass border border-white/10"}`}>
              <div>D{i + 1}</div>
            </div>
          ))}
        </div>
        <button className="tap mt-3 w-full py-3 rounded-2xl bg-grad-primary font-extrabold glow">Check In Today (+₹50)</button>
      </div>
    </div>
  );
}
