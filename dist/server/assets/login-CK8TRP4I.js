import { r as reactExports, T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { c as createLucideIcon, u as useNavigate, L as Link } from "./router-C4lT9x-3.js";
import { P as Phone } from "./phone-CRd_Na69.js";
import { L as Lock } from "./lock-BVV5868P.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
function Login() {
  const nav = useNavigate();
  const [u, setU] = reactExports.useState("");
  const [p, setP] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState("");
  const submit = () => {
    if (u.trim() === "vineet" && p === "rndi") {
      try {
        localStorage.setItem("jai_user", u);
      } catch {
      }
      nav({
        to: "/"
      });
    } else {
      setErr("Invalid username or password");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen relative overflow-hidden flex flex-col px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/40 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 -right-20 w-72 h-72 rounded-full blur-3xl", style: {
      background: "oklch(0.62 0.25 320 / 0.3)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-2 animate-float", children: "👑" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black tracking-widest text-glow-blue", children: "JAI CLUB" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Premium Color Trading Platform" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Username / Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 glass rounded-2xl flex items-center px-3 py-3 border border-primary/30 focus-within:neon-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: u, onChange: (e) => setU(e.target.value), className: "flex-1 bg-transparent outline-none text-sm ml-3 placeholder:text-muted-foreground", placeholder: "Enter username" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 glass rounded-2xl flex items-center px-3 py-3 border border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: p, onChange: (e) => setP(e.target.value), type: show ? "text" : "password", className: "flex-1 bg-transparent outline-none text-sm ml-3 placeholder:text-muted-foreground", placeholder: "Enter password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShow(!show), className: "text-muted-foreground", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }) })
        ] })
      ] }),
      err && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-red-400 font-semibold", children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-primary size-3.5" }),
          " Remember me"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary font-semibold", children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, className: "w-full tap text-center py-3.5 rounded-2xl bg-grad-primary font-extrabold glow shadow-card", children: "LOGIN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "block tap text-center py-3.5 rounded-2xl glass border border-primary/40 font-extrabold text-primary", children: "REGISTER" })
    ] })
  ] });
}
export {
  Login as component
};
