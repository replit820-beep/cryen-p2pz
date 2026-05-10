import { T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { L as Link, C as Crown } from "./router-C4lT9x-3.js";
import { A as ArrowLeft } from "./arrow-left-D4afPVtQ.js";
import { C as Check } from "./check-Dq6c6vJU.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const tiers = [{
  l: "VIP 1",
  req: "₹10K",
  cb: "1%",
  salary: "₹100",
  g: "bg-grad-blue"
}, {
  l: "VIP 2",
  req: "₹50K",
  cb: "2%",
  salary: "₹500",
  g: "bg-grad-pink"
}, {
  l: "VIP 3",
  req: "₹2L",
  cb: "3%",
  salary: "₹1.5K",
  g: "bg-grad-primary",
  current: true
}, {
  l: "VIP 4",
  req: "₹10L",
  cb: "5%",
  salary: "₹5K",
  g: "bg-grad-gold"
}, {
  l: "VIP 5",
  req: "₹50L",
  cb: "8%",
  salary: "₹15K",
  g: "bg-grad-red"
}];
function VIP() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/account", className: "tap size-9 rounded-xl glass grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-extrabold text-lg", children: "VIP Center" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-gold rounded-3xl p-5 relative overflow-hidden glow-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "size-7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-glow", children: "Current: VIP 3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-90 mt-1", children: "Total turnover ₹2,45,000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 rounded-full bg-black/30 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-white/80 rounded-full", style: {
          width: "62%"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] opacity-90 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "VIP 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "62% to VIP 4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "VIP 4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-2xl p-4 ${t.g} overflow-hidden lift glow border border-white/10`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer-overlay opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "size-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-glow flex items-center gap-2", children: [
            t.l,
            t.current && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded-full bg-white/30 font-bold", children: "CURRENT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] opacity-90", children: [
            "Turnover required: ",
            t.req
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Cashback: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: t.cb })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Daily: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: t.salary })
          ] })
        ] })
      ] })
    ] }, t.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm mb-2", children: "VIP Benefits" }),
      ["Higher daily withdraw limit", "Exclusive cashback up to 8%", "Daily salary bonus", "Birthday gift", "Priority support 24x7"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 rounded-full bg-primary/20 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3 text-primary" }) }),
        b
      ] }, b))
    ] })
  ] });
}
export {
  VIP as component
};
