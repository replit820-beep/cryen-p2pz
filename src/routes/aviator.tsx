import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Plane, History, Menu, HelpCircle, Minus, Plus, Trophy } from "lucide-react";

export const Route = createFileRoute("/aviator")({ component: Aviator });

type Round = { id: number; crash: number };
type Bet = { id: number; amount: number; cashout?: number; multAt?: number; status: "active" | "won" | "lost" };

const fmt = (n: number) => n.toFixed(2);

function genCrash() {
  // weighted random crash multiplier
  const r = Math.random();
  if (r < 0.04) return 1.0; // instant crash
  if (r < 0.45) return 1 + Math.random() * 1.5;
  if (r < 0.85) return 2 + Math.random() * 4;
  return 5 + Math.random() * 20;
}

function multColor(m: number) {
  if (m < 2) return "bg-blue-500/30 text-blue-300 border-blue-400/40";
  if (m < 10) return "bg-fuchsia-500/30 text-fuchsia-300 border-fuchsia-400/40";
  return "bg-rose-500/30 text-rose-300 border-rose-400/40";
}

function Aviator() {
  const [history, setHistory] = useState<Round[]>(() =>
    Array.from({ length: 12 }).map((_, i) => ({ id: 1000 - i, crash: +(0.5 + Math.random() * 6).toFixed(2) }))
  );
  const [phase, setPhase] = useState<"betting" | "flying" | "crashed">("betting");
  const [countdown, setCountdown] = useState(5);
  const [mult, setMult] = useState(1);
  const crashAt = useRef(2);
  const [allBets, setAllBets] = useState<{ user: string; amount: number; mult?: number; cashout?: number }[]>([]);

  const [panel1, setPanel1] = useState<{ amount: number; bet: Bet | null; queued: boolean }>({ amount: 10, bet: null, queued: false });
  const [panel2, setPanel2] = useState<{ amount: number; bet: Bet | null; queued: boolean }>({ amount: 50, bet: null, queued: false });

  // round loop
  useEffect(() => {
    if (phase === "betting") {
      if (countdown <= 0) {
        crashAt.current = +genCrash().toFixed(2);
        setMult(1);
        setPhase("flying");
        // generate fake other bets
        const others = Array.from({ length: 18 + Math.floor(Math.random() * 10) }).map(() => ({
          user: `${"abcdefghj"[Math.floor(Math.random() * 9)]}***${Math.floor(Math.random() * 9)}`,
          amount: +(Math.random() * 200).toFixed(2),
        }));
        setAllBets(others);
        // commit queued bets
        setPanel1((p) => p.queued ? { amount: p.amount, queued: false, bet: { id: Date.now(), amount: p.amount, status: "active" } } : p);
        setPanel2((p) => p.queued ? { amount: p.amount, queued: false, bet: { id: Date.now() + 1, amount: p.amount, status: "active" } } : p);
        return;
      }
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
    if (phase === "flying") {
      const t = setInterval(() => {
        setMult((m) => {
          const next = +(m + 0.01 + m * 0.005).toFixed(2);
          if (next >= crashAt.current) {
            // crash
            setPhase("crashed");
            return crashAt.current;
          }
          return next;
        });
      }, 60);
      return () => clearInterval(t);
    }
    if (phase === "crashed") {
      // settle bets
      setPanel1((p) => p.bet?.status === "active" ? { ...p, bet: { ...p.bet, status: "lost" } } : p);
      setPanel2((p) => p.bet?.status === "active" ? { ...p, bet: { ...p.bet, status: "lost" } } : p);
      setHistory((h) => [{ id: h[0].id + 1, crash: crashAt.current }, ...h].slice(0, 30));
      const t = setTimeout(() => {
        setCountdown(5);
        setPhase("betting");
        setPanel1((p) => ({ ...p, bet: null }));
        setPanel2((p) => ({ ...p, bet: null }));
        setAllBets([]);
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [phase, countdown]);

  function place(panel: 1 | 2) {
    const set = panel === 1 ? setPanel1 : setPanel2;
    set((p) => {
      if (phase === "betting") return { ...p, queued: true };
      return p;
    });
  }
  function cashout(panel: 1 | 2) {
    const set = panel === 1 ? setPanel1 : setPanel2;
    set((p) => {
      if (p.bet?.status !== "active" || phase !== "flying") return p;
      const cash = +(p.bet.amount * mult).toFixed(2);
      return { ...p, bet: { ...p.bet, status: "won", cashout: cash, multAt: mult } };
    });
  }

  // Curve path computation
  const progress = Math.min((mult - 1) / Math.max(crashAt.current - 1, 0.2), 1);
  const curveX = 20 + progress * 280;
  const curveY = 180 - progress * 140;
  const path = useMemo(() => {
    const pts: string[] = [];
    const steps = 30;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * progress;
      const x = 20 + t * 280;
      const y = 180 - Math.pow(t, 1.4) * 140;
      pts.push(`${x},${y}`);
    }
    return "M " + pts.join(" L ");
  }, [progress]);

  return (
    <div className="px-3 pt-3 pb-6 space-y-3">
      {/* Top bar */}
      <div className="flex items-center justify-between glass rounded-2xl p-2.5">
        <div className="flex items-center gap-2">
          <span className="text-rose-500 font-black text-xl italic tracking-tight">Aviator</span>
          <button className="px-2.5 py-1 rounded-full bg-amber-400 text-black text-[10px] font-bold flex items-center gap-1">
            <HelpCircle className="size-3" /> How to play?
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-300">₹ 1,249.21</span>
          <button className="size-7 rounded-md bg-white/10 grid place-items-center"><Menu className="size-4" /></button>
        </div>
      </div>

      {/* History pills */}
      <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-1 px-1">
        {history.slice(0, 12).map((r) => (
          <span key={r.id} className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${multColor(r.crash)}`}>
            {fmt(r.crash)}x
          </span>
        ))}
        <button className="shrink-0 size-7 rounded-full bg-white/10 grid place-items-center"><History className="size-3.5" /></button>
      </div>

      {/* Game canvas */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#1a0d2e] to-[#06030f] h-[260px]">
        {/* sun rays */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="absolute left-[12%] bottom-[18%] origin-bottom-left bg-gradient-to-tr from-rose-600/40 via-rose-500/10 to-transparent" style={{ width: 400, height: 2, transform: `rotate(${-i * 4 - 5}deg)` }} />
          ))}
        </div>
        {/* axis dots */}
        <div className="absolute left-3 top-3 bottom-8 w-px flex flex-col justify-between">
          {Array.from({ length: 6 }).map((_, i) => <span key={i} className="size-1 rounded-full bg-white/40" />)}
        </div>
        <div className="absolute left-3 right-3 bottom-6 h-px flex justify-between">
          {Array.from({ length: 12 }).map((_, i) => <span key={i} className="size-1 rounded-full bg-white/40" />)}
        </div>

        {/* SVG curve */}
        {phase !== "betting" && (
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad" x1="0" x2="1" y1="1" y2="0">
                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d={`${path} L ${curveX} 180 L 20 180 Z`} fill="url(#grad)" />
            <path d={path} stroke="#f43f5e" strokeWidth="2.5" fill="none" />
          </svg>
        )}

        {/* Multiplier */}
        <div className="absolute inset-0 grid place-items-center">
          {phase === "betting" && (
            <div className="text-center">
              <div className="text-amber-400 text-sm font-bold mb-2">WAITING FOR NEXT ROUND</div>
              <div className="text-5xl font-black text-white">{countdown}s</div>
            </div>
          )}
          {phase === "flying" && (
            <div className="text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]">
              {fmt(mult)}x
            </div>
          )}
          {phase === "crashed" && (
            <div className="text-center">
              <div className="text-rose-500 text-sm font-bold tracking-widest">FLEW AWAY!</div>
              <div className="text-5xl font-black text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.9)]">{fmt(crashAt.current)}x</div>
            </div>
          )}
        </div>

        {/* Plane */}
        {phase === "flying" && (
          <div
            className="absolute transition-none"
            style={{
              left: `${(curveX / 320) * 100}%`,
              top: `${(curveY / 200) * 100}%`,
              transform: "translate(-50%, -50%) rotate(-20deg)",
            }}
          >
            <Plane className="size-9 text-rose-500 fill-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
          </div>
        )}
      </div>

      {/* Bet panels */}
      {[1, 2].map((idx) => {
        const p = idx === 1 ? panel1 : panel2;
        const setP = idx === 1 ? setPanel1 : setPanel2;
        const live = p.bet?.status === "active";
        const won = p.bet?.status === "won";
        return (
          <div key={idx} className="glass rounded-2xl p-3">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button className="py-1.5 rounded-full bg-white/10 text-xs font-bold">Bet</button>
              <button className="py-1.5 rounded-full text-xs font-bold text-muted-foreground">Auto</button>
            </div>
            <div className="grid grid-cols-[1fr_1.4fr] gap-2 items-stretch">
              <div className="space-y-2">
                <div className="flex items-center bg-black/40 rounded-full px-1 py-1 border border-white/10">
                  <button onClick={() => setP({ ...p, amount: Math.max(1, +(p.amount - 1).toFixed(2)) })} className="size-7 rounded-full bg-white/10 grid place-items-center"><Minus className="size-3" /></button>
                  <div className="flex-1 text-center font-extrabold text-sm">{fmt(p.amount)}</div>
                  <button onClick={() => setP({ ...p, amount: +(p.amount + 1).toFixed(2) })} className="size-7 rounded-full bg-white/10 grid place-items-center"><Plus className="size-3" /></button>
                </div>
                <div className="grid grid-cols-2 gap-1 text-[11px] font-bold">
                  {[1, 2, 5, 10].map((v) => (
                    <button key={v} onClick={() => setP({ ...p, amount: v })} className="py-1 rounded-md bg-white/5 hover:bg-white/10">{v.toFixed(2)}</button>
                  ))}
                </div>
              </div>
              <div>
                {!p.bet && !p.queued && (
                  <button onClick={() => place(idx as 1 | 2)} className="w-full h-full min-h-[72px] rounded-2xl bg-gradient-to-b from-emerald-400 to-emerald-600 font-black text-white text-base shadow-card border-2 border-emerald-300/50 tap">
                    BET<br /><span className="text-xs">{fmt(p.amount)} INR</span>
                  </button>
                )}
                {p.queued && !p.bet && (
                  <button onClick={() => setP({ ...p, queued: false })} className="w-full h-full min-h-[72px] rounded-2xl bg-gradient-to-b from-amber-400 to-orange-500 font-black text-white text-base tap">
                    CANCEL<br /><span className="text-xs">Waiting next round</span>
                  </button>
                )}
                {live && (
                  <button onClick={() => cashout(idx as 1 | 2)} className="w-full h-full min-h-[72px] rounded-2xl bg-gradient-to-b from-amber-400 to-orange-600 font-black text-white text-base tap animate-pulse">
                    CASH OUT<br /><span className="text-sm">₹{fmt(p.bet!.amount * mult)}</span>
                  </button>
                )}
                {won && (
                  <div className="w-full h-full min-h-[72px] rounded-2xl bg-emerald-500/20 border border-emerald-400/40 grid place-items-center text-center">
                    <div>
                      <div className="text-emerald-300 text-xs font-bold">WON @ {fmt(p.bet!.multAt!)}x</div>
                      <div className="text-emerald-300 font-black text-lg">+₹{fmt(p.bet!.cashout!)}</div>
                    </div>
                  </div>
                )}
                {p.bet?.status === "lost" && (
                  <div className="w-full h-full min-h-[72px] rounded-2xl bg-rose-500/20 border border-rose-400/40 grid place-items-center text-center">
                    <div className="text-rose-300 font-bold text-sm">Lost ₹{fmt(p.bet.amount)}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* All Bets */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="flex border-b border-white/10">
          {["All Bets", "My Bets", "Top"].map((t, i) => (
            <button key={t} className={`flex-1 py-2.5 text-xs font-bold ${i === 0 ? "text-white border-b-2 border-rose-500" : "text-muted-foreground"}`}>{t}</button>
          ))}
        </div>
        <div className="px-3 py-2 text-[10px] font-bold uppercase text-muted-foreground grid grid-cols-[1.2fr_0.8fr_0.6fr_0.8fr]">
          <div>User</div><div className="text-right">Bet INR</div><div className="text-center">X</div><div className="text-right">Cashout</div>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {allBets.length === 0 && <div className="p-4 text-center text-xs text-muted-foreground">Round starting…</div>}
          {allBets.map((b, i) => {
            const cashed = Math.random() > 0.6 ? +(0.5 + Math.random() * 5).toFixed(2) : null;
            const win = cashed !== null;
            return (
              <div key={i} className={`grid grid-cols-[1.2fr_0.8fr_0.6fr_0.8fr] items-center px-3 py-1.5 text-xs border-l-2 ${win ? "bg-emerald-500/10 border-emerald-500" : "border-transparent"}`}>
                <div className="flex items-center gap-1.5"><span className="size-5 rounded-full bg-grad-primary grid place-items-center text-[8px]">U</span>{b.user}</div>
                <div className="text-right font-mono">{fmt(b.amount)}</div>
                <div className="text-center">{cashed && <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${multColor(cashed)}`}>{fmt(cashed)}x</span>}</div>
                <div className="text-right font-mono text-emerald-300">{cashed ? fmt(b.amount * cashed) : "—"}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
