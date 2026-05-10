import { T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { c as createLucideIcon, L as Link, C as Crown, G as Gift, B as Bell, W as Wallet } from "./router-C4lT9x-3.js";
import { S as SectionTitle } from "./SectionTitle-CNq_epSp.js";
import { A as ArrowDown, a as ArrowUp } from "./arrow-up-Cg2TYdZc.js";
import { H as History } from "./history-zpGbX32W.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M13 16H8", key: "wsln4y" }],
  ["path", { d: "M14 8H8", key: "1l3xfs" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
      key: "ycz6yz"
    }
  ]
];
const ReceiptText = createLucideIcon("receipt-text", __iconNode$1);
const __iconNode = [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
];
const ScrollText = createLucideIcon("scroll-text", __iconNode);
function WalletPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl p-5 bg-grad-primary overflow-hidden glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-8 -right-8 text-7xl opacity-20 animate-float", children: "💰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-4 text-4xl opacity-30", children: "🪙" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Total Balance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-black mt-1 text-glow", children: "₹12,480.50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-80 mt-0.5", children: "≈ 0.2154 USDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/deposit", className: "tap flex-1 py-2.5 rounded-xl bg-white/20 backdrop-blur font-bold text-sm border border-white/30 flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-4" }),
            " Deposit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/withdraw", className: "tap flex-1 py-2.5 rounded-xl bg-white/20 backdrop-blur font-bold text-sm border border-white/30 flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "size-4" }),
            " Withdraw"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
      l: "Main Wallet",
      v: "₹10,200"
    }, {
      l: "Bonus",
      v: "₹1,580"
    }, {
      l: "Locked",
      v: "₹700"
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: b.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-extrabold mt-1", children: b.v })
    ] }, b.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: [{
      l: "Deposit",
      I: ArrowDown,
      g: "bg-grad-green",
      to: "/deposit"
    }, {
      l: "Withdraw",
      I: ArrowUp,
      g: "bg-grad-red",
      to: "/withdraw"
    }, {
      l: "VIP",
      I: Crown,
      g: "bg-grad-gold",
      to: "/vip"
    }, {
      l: "Gifts",
      I: Gift,
      g: "bg-grad-pink",
      to: "/promotion"
    }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: m.to, className: "tap glass rounded-2xl p-3 flex flex-col items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-xl ${m.g} grid place-items-center glow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(m.I, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold", children: m.l })
    ] }, m.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Records" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
      l: "Game History",
      d: "Bets, wins & losses",
      I: History,
      g: "bg-grad-primary"
    }, {
      l: "Deposit History",
      d: "All your deposits",
      I: ArrowDown,
      g: "bg-grad-green"
    }, {
      l: "Withdraw History",
      d: "All your withdrawals",
      I: ArrowUp,
      g: "bg-grad-red"
    }, {
      l: "Transactions",
      d: "Full transaction log",
      I: ReceiptText,
      g: "bg-grad-blue"
    }, {
      l: "Notifications",
      d: "System alerts & news",
      I: Bell,
      g: "bg-grad-pink"
    }, {
      l: "Statements",
      d: "Monthly statements",
      I: ScrollText,
      g: "bg-grad-gold"
    }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3 flex items-center gap-3 lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-11 rounded-xl ${r.g} grid place-items-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.I, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: r.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: r.d })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "size-4 text-muted-foreground" })
    ] }, r.l)) })
  ] });
}
export {
  WalletPage as component
};
