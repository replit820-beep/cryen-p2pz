import { T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { c as createLucideIcon, L as Link } from "./router-C4lT9x-3.js";
import { P as Phone } from "./phone-CRd_Na69.js";
import { L as Lock } from "./lock-BVV5868P.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
];
const Ticket = createLucideIcon("ticket", __iconNode);
function Register() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-1", children: "👑" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black tracking-widest text-glow-blue", children: "CREATE ACCOUNT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Join JAI CLUB and get ₹558 bonus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 space-y-3", children: [
      [{
        l: "Phone Number",
        I: Phone,
        p: "Enter phone",
        code: true
      }, {
        l: "OTP Code",
        I: KeyRound,
        p: "6-digit OTP",
        otp: true
      }, {
        l: "Password",
        I: Lock,
        p: "Set password",
        type: "password"
      }, {
        l: "Confirm Password",
        I: Lock,
        p: "Confirm password",
        type: "password"
      }, {
        l: "Invite Code",
        I: Ticket,
        p: "Optional invite code"
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: f.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 glass rounded-2xl flex items-center px-3 py-2.5 border border-primary/30", children: [
          f.code && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 pr-2 border-r border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🇮🇳" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "+91" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(f.I, { className: "size-4 text-muted-foreground ml-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: f.type || "text", className: "flex-1 bg-transparent outline-none text-sm ml-2 placeholder:text-muted-foreground", placeholder: f.p }),
          f.otp && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[11px] font-bold text-primary px-2", children: "SEND" })
        ] })
      ] }, f.l)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-red-bet leading-snug", style: {
        color: "oklch(0.7 0.22 25)"
      }, children: "⚠ Password must be 8-16 chars including letters & numbers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "accent-primary size-4 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "I agree to the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "Terms & Conditions" }),
          " and Privacy Policy"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "block tap text-center py-4 rounded-2xl bg-grad-primary font-extrabold glow text-base", children: "REGISTER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "block text-center text-xs text-muted-foreground", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "Login" })
      ] })
    ] })
  ] });
}
export {
  Register as component
};
