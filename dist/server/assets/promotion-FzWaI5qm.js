import { T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { S as SectionTitle } from "./SectionTitle-CNq_epSp.js";
import { c as createLucideIcon } from "./router-C4lT9x-3.js";
import { C as Copy } from "./copy-ffXWrkOL.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode$3);
const __iconNode$2 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function PromotionPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-primary rounded-3xl p-5 relative overflow-hidden glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase opacity-80", children: "Total Commission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black text-glow", children: "₹84,250.00" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-90 mt-1", children: "Earn up to 30% commission per referral" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
      l: "Direct",
      v: "128",
      I: Users,
      g: "bg-grad-blue"
    }, {
      l: "Team",
      v: "1,420",
      I: TrendingUp,
      g: "bg-grad-pink"
    }, {
      l: "Today Earn",
      v: "₹2.4K",
      I: IndianRupee,
      g: "bg-grad-gold"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-9 mx-auto rounded-xl ${s.g} grid place-items-center mb-1.5`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.I, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: s.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-extrabold", children: s.v })
    ] }, s.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-4 neon-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Your invite code" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold tracking-wider text-glow", children: "JAI8842X" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "tap p-2 rounded-xl bg-primary/20 border border-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-4 text-primary" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "tap mt-3 w-full py-3 rounded-2xl bg-grad-primary font-bold glow flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "size-4" }),
        " Share Invite Link"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Commission Levels" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
      l: "Lvl 1",
      v: "30%",
      g: "bg-grad-gold"
    }, {
      l: "Lvl 2",
      v: "20%",
      g: "bg-grad-pink"
    }, {
      l: "Lvl 3",
      v: "10%",
      g: "bg-grad-blue"
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${c.g} rounded-2xl p-3 text-center glow`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: c.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-glow", children: c.v })
    ] }, c.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Recent Referrals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
      user: "Amit***54",
      earn: "₹420",
      time: "2 min ago"
    }, {
      user: "Sneha***22",
      earn: "₹180",
      time: "1 hr ago"
    }, {
      user: "Rohit***91",
      earn: "₹650",
      time: "3 hr ago"
    }, {
      user: "Kiran***08",
      earn: "₹240",
      time: "Yesterday"
    }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-grad-primary grid place-items-center text-sm font-bold", children: r.user[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: r.user }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: r.time })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-sm", style: {
        color: "oklch(0.72 0.18 150)"
      }, children: [
        "+",
        r.earn
      ] })
    ] }, r.user)) })
  ] });
}
export {
  PromotionPage as component
};
