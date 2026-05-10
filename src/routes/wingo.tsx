import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Clock, History, BarChart3, ChevronDown, HelpCircle, X, Minus, Plus, PartyPopper, Frown, Rocket } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/wingo")({ component: WinGo });

const intervals = [
  { label: "WinGo 30sec", short: "30sec", secs: 30 },
  { label: "WinGo 1Min", short: "1Min", secs: 60 },
  { label: "WinGo 3Min", short: "3Min", secs: 180 },
  { label: "WinGo 5Min", short: "5Min", secs: 300 },
];

type Sel =
  | { kind: "color"; value: "Green" | "Violet" | "Red" }
  | { kind: "size"; value: "Big" | "Small" }
  | { kind: "number"; value: number };

type Result = { period: string; number: number };
type MyBet = { period: string; label: string; amount: number; payout: number; status: "Win" | "Loss" };

const periodBase = () => `2026050910005${1000 + Math.floor(Math.random() * 900)}`;

function genResults(start: number, n: number): Result[] {
  const out: Result[] = [];
  for (let i = 0; i < n; i++) {
    out.push({ period: String(start - i), number: Math.floor(Math.random() * 10) });
  }
  return out;
}

const colorsOf = (n: number): ("red" | "green" | "violet")[] =>
  n === 0 ? ["red", "violet"] : n === 5 ? ["green", "violet"] : n % 2 === 0 ? ["red"] : ["green"];

const ballClass = (n: number) => {
  if (n === 0) return "from-red-500 via-red-500 to-violet-500";
  if (n === 5) return "from-emerald-500 via-emerald-500 to-violet-500";
  return n % 2 === 0 ? "from-red-500 to-red-700" : "from-emerald-500 to-emerald-700";
};

