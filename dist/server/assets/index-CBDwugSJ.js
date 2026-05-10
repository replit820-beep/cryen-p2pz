import { r as reactExports, T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { c as createLucideIcon, W as Wallet, L as Link } from "./router-C4lT9x-3.js";
import { S as SectionTitle } from "./SectionTitle-CNq_epSp.js";
import { C as ChevronRight } from "./chevron-right-za4hDSdj.js";
import { a as ArrowUp, A as ArrowDown } from "./arrow-up-Cg2TYdZc.js";
import { S as Sparkles, T as Trophy } from "./trophy-QyeZE9Zf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M13.744 17.736a6 6 0 1 1-7.48-7.48", key: "bq4yh3" }],
  ["path", { d: "M15 6h1v4", key: "11y1tn" }],
  ["path", { d: "m6.134 14.768.866-.5 2 3.464", key: "17snzx" }],
  ["circle", { cx: "16", cy: "8", r: "6", key: "14bfc9" }]
];
const Coins = createLucideIcon("coins", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const banners = [{
  title: "AR Wallet",
  subtitle: "Top up with ARPay · Quick · Secure · Stable",
  grad: "bg-grad-banner",
  icon: "💎"
}, {
  title: "Welcome Bonus",
  subtitle: "Get up to ₹558 on first deposit",
  grad: "bg-grad-pink",
  icon: "🎁"
}, {
  title: "VIP Cashback",
  subtitle: "Up to 10% daily rebate on every bet",
  grad: "bg-grad-gold",
  icon: "👑"
}];
const categories = ["Popular", "Lottery", "Mini Games", "Slots", "Casino", "Sports", "Fishing"];
const games = [{
  name: "WIN GO",
  tag: "Hot",
  grad: "bg-grad-primary",
  icon: "🎯",
  to: "/wingo"
}, {
  name: "AVIATOR",
  tag: "Live",
  grad: "bg-grad-red",
  icon: "✈️",
  to: "/aviator"
}, {
  name: "CRICKET",
  tag: "New",
  grad: "bg-grad-green",
  icon: "🏏",
  to: "/wingo"
}, {
  name: "PUBG MINI",
  tag: "Hot",
  grad: "bg-grad-blue",
  icon: "🔫",
  to: "/wingo"
}, {
  name: "VORTEX",
  tag: "🔥",
  grad: "bg-grad-pink",
  icon: "🌀",
  to: "/wingo"
}, {
  name: "HOT SPIN",
  tag: "Top",
  grad: "bg-grad-gold",
  icon: "🎰",
  to: "/wingo"
}, {
  name: "FRUIT 777",
  tag: "Hot",
  grad: "bg-grad-red",
  icon: "🍒",
  to: "/wingo"
}, {
  name: "WILDFIRE",
  tag: "New",
  grad: "bg-grad-primary",
  icon: "🔥",
  to: "/wingo"
}, {
  name: "KRAKEN",
  tag: "VIP",
  grad: "bg-grad-blue",
  icon: "🐙",
  to: "/wingo"
}];
const winners = [{
  user: "Rahul***23",
  game: "WinGo 1Min",
  amount: "₹12,540"
}, {
  user: "Priya***88",
  game: "Aviator",
  amount: "₹8,210"
}, {
  user: "Vikram***01",
  game: "Cricket",
  amount: "₹24,910"
}, {
  user: "Anita***77",
  game: "Hot Spin",
  amount: "₹3,455"
}, {
  user: "Karan***12",
  game: "WinGo 30s",
  amount: "₹6,120"
}];
function Home() {
  const [slide, setSlide] = reactExports.useState(0);
  const [cat, setCat] = reactExports.useState(0);
  const [showAnnouncement, setShowAnnouncement] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % banners.length), 3500);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 rounded-3xl overflow-hidden", children: [
      banners.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute inset-0 ${b.grad} p-4 flex items-center justify-between transition-all duration-700 ${i === slide ? "opacity-100 scale-100" : "opacity-0 scale-95"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold text-glow", children: b.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90 mt-1 max-w-[200px]", children: b.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "tap mt-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-semibold border border-white/30", children: [
            "Detail ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "inline size-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-float", children: b.icon })
      ] }, b.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10", children: banners.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-white" : "w-1.5 bg-white/40"}` }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-3 py-2 flex items-center gap-2 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-full bg-grad-pink grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 whitespace-nowrap animate-marquee", children: [...winners, ...winners].map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: w.user }),
        " won ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-bold", style: {
          color: "oklch(0.85 0.16 80)"
        }, children: w.amount }),
        " on ",
        w.game
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
      label: "Wallet",
      value: "₹12,480",
      Icon: Wallet,
      grad: "bg-grad-primary"
    }, {
      label: "Today Win",
      value: "₹2,340",
      Icon: ArrowUp,
      grad: "bg-grad-green"
    }, {
      label: "Today Bet",
      value: "₹890",
      Icon: ArrowDown,
      grad: "bg-grad-red"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-2.5 text-center lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-7 mx-auto rounded-lg ${s.grad} grid place-items-center mb-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "size-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold", children: s.value })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto scrollbar-none -mx-3 px-3", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(i), className: `tap px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${cat === i ? "bg-grad-primary glow border border-primary/60" : "glass text-muted-foreground"}`, children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Lottery", action: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
        " All"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wingo", className: "block lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-primary rounded-2xl p-4 relative overflow-hidden glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: "Color Prediction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold text-glow", children: "Win Go" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90 mt-1", children: "Guess the color & number to win 9x" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl animate-float", children: "🎯" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Popular Games", action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "View all" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: games.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: g.to, className: "lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-32 rounded-2xl ${g.grad} p-3 overflow-hidden border border-white/10 shadow-card`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur border border-white/20", children: g.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-3 right-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1 drop-shadow-lg", children: g.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-sm tracking-wider text-glow", children: g.name })
        ] })
      ] }) }, g.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Winning Information", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "size-4 text-gold", style: {
        color: "oklch(0.85 0.16 80)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: winners.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-grad-primary grid place-items-center text-lg", children: "🏆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: w.user }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            "won at ",
            w.game
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-sm", style: {
            color: "oklch(0.85 0.16 80)"
          }, children: w.amount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "just now" })
        ] })
      ] }, w.user)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-[10px] text-muted-foreground py-4 flex items-center justify-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-3 text-primary" }),
      " Powered by JAI CLUB · Play Responsibly"
    ] }),
    showAnnouncement && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center p-6 bg-black/70 backdrop-blur-sm animate-fade-in", onClick: () => setShowAnnouncement(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong w-full max-w-sm rounded-3xl p-5 neon-border animate-pop-in", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-2xl bg-grad-primary mx-auto grid place-items-center glow mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center text-lg font-extrabold text-glow", children: "Official Announcement" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center mt-2 leading-relaxed", children: "Welcome to JAI CLUB! Enjoy 100% bonus on first deposit. New WinGo 30s game launched with instant payouts." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAnnouncement(false), className: "tap mt-4 w-full py-3 rounded-2xl bg-grad-primary font-bold glow", children: "Confirm" })
    ] }) })
  ] });
}
export {
  Home as component
};
