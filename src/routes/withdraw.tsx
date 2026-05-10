import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, User2, Hash } from "lucide-react";

export const Route = createFileRoute("/withdraw")({ component: Withdraw });

function Withdraw() {
  return (
    <div className="px-3 pt-3 space-y-4">
      <div className="flex items-center gap-2">
        <Link to="/wallet" className="tap size-9 rounded-xl glass grid place-items-center"><ArrowLeft className="size-4" /></Link>
        <h1 className="font-extrabold text-lg">Withdraw</h1>
      </div>

      <div className="bg-grad-primary rounded-2xl p-4 glow">
        <div className="text-xs opacity-80">Withdrawable</div>
        <div className="text-2xl font-extrabold text-glow">₹10,200.00</div>
        <div className="text-[10px] opacity-80 mt-0.5">Bonus locked: ₹2,280</div>
      </div>

      <div className="space-y-3">
        {[
          { l: "Bank Name", I: Building2, p: "HDFC Bank" },
          { l: "Account Holder", I: User2, p: "Full name" },
          { l: "Account Number", I: Hash, p: "XXXX XXXX XXXX" },
          { l: "IFSC Code", I: Hash, p: "HDFC0001234" },
        ].map((f) => (
          <div key={f.l}>
            <label className="text-xs text-muted-foreground">{f.l}</label>
            <div className="mt-1 glass rounded-2xl flex items-center px-3 py-3 border border-primary/30">
              <f.I className="size-4 text-muted-foreground" />
              <input className="flex-1 bg-transparent outline-none text-sm ml-3" placeholder={f.p} />
            </div>
          </div>
        ))}

        <div>
          <label className="text-xs text-muted-foreground">Amount</label>
          <div className="mt-1 glass rounded-2xl px-4 py-3 flex items-center gap-2 border border-primary/30">
            <span className="text-xl font-bold">₹</span>
            <input className="flex-1 bg-transparent outline-none text-lg font-bold" placeholder="0" />
          </div>
          <div className="flex gap-2 mt-2">
            {[500, 1000, 5000, "MAX"].map((a) => (
              <button key={a} className="tap flex-1 py-1.5 rounded-lg glass text-xs font-semibold">{typeof a === "number" ? `₹${a}` : a}</button>
            ))}
          </div>
        </div>
      </div>

      <button className="tap w-full py-4 rounded-2xl bg-grad-primary font-extrabold glow text-base">Submit Withdrawal</button>

      <div className="glass rounded-2xl p-3">
        <div className="text-xs font-bold mb-2">Recent Withdrawals</div>
        {[
          { amt: "₹5,000", st: "Success", t: "Today 14:22" },
          { amt: "₹2,500", st: "Pending", t: "Yesterday" },
          { amt: "₹10,000", st: "Success", t: "8 May" },
        ].map((w, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <div>
              <div className="text-sm font-bold">{w.amt}</div>
              <div className="text-[10px] text-muted-foreground">{w.t}</div>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${w.st === "Success" ? "bg-green-bet/20 text-green-bet" : "bg-gold/20 text-gold"}`}
              style={{ color: w.st === "Success" ? "oklch(0.72 0.18 150)" : "oklch(0.85 0.16 80)" }}>
              {w.st}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
