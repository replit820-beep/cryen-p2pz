import { T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { S as SectionTitle } from "./SectionTitle-CNq_epSp.js";
import { S as Sparkles, T as Trophy } from "./trophy-QyeZE9Zf.js";
import { c as createLucideIcon, D as Disc3, G as Gift } from "./router-C4lT9x-3.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const events = [{
  l: "Lucky Spin",
  d: "Spin daily for free rewards",
  I: Disc3,
  g: "bg-grad-gold",
  reward: "₹5,000"
}, {
  l: "Daily Cashback",
  d: "Get up to 10% cashback",
  I: Gift,
  g: "bg-grad-pink",
  reward: "10%"
}, {
  l: "Daily Bonus",
  d: "Login 7 days for bonus",
  I: Calendar,
  g: "bg-grad-primary",
  reward: "₹500"
}, {
  l: "Missions",
  d: "Complete tasks to earn",
  I: Target,
  g: "bg-grad-blue",
  reward: "₹1,200"
}, {
  l: "Tournament",
  d: "WinGo championship",
  I: Trophy,
  g: "bg-grad-green",
  reward: "₹50,000"
}];
function ActivityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-pink rounded-3xl p-5 relative overflow-hidden glow-pink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase opacity-80", children: "Activity Center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-glow", children: "Win Big Daily" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90 mt-1", children: "Up to ₹50,000 in daily rewards" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl animate-float", children: "🎁" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Featured Events", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-4 flex items-center gap-3 lift border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-14 rounded-2xl ${e.g} grid place-items-center glow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(e.I, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: e.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: e.d }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] mt-1 inline-block px-2 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold", children: [
          "Up to ",
          e.reward
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "tap px-4 py-2 rounded-xl bg-grad-primary text-xs font-bold glow", children: "Join" })
    ] }, e.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Daily Check-In" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1.5", children: Array.from({
        length: 7
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square rounded-xl grid place-items-center text-[10px] font-bold ${i < 3 ? "bg-grad-primary glow" : "glass border border-white/10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "D",
        i + 1
      ] }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "tap mt-3 w-full py-3 rounded-2xl bg-grad-primary font-extrabold glow", children: "Check In Today (+₹50)" })
    ] })
  ] });
}
export {
  ActivityPage as component
};