function Ball({ n, size = "lg" }: { n: number; size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? "size-7 text-[11px]" : size === "md" ? "size-10 text-base" : "size-14 text-2xl";
  return (
    <div className={`relative ${dim} shrink-0`}>
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${ballClass(n)} shadow-card border border-white/30`} />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
      <div className="absolute inset-[15%] rounded-full bg-white/95 grid place-items-center">
        <span className={`font-extrabold bg-gradient-to-br ${ballClass(n)} bg-clip-text text-transparent`}>{n}</span>
      </div>
      <div className="absolute top-[10%] left-[20%] w-[28%] h-[18%] rounded-full bg-white/70 blur-[2px]" />
    </div>
  );
}

function WinGo() {
  const [tab, setTab] = useState(0);
  const [bottomTab, setBottomTab] = useState<"history" | "chart" | "mine">("history");
  const [results, setResults] = useState<Result[]>([]);
  useEffect(() => { setResults(genResults(20260509100051884, 30)); }, []);
  const [myBets, setMyBets] = useState<MyBet[]>([]);
  const [secs, setSecs] = useState(intervals[0].secs);

  // bet flow state
  const [pending, setPending] = useState<Sel | null>(null); // showing modal
  const [activeBet, setActiveBet] = useState<{ sel: Sel; amount: number; period: string } | null>(null);
  const [revealed, setRevealed] = useState<{ period: string; number: number; show: boolean } | null>(null);
  const [outcome, setOutcome] = useState<{ status: "Win" | "Loss"; amount: number; label: string; number?: number; period?: string } | null>(null);

  // sticky timer ref so we can settle exactly on 0
  const periodRef = useRef(results[0].period);

  useEffect(() => {
    setSecs(intervals[tab].secs);
  }, [tab]);

  useEffect(() => {
    const t = setInterval(() => {
      setSecs((s) => {
        if (s > 1) return s - 1;
        // settle
        const newNum = Math.floor(Math.random() * 10);
        const finishedPeriod = periodRef.current;
        const nextPeriod = String(BigInt(finishedPeriod) + 1n);
        periodRef.current = nextPeriod;
        setResults((prev) => [{ period: finishedPeriod, number: newNum }, ...prev].slice(0, 50));
        // reveal animation
        setRevealed({ period: finishedPeriod, number: newNum, show: true });
        setTimeout(() => setRevealed((r) => (r ? { ...r, show: false } : r)), 3000);
        return intervals[tab].secs;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [tab]);

  // settle bet when reveal happens
  useEffect(() => {
    if (!revealed || !activeBet) return;
    if (revealed.period !== activeBet.period) return;
    const n = revealed.number;
    const sel = activeBet.sel;
    let win = false;
    let mult = 0;
    let label = "";
    if (sel.kind === "color") {
      label = sel.value;
      const cs = colorsOf(n);
      if (sel.value === "Green" && cs.includes("green")) { win = true; mult = cs.includes("violet") ? 1.5 : 2; }
      if (sel.value === "Red" && cs.includes("red")) { win = true; mult = cs.includes("violet") ? 1.5 : 2; }
      if (sel.value === "Violet" && cs.includes("violet")) { win = true; mult = 4.5; }
    } else if (sel.kind === "size") {
      label = sel.value;
      if ((sel.value === "Big" && n >= 5) || (sel.value === "Small" && n <= 4)) { win = true; mult = 2; }
    } else if (sel.kind === "number") {
      label = `Number ${sel.value}`;
      if (sel.value === n) { win = true; mult = 9; }
    }
    const payout = win ? Math.round(activeBet.amount * mult) : 0;
    const status: "Win" | "Loss" = win ? "Win" : "Loss";
    setMyBets((prev) => [{ period: activeBet.period, label, amount: activeBet.amount, payout, status }, ...prev].slice(0, 30));
    setOutcome({ status, amount: win ? payout : activeBet.amount, label, number: n, period: activeBet.period });
    setActiveBet(null);
  }, [revealed, activeBet]);

  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  const digits = (mm + ss).split("");

  const chartData = useMemo(
    () => results.slice(0, 14).reverse().map((r, i) => ({ name: i, value: r.number })),
    [results]
  );

  const currentPeriod = periodRef.current;

  return (
    <div className="px-3 pt-3 space-y-3 pb-6">
      {/* Tabs (interval) */}
      <div className="grid grid-cols-4 gap-2">
        {intervals.map((it, i) => (
          <button
            key={it.short}
            onClick={() => setTab(i)}
            className={`tap relative rounded-2xl py-3 transition-all ${
              tab === i
                ? "bg-gradient-to-br from-fuchsia-500/40 to-violet-600/40 border border-violet-400/60 glow"
                : "glass border border-white/10"
            }`}
          >
            <div className={`mx-auto mb-1 size-9 rounded-full grid place-items-center ${tab === i ? "bg-gradient-to-br from-violet-400 to-fuchsia-600 shadow-[0_0_18px_rgba(196,131,255,0.8)]" : "bg-white/10"}`}>
              <Clock className="size-4" />
            </div>
            <div className="text-[11px] font-bold leading-tight">WinGo</div>
            <div className="text-[10px] opacity-90">{it.short}</div>
          </button>
        ))}
      </div>

      {/* Ticket / Timer */}
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 shadow-card">
        <div className="rounded-3xl p-4 bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-blue-500/30 backdrop-blur-md flex items-center justify-between">
          <div>
            <button className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-[11px] font-semibold flex items-center gap-1 mb-2 border border-white/30">
              <HelpCircle className="size-3" /> How to play
            </button>
            <div className="text-xs opacity-90">{intervals[tab].label}</div>
            <div className="flex gap-1 mt-2">
              {results.slice(0, 5).map((r) => (
                <Ball key={r.period} n={r.number} size="sm" />
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-semibold">Time remaining</div>
            <div className="flex gap-1 mt-1 justify-end">
              {digits.map((d, i) => (
                <div key={i} className="relative">
                  <span className="block size-7 rounded-md bg-black/80 grid place-items-center text-base font-extrabold border border-white/20">{d}</span>
                  {i === 1 && <span className="px-0.5 font-bold">:</span>}
                </div>
              ))}
            </div>
            <div className="text-[10px] mt-1 font-mono">{currentPeriod}</div>
          </div>
        </div>
      </div>

      {/* Color buttons */}
      <div className="grid grid-cols-3 gap-2">
        {([
          { t: "Green", grad: "from-emerald-400 to-emerald-600", shape: "rounded-l-2xl rounded-tr-2xl rounded-br-md" },
          { t: "Violet", grad: "from-violet-400 to-fuchsia-600", shape: "rounded-2xl" },
          { t: "Red", grad: "from-red-400 to-rose-600", shape: "rounded-r-2xl rounded-tl-2xl rounded-bl-md" },
        ] as const).map((c) => (
          <button
            key={c.t}
            disabled={!!activeBet}
            onClick={() => setPending({ kind: "color", value: c.t })}
            className={`tap relative bg-gradient-to-br ${c.grad} ${c.shape} py-3.5 font-extrabold text-base text-white shadow-card border border-white/20 disabled:opacity-50`}
          >
            {c.t}
          </button>
        ))}
      </div>

      {/* Numbers */}
      <div className="rounded-3xl bg-black/30 border border-white/10 p-3">
        <div className="grid grid-cols-5 gap-y-3 place-items-center">
          {Array.from({ length: 10 }).map((_, n) => (
            <button
              key={n}
              disabled={!!activeBet}
              onClick={() => setPending({ kind: "number", value: n })}
              className="tap disabled:opacity-50"
            >
              <Ball n={n} size="lg" />
            </button>
          ))}
        </div>

        {/* multipliers preview row */}
        <div className="mt-4 flex items-center gap-1.5 justify-center">
          <button className="px-3 py-1.5 rounded-lg border border-rose-500/60 text-rose-300 text-[11px] font-bold">Random</button>
          {["X1", "X5", "X10", "X20", "X50", "X100"].map((x, i) => (
            <button key={x} className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold ${i === 0 ? "bg-emerald-500 text-white" : "bg-black/40 border border-white/10"}`}>
              {x}
            </button>
          ))}
        </div>

        {/* Big / Small pill */}
        <div className="mt-4 flex rounded-full overflow-hidden shadow-card border border-white/10">
          <button
            disabled={!!activeBet}
            onClick={() => setPending({ kind: "size", value: "Big" })}
            className="tap flex-1 py-3 bg-gradient-to-r from-orange-400 to-amber-500 font-extrabold text-white text-base disabled:opacity-50"
          >
            Big
          </button>
          <button
            disabled={!!activeBet}
            onClick={() => setPending({ kind: "size", value: "Small" })}
            className="tap flex-1 py-3 bg-gradient-to-r from-sky-500 to-blue-600 font-extrabold text-white text-base disabled:opacity-50"
          >
            Small
          </button>
        </div>
      </div>

      {/* Bottom tabs */}
      <div className="flex gap-2">
        {[
          { k: "history" as const, l: "Game history", I: History },
          { k: "chart" as const, l: "Chart", I: BarChart3 },
          { k: "mine" as const, l: "My history", I: Clock },
        ].map(({ k, l, I }) => (
          <button
            key={k}
            onClick={() => setBottomTab(k)}
            className={`flex-1 tap py-2.5 rounded-xl text-[12px] font-semibold flex items-center justify-center gap-1 border ${
              bottomTab === k
                ? "bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 text-black border-white/30"
                : "glass text-muted-foreground border-white/10"
            }`}
          >
            <I className="size-3.5" />
            {l}
          </button>
        ))}
      </div>

      {bottomTab === "history" && (
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.7fr] px-3 py-2.5 text-[11px] font-bold uppercase bg-violet-700/40">
            <div>Period</div><div className="text-center">Number</div><div className="text-center">Big Small</div><div className="text-center">Color</div>
          </div>
          {results.slice(0, 10).map((r) => {
            const cs = colorsOf(r.number);
            return (
              <div key={r.period} className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.7fr] px-3 py-2.5 text-xs border-b border-white/5 items-center bg-black/20">
                <div className="font-mono text-[11px]">{r.period}</div>
                <div className="text-center">
                  <span className={`text-2xl font-extrabold bg-gradient-to-br ${ballClass(r.number)} bg-clip-text text-transparent`}>{r.number}</span>
                </div>
                <div className="text-center text-[11px] font-semibold">{r.number >= 5 ? "Big" : "Small"}</div>
                <div className="flex justify-center gap-1">
                  {cs.map((c, i) => (
                    <span key={i} className={`size-2.5 rounded-full ${c === "red" ? "bg-red-500" : c === "green" ? "bg-emerald-500" : "bg-fuchsia-500"}`} />
                  ))}
                </div>
              </div>
            );
          })}
          <div className="flex items-center justify-center gap-3 px-3 py-3 text-[12px]">
            <button className="size-9 rounded-lg bg-violet-500 grid place-items-center font-bold">‹</button>
            <span className="font-semibold">3/50</span>
            <button className="size-9 rounded-lg bg-violet-500 grid place-items-center font-bold">›</button>
          </div>
        </div>
      )}

      {bottomTab === "chart" && (
        <div className="glass rounded-2xl p-3 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#a1a1c2" fontSize={10} />
              <YAxis stroke="#a1a1c2" fontSize={10} domain={[0, 9]} />
              <Tooltip contentStyle={{ background: "#16162b", border: "1px solid #7b5cff", borderRadius: 12 }} />
              <Line type="monotone" dataKey="value" stroke="#b89bff" strokeWidth={2.5} dot={{ fill: "#7b5cff", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {bottomTab === "mine" && (
        <div className="space-y-2">
          {myBets.length === 0 && (
            <div className="glass rounded-2xl p-6 text-center text-xs text-muted-foreground">No bets yet — place one above!</div>
          )}
          {myBets.map((b, i) => (
            <div key={i} className="glass rounded-2xl p-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold">Bet on {b.label}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">{b.period} · ₹{b.amount}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-extrabold" style={{ color: b.status === "Win" ? "#34d399" : "#f87171" }}>
                  {b.status === "Win" ? `+₹${b.payout}` : `-₹${b.amount}`}
                </div>
                <div className="text-[10px] text-muted-foreground">{b.status}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bet Modal */}
      {pending && (
        <BetModal
          sel={pending}
          period={currentPeriod}
          onClose={() => setPending(null)}
          onConfirm={(amount) => {
            setActiveBet({ sel: pending, amount, period: currentPeriod });
            setPending(null);
          }}
          interval={intervals[tab].label}
        />
      )}

      {/* Result reveal big number overlay */}
      {revealed?.show && (
        <div className="fixed inset-x-0 top-1/3 z-40 grid place-items-center pointer-events-none animate-pop-in">
          <div className="flex gap-3">
            <div className="size-32 rounded-3xl bg-gradient-to-br from-violet-400 to-fuchsia-600 grid place-items-center text-7xl font-black text-white shadow-[0_0_60px_rgba(196,131,255,0.9)] border-4 border-white/30">
              {revealed.number}
            </div>
          </div>
        </div>
      )}

      {/* Win/Loss outcome */}
      {outcome && <OutcomeModal outcome={outcome} onClose={() => setOutcome(null)} />}
    </div>
  );
}

function BetModal({
  sel, period, interval, onClose, onConfirm,
}: {
  sel: Sel; period: string; interval: string; onClose: () => void; onConfirm: (amount: number) => void;
}) {
  const [balance, setBalance] = useState(1);
  const [mult, setMult] = useState(1);
  const [qty, setQty] = useState(1);
  const total = balance * mult * qty;
  const [agree, setAgree] = useState(true);

  const headerColor =
    sel.kind === "color"
      ? sel.value === "Green" ? "from-emerald-400 to-emerald-600"
      : sel.value === "Red" ? "from-red-400 to-rose-600"
      : "from-violet-400 to-fuchsia-600"
      : sel.kind === "size"
      ? sel.value === "Big" ? "from-orange-400 to-amber-500" : "from-sky-500 to-blue-600"
      : "from-violet-400 to-fuchsia-600";

  const selectLabel =
    sel.kind === "color" ? sel.value
    : sel.kind === "size" ? sel.value
    : `Number ${sel.value}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="w-full max-w-md animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* orange cap */}
        <div className={`bg-gradient-to-r ${headerColor} pt-4 pb-6 px-5 rounded-t-3xl text-center text-white relative`}>
          <div className="text-sm font-bold opacity-95">{interval}</div>
          <div className="mt-3 mx-auto bg-white text-black rounded-xl py-2.5 px-4 max-w-[260px] font-extrabold">
            Select {selectLabel}
          </div>
          {/* notch */}
          <div className={`absolute left-1/2 -translate-x-1/2 -bottom-3 w-10 h-6 bg-gradient-to-b ${headerColor}`} style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
        </div>

        <div className="bg-[#1b1832] px-5 pt-6 pb-4 space-y-4">
          {/* balance */}
          <div className="flex items-center gap-3">
            <div className="font-bold text-base flex-1">Balance</div>
            <div className="flex gap-1.5">
              {[1, 10, 100, 1000].map((b) => (
                <button
                  key={b}
                  onClick={() => setBalance(b)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold ${balance === b ? "bg-orange-500 text-white" : "bg-violet-700/60"}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* qty */}
          <div className="flex items-center gap-3">
            <div className="font-bold text-base flex-1">Quantity</div>
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-8 rounded-md bg-orange-500 grid place-items-center"><Minus className="size-4" /></button>
            <div className="w-14 text-center font-extrabold text-lg">{qty}</div>
            <button onClick={() => setQty(qty + 1)} className="size-8 rounded-md bg-orange-500 grid place-items-center"><Plus className="size-4" /></button>
          </div>

          {/* multipliers */}
          <div className="flex gap-1.5 justify-end">
            {[1, 5, 10, 20, 50, 100].map((m) => (
              <button
                key={m}
                onClick={() => setMult(m)}
                className={`px-2.5 py-1.5 rounded-md text-[11px] font-bold ${mult === m ? "bg-orange-500 text-white" : "bg-violet-700/60"}`}
              >
                X{m}
              </button>
            ))}
          </div>

          <button onClick={() => setAgree(!agree)} className="flex items-center gap-2 text-xs">
            <span className={`size-5 rounded-full grid place-items-center ${agree ? "bg-violet-500" : "border border-white/30"}`}>
              {agree && <span className="text-white text-[10px]">✓</span>}
            </span>
            <span>I agree</span>
            <span className="text-rose-400">《Pre-sale rules》</span>
          </button>

          <div className="text-[10px] text-muted-foreground font-mono">Period {period}</div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] bg-[#1b1832]">
          <button onClick={onClose} className="py-4 bg-[#2b2545] font-bold">Cancel</button>
          <button
            disabled={!agree}
            onClick={() => onConfirm(total)}
            className="py-4 bg-orange-500 font-extrabold text-white text-base disabled:opacity-50"
          >
            Total amount ₹{total.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}

function OutcomeModal({ outcome, onClose }: { outcome: { status: "Win" | "Loss"; amount: number; label: string; number?: number; period?: string }; onClose: () => void }) {
  const win = outcome.status === "Win";
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (count <= 0) { onClose(); return; }
    const t = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(t);
  }, [count, onClose]);

  const n = outcome.number ?? 0;
  const colorTag = n === 0 ? "Red+Violet" : n === 5 ? "Green+Violet" : n % 2 === 0 ? "Red" : "Green";
  const sizeTag = n >= 5 ? "Big" : "Small";
  const colorBadge = (c: string) =>
    c.includes("Green") ? "bg-emerald-500" : c.includes("Red") ? "bg-rose-500" : "bg-fuchsia-500";

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm animate-fade-in p-4" onClick={onClose}>
      <div className="relative w-full max-w-[340px] animate-pop-in" onClick={(e) => e.stopPropagation()}>
        {/* Winged badge top */}
        <div className="relative h-20 -mb-6 z-10 grid place-items-center">
          <div className={`absolute inset-x-1/2 -translate-x-1/2 top-0 size-16 rounded-full grid place-items-center shadow-[0_0_30px_rgba(255,180,80,0.8)] ${win ? "bg-gradient-to-br from-amber-300 to-orange-500" : "bg-gradient-to-br from-rose-400 to-rose-600"}`}>
            {win ? <Rocket className="size-7 text-white" /> : <Frown className="size-8 text-white" />}
          </div>
          {/* wings */}
          <div className="absolute top-3 left-1/2 -translate-x-[58px] w-12 h-8 bg-gradient-to-l from-orange-300/80 to-transparent rounded-l-full blur-[1px]" />
          <div className="absolute top-3 left-1/2 translate-x-[10px] w-12 h-8 bg-gradient-to-r from-orange-300/80 to-transparent rounded-r-full blur-[1px]" />
        </div>

        <div className={`rounded-3xl pt-12 pb-5 px-5 text-center text-white relative ${win ? "bg-gradient-to-b from-orange-400 via-orange-500 to-rose-500" : "bg-gradient-to-b from-rose-500 via-rose-600 to-rose-700"} shadow-2xl border-2 border-white/30`}>
          <h3 className="text-2xl font-black drop-shadow">
            {win ? "Congratulations" : "Sorry"}
          </h3>

          {/* Lottery results pills */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold">
            <span className="opacity-90">Lottery results</span>
            <span className={`px-2.5 py-1 rounded-md text-white text-[11px] font-bold ${colorBadge(colorTag.split("+")[0])}`}>{colorTag.split("+")[0]}</span>
            <span className="size-6 rounded-full bg-white text-orange-600 grid place-items-center text-xs font-black">{n}</span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white text-[11px] font-bold">{sizeTag}</span>
          </div>

          {/* Bonus ticket */}
          <div className="mt-4 bg-gradient-to-b from-white to-orange-50 text-orange-600 rounded-xl py-4 px-3 relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 95% 100%, 90% 92%, 85% 100%, 80% 92%, 75% 100%, 70% 92%, 65% 100%, 60% 92%, 55% 100%, 50% 92%, 45% 100%, 40% 92%, 35% 100%, 30% 92%, 25% 100%, 20% 92%, 15% 100%, 10% 92%, 5% 100%, 0 92%)" }}>
            <div className="text-sm font-bold text-rose-500">{win ? "Bonus" : "Loss"}</div>
            <div className="text-2xl font-black mt-1">
              {win ? `₹${outcome.amount.toLocaleString()}` : `-₹${outcome.amount.toLocaleString()}`}
            </div>
            <div className="text-[10px] text-gray-500 mt-2 font-mono">
              Period: {outcome.period ?? "—"}
            </div>
          </div>

          <button onClick={onClose} className="mt-4 mx-auto flex items-center gap-2 text-xs">
            <span className="size-4 rounded-full border border-white/70 grid place-items-center text-[10px]">○</span>
            <span className="opacity-95">{count} seconds auto close</span>
          </button>
        </div>

        <button onClick={onClose} className="mt-4 mx-auto block size-11 rounded-full bg-white/10 border border-white/30 grid place-items-center backdrop-blur tap">
          <X className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
