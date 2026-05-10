import { r as reactExports, T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { C as CircleQuestionMark, M as Minus, P as Plus } from "./plus-BG-fIVN6.js";
import { c as createLucideIcon } from "./router-C4lT9x-3.js";
import { H as History } from "./history-zpGbX32W.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode);
const fmt = (n) => n.toFixed(2);
function genCrash() {
  const r = Math.random();
  if (r < 0.04) return 1;
  if (r < 0.45) return 1 + Math.random() * 1.5;
  if (r < 0.85) return 2 + Math.random() * 4;
  return 5 + Math.random() * 20;
}
function multColor(m) {
  if (m < 2) return "bg-blue-500/30 text-blue-300 border-blue-400/40";
  if (m < 10) return "bg-fuchsia-500/30 text-fuchsia-300 border-fuchsia-400/40";
  return "bg-rose-500/30 text-rose-300 border-rose-400/40";
}
function Aviator() {
  const [history, setHistory] = reactExports.useState(() => Array.from({
    length: 12
  }).map((_, i) => ({
    id: 1e3 - i,
    crash: +(0.5 + Math.random() * 6).toFixed(2)
  })));
  const [phase, setPhase] = reactExports.useState("betting");
  const [countdown, setCountdown] = reactExports.useState(5);
  const [mult, setMult] = reactExports.useState(1);
  const crashAt = reactExports.useRef(2);
  const [allBets, setAllBets] = reactExports.useState([]);
  const [panel1, setPanel1] = reactExports.useState({
    amount: 10,
    bet: null,
    queued: false
  });
  const [panel2, setPanel2] = reactExports.useState({
    amount: 50,
    bet: null,
    queued: false
  });
  reactExports.useEffect(() => {
    if (phase === "betting") {
      if (countdown <= 0) {
        crashAt.current = +genCrash().toFixed(2);
        setMult(1);
        setPhase("flying");
        const others = Array.from({
          length: 18 + Math.floor(Math.random() * 10)
        }).map(() => ({
          user: `${"abcdefghj"[Math.floor(Math.random() * 9)]}***${Math.floor(Math.random() * 9)}`,
          amount: +(Math.random() * 200).toFixed(2)
        }));
        setAllBets(others);
        setPanel1((p) => p.queued ? {
          amount: p.amount,
          queued: false,
          bet: {
            id: Date.now(),
            amount: p.amount,
            status: "active"
          }
        } : p);
        setPanel2((p) => p.queued ? {
          amount: p.amount,
          queued: false,
          bet: {
            id: Date.now() + 1,
            amount: p.amount,
            status: "active"
          }
        } : p);
        return;
      }
      const t = setTimeout(() => setCountdown((c) => c - 1), 1e3);
      return () => clearTimeout(t);
    }
    if (phase === "flying") {
      const t = setInterval(() => {
        setMult((m) => {
          const next = +(m + 0.01 + m * 5e-3).toFixed(2);
          if (next >= crashAt.current) {
            setPhase("crashed");
            return crashAt.current;
          }
          return next;
        });
      }, 60);
      return () => clearInterval(t);
    }
    if (phase === "crashed") {
      setPanel1((p) => p.bet?.status === "active" ? {
        ...p,
        bet: {
          ...p.bet,
          status: "lost"
        }
      } : p);
      setPanel2((p) => p.bet?.status === "active" ? {
        ...p,
        bet: {
          ...p.bet,
          status: "lost"
        }
      } : p);
      setHistory((h) => [{
        id: h[0].id + 1,
        crash: crashAt.current
      }, ...h].slice(0, 30));
      const t = setTimeout(() => {
        setCountdown(5);
        setPhase("betting");
        setPanel1((p) => ({
          ...p,
          bet: null
        }));
        setPanel2((p) => ({
          ...p,
          bet: null
        }));
        setAllBets([]);
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [phase, countdown]);
  function place(panel) {
    const set = panel === 1 ? setPanel1 : setPanel2;
    set((p) => {
      if (phase === "betting") return {
        ...p,
        queued: true
      };
      return p;
    });
  }
  function cashout(panel) {
    const set = panel === 1 ? setPanel1 : setPanel2;
    set((p) => {
      if (p.bet?.status !== "active" || phase !== "flying") return p;
      const cash = +(p.bet.amount * mult).toFixed(2);
      return {
        ...p,
        bet: {
          ...p.bet,
          status: "won",
          cashout: cash,
          multAt: mult
        }
      };
    });
  }
  const progress = Math.min((mult - 1) / Math.max(crashAt.current - 1, 0.2), 1);
  const curveX = 20 + progress * 280;
  const curveY = 180 - progress * 140;
  const path = reactExports.useMemo(() => {
    const pts = [];
    const steps = 30;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps * progress;
      const x = 20 + t * 280;
      const y = 180 - Math.pow(t, 1.4) * 140;
      pts.push(`${x},${y}`);
    }
    return "M " + pts.join(" L ");
  }, [progress]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-6 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between glass rounded-2xl p-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-500 font-black text-xl italic tracking-tight", children: "Aviator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "px-2.5 py-1 rounded-full bg-amber-400 text-black text-[10px] font-bold flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "size-3" }),
          " How to play?"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-300", children: "₹ 1,249.21" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "size-7 rounded-md bg-white/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 overflow-x-auto scrollbar-none -mx-1 px-1", children: [
      history.slice(0, 12).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${multColor(r.crash)}`, children: [
        fmt(r.crash),
        "x"
      ] }, r.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "shrink-0 size-7 rounded-full bg-white/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "size-3.5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#1a0d2e] to-[#06030f] h-[260px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-50", children: Array.from({
        length: 18
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[12%] bottom-[18%] origin-bottom-left bg-gradient-to-tr from-rose-600/40 via-rose-500/10 to-transparent", style: {
        width: 400,
        height: 2,
        transform: `rotate(${-i * 4 - 5}deg)`
      } }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 bottom-8 w-px flex flex-col justify-between", children: Array.from({
        length: 6
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-white/40" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 right-3 bottom-6 h-px flex justify-between", children: Array.from({
        length: 12
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-white/40" }, i)) }),
      phase !== "betting" && /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", viewBox: "0 0 320 200", preserveAspectRatio: "none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "grad", x1: "0", x2: "1", y1: "1", y2: "0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#e11d48", stopOpacity: "0.7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#e11d48", stopOpacity: "0.1" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `${path} L ${curveX} 180 L 20 180 Z`, fill: "url(#grad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: path, stroke: "#f43f5e", strokeWidth: "2.5", fill: "none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 grid place-items-center", children: [
        phase === "betting" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-amber-400 text-sm font-bold mb-2", children: "WAITING FOR NEXT ROUND" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-black text-white", children: [
            countdown,
            "s"
          ] })
        ] }),
        phase === "flying" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]", children: [
          fmt(mult),
          "x"
        ] }),
        phase === "crashed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-rose-500 text-sm font-bold tracking-widest", children: "FLEW AWAY!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-black text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.9)]", children: [
            fmt(crashAt.current),
            "x"
          ] })
        ] })
      ] }),
      phase === "flying" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute transition-none", style: {
        left: `${curveX / 320 * 100}%`,
        top: `${curveY / 200 * 100}%`,
        transform: "translate(-50%, -50%) rotate(-20deg)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "size-9 text-rose-500 fill-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" }) })
    ] }),
    [1, 2].map((idx) => {
      const p = idx === 1 ? panel1 : panel2;
      const setP = idx === 1 ? setPanel1 : setPanel2;
      const live = p.bet?.status === "active";
      const won = p.bet?.status === "won";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "py-1.5 rounded-full bg-white/10 text-xs font-bold", children: "Bet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "py-1.5 rounded-full text-xs font-bold text-muted-foreground", children: "Auto" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1.4fr] gap-2 items-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-black/40 rounded-full px-1 py-1 border border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setP({
                ...p,
                amount: Math.max(1, +(p.amount - 1).toFixed(2))
              }), className: "size-7 rounded-full bg-white/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "size-3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-center font-extrabold text-sm", children: fmt(p.amount) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setP({
                ...p,
                amount: +(p.amount + 1).toFixed(2)
              }), className: "size-7 rounded-full bg-white/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 text-[11px] font-bold", children: [1, 2, 5, 10].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setP({
              ...p,
              amount: v
            }), className: "py-1 rounded-md bg-white/5 hover:bg-white/10", children: v.toFixed(2) }, v)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            !p.bet && !p.queued && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => place(idx), className: "w-full h-full min-h-[72px] rounded-2xl bg-gradient-to-b from-emerald-400 to-emerald-600 font-black text-white text-base shadow-card border-2 border-emerald-300/50 tap", children: [
              "BET",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
                fmt(p.amount),
                " INR"
              ] })
            ] }),
            p.queued && !p.bet && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setP({
              ...p,
              queued: false
            }), className: "w-full h-full min-h-[72px] rounded-2xl bg-gradient-to-b from-amber-400 to-orange-500 font-black text-white text-base tap", children: [
              "CANCEL",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Waiting next round" })
            ] }),
            live && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => cashout(idx), className: "w-full h-full min-h-[72px] rounded-2xl bg-gradient-to-b from-amber-400 to-orange-600 font-black text-white text-base tap animate-pulse", children: [
              "CASH OUT",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
                "₹",
                fmt(p.bet.amount * mult)
              ] })
            ] }),
            won && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-[72px] rounded-2xl bg-emerald-500/20 border border-emerald-400/40 grid place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-300 text-xs font-bold", children: [
                "WON @ ",
                fmt(p.bet.multAt),
                "x"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-300 font-black text-lg", children: [
                "+₹",
                fmt(p.bet.cashout)
              ] })
            ] }) }),
            p.bet?.status === "lost" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full min-h-[72px] rounded-2xl bg-rose-500/20 border border-rose-400/40 grid place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-rose-300 font-bold text-sm", children: [
              "Lost ₹",
              fmt(p.bet.amount)
            ] }) })
          ] })
        ] })
      ] }, idx);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-white/10", children: ["All Bets", "My Bets", "Top"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `flex-1 py-2.5 text-xs font-bold ${i === 0 ? "text-white border-b-2 border-rose-500" : "text-muted-foreground"}`, children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 text-[10px] font-bold uppercase text-muted-foreground grid grid-cols-[1.2fr_0.8fr_0.6fr_0.8fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Bet INR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "X" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Cashout" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-64 overflow-y-auto", children: [
        allBets.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-xs text-muted-foreground", children: "Round starting…" }),
        allBets.map((b, i) => {
          const cashed = Math.random() > 0.6 ? +(0.5 + Math.random() * 5).toFixed(2) : null;
          const win = cashed !== null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid grid-cols-[1.2fr_0.8fr_0.6fr_0.8fr] items-center px-3 py-1.5 text-xs border-l-2 ${win ? "bg-emerald-500/10 border-emerald-500" : "border-transparent"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-5 rounded-full bg-grad-primary grid place-items-center text-[8px]", children: "U" }),
              b.user
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right font-mono", children: fmt(b.amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: cashed && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-1.5 py-0.5 rounded text-[10px] font-bold ${multColor(cashed)}`, children: [
              fmt(cashed),
              "x"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right font-mono text-emerald-300", children: cashed ? fmt(b.amount * cashed) : "—" })
          ] }, i);
        })
      ] })
    ] })
  ] });
}
export {
  Aviator as component
};
