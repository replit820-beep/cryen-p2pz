import { T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { c as createLucideIcon, L as Link } from "./router-C4lT9x-3.js";
import { A as ArrowLeft } from "./arrow-left-D4afPVtQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
const __iconNode$1 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
];
const UserRound = createLucideIcon("user-round", __iconNode);
function Withdraw() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wallet", className: "tap size-9 rounded-xl glass grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-extrabold text-lg", children: "Withdraw" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-primary rounded-2xl p-4 glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: "Withdrawable" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-glow", children: "₹10,200.00" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-80 mt-0.5", children: "Bonus locked: ₹2,280" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      [{
        l: "Bank Name",
        I: Building2,
        p: "HDFC Bank"
      }, {
        l: "Account Holder",
        I: UserRound,
        p: "Full name"
      }, {
        l: "Account Number",
        I: Hash,
        p: "XXXX XXXX XXXX"
      }, {
        l: "IFSC Code",
        I: Hash,
        p: "HDFC0001234"
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: f.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 glass rounded-2xl flex items-center px-3 py-3 border border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(f.I, { className: "size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "flex-1 bg-transparent outline-none text-sm ml-3", placeholder: f.p })
        ] })
      ] }, f.l)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 glass rounded-2xl px-4 py-3 flex items-center gap-2 border border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "flex-1 bg-transparent outline-none text-lg font-bold", placeholder: "0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-2", children: [500, 1e3, 5e3, "MAX"].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "tap flex-1 py-1.5 rounded-lg glass text-xs font-semibold", children: typeof a === "number" ? `₹${a}` : a }, a)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "tap w-full py-4 rounded-2xl bg-grad-primary font-extrabold glow text-base", children: "Submit Withdrawal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold mb-2", children: "Recent Withdrawals" }),
      [{
        amt: "₹5,000",
        st: "Success",
        t: "Today 14:22"
      }, {
        amt: "₹2,500",
        st: "Pending",
        t: "Yesterday"
      }, {
        amt: "₹10,000",
        st: "Success",
        t: "8 May"
      }].map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2 border-b border-white/5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: w.amt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: w.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-1 rounded-full font-bold ${w.st === "Success" ? "bg-green-bet/20 text-green-bet" : "bg-gold/20 text-gold"}`, style: {
          color: w.st === "Success" ? "oklch(0.72 0.18 150)" : "oklch(0.85 0.16 80)"
        }, children: w.st })
      ] }, i))
    ] })
  ] });
}
export {
  Withdraw as component
};
