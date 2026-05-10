import { r as reactExports, T as jsxRuntimeExports } from "./server-DCz9Nw-t.js";
import { c as createLucideIcon, L as Link } from "./router-C4lT9x-3.js";
import { A as ArrowLeft } from "./arrow-left-D4afPVtQ.js";
import { C as Check } from "./check-Dq6c6vJU.js";
import { X, C as Clock } from "./x-CkkHK2Kp.js";
import { C as Copy } from "./copy-ffXWrkOL.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
      key: "7w4byz"
    }
  ],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
];
const Gem = createLucideIcon("gem", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
];
const Landmark = createLucideIcon("landmark", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const UPI_ID = "wtfvinayak@fam";
const TG_BOT = "8477452399:AAHg5m0RqqniilnnsWh7jhRZJC5XUL1b4rE";
const TG_CHAT = "7774182348";
const methods = [{
  l: "UPI",
  short: "UPI",
  g: "bg-grad-primary",
  Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-white grid place-items-center font-black text-[11px] text-[#097939]", children: "UPI" })
}, {
  l: "Paytm",
  short: "Paytm",
  g: "bg-grad-blue",
  Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-white grid place-items-center font-black text-[10px] text-[#00BAF2]", children: "paytm" })
}, {
  l: "PhonePe",
  short: "PhonePe",
  g: "bg-grad-pink",
  Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-[#5f259f] grid place-items-center font-black text-[9px] text-white", children: "PhonePe" })
}, {
  l: "Google Pay",
  short: "GPay",
  g: "bg-grad-green",
  Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-white grid place-items-center font-black text-[10px] text-[#1a73e8]", children: "G Pay" })
}, {
  l: "USDT",
  short: "USDT",
  g: "bg-grad-gold",
  Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-white grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "size-5 text-[#26A17B]" }) })
}, {
  l: "Bank",
  short: "Bank",
  g: "bg-grad-red",
  Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-xl bg-white grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "size-5 text-[#b91c1c]" }) })
}];
const amounts = [100, 500, 1e3, 2e3, 5e3, 1e4, 25e3, 5e4];
async function notifyTelegram(text, replyMarkup) {
  try {
    await fetch(`https://api.telegram.org/bot${TG_BOT}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: TG_CHAT,
        text,
        parse_mode: "HTML",
        ...replyMarkup ? {
          reply_markup: replyMarkup
        } : {}
      })
    });
  } catch (e) {
    console.error(e);
  }
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
async function pollForDecision(orderId, signal) {
  let offset = 0;
  while (!signal.aborted) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${TG_BOT}/getUpdates?offset=${offset}&timeout=20&allowed_updates=["callback_query"]`, {
        signal
      });
      if (!res.ok) {
        await sleep(3e3);
        continue;
      }
      const data = await res.json();
      if (!data.ok || !data.result?.length) {
        continue;
      }
      for (const upd of data.result) {
        offset = upd.update_id + 1;
        const cb = upd.callback_query;
        if (!cb) continue;
        const cbData = cb.data ?? "";
        if (cbData === `approve_${orderId}`) {
          fetch(`https://api.telegram.org/bot${TG_BOT}/answerCallbackQuery`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              callback_query_id: cb.id,
              text: "✅ Approved!"
            })
          });
          return "approved";
        }
        if (cbData === `reject_${orderId}`) {
          fetch(`https://api.telegram.org/bot${TG_BOT}/answerCallbackQuery`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              callback_query_id: cb.id,
              text: "❌ Rejected!"
            })
          });
          return "rejected";
        }
      }
    } catch (err) {
      if (err?.name === "AbortError") break;
      await sleep(3e3);
    }
  }
  return null;
}
function Deposit() {
  const [m, setM] = reactExports.useState(0);
  const [amt, setAmt] = reactExports.useState(500);
  const [pay, setPay] = reactExports.useState(null);
  const startPay = () => {
    if (amt < 100) return;
    const orderId = "JAI" + Date.now().toString().slice(-8);
    setPay({
      amount: amt,
      method: methods[m].l,
      orderId
    });
    notifyTelegram(`🆕 <b>New Deposit Request</b>

💰 Amount: <b>₹${amt}</b>
💳 Method: ${methods[m].l}
🆔 Order: <code>${orderId}</code>
📲 UPI: <code>${UPI_ID}</code>
⏰ ${(/* @__PURE__ */ new Date()).toLocaleString("en-IN")}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 space-y-4 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wallet", className: "tap size-9 rounded-xl glass grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-extrabold text-lg", children: "Deposit" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Available Balance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-glow", children: "₹12,480.50" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Choose payment method" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2.5", children: methods.map((mm, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setM(i), className: `relative tap rounded-2xl p-3 flex flex-col items-center gap-2 ${mm.g} ${i === m ? "neon-border scale-[1.03]" : "opacity-85"} transition`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(mm.Icon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold", children: mm.l }),
        i === m && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 -right-1.5 size-5 rounded-full bg-primary grid place-items-center border-2 border-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) })
      ] }, mm.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Quick amount" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: amounts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAmt(a), className: `tap py-2.5 rounded-xl text-xs font-bold ${amt === a ? "bg-grad-primary glow" : "glass"}`, children: [
        "₹",
        a
      ] }, a)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 glass rounded-2xl px-4 py-3 flex items-center gap-2 border border-primary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "₹" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: amt, onChange: (e) => setAmt(Number(e.target.value) || 0), className: "flex-1 bg-transparent outline-none text-lg font-bold" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-pink rounded-2xl p-3 glow-pink shimmer-overlay", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: "🎁 First Deposit Bonus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-90", children: "Get extra 100% bonus up to ₹558" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: startPay, className: "tap w-full py-4 rounded-2xl bg-grad-primary font-extrabold glow text-base", children: [
      "Deposit ₹",
      amt
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground text-center leading-relaxed", children: "Min ₹100 · Max ₹2,00,000 · Instant credit · 24x7 support" }),
    pay && /* @__PURE__ */ jsxRuntimeExports.jsx(PayModal, { data: pay, onClose: () => setPay(null) })
  ] });
}
function PayModal({
  data,
  onClose
}) {
  const [left, setLeft] = reactExports.useState(300);
  const [copied, setCopied] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [utr, setUtr] = reactExports.useState("");
  const [decision, setDecision] = reactExports.useState("pending");
  const abortRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (left <= 0) return;
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1e3);
    return () => clearInterval(t);
  }, [left]);
  reactExports.useEffect(() => {
    if (!submitted) return;
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    pollForDecision(data.orderId, ctrl.signal).then((result) => {
      if (result) setDecision(result);
    });
    return () => ctrl.abort();
  }, [submitted, data.orderId]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const copy = (val, k) => {
    try {
      navigator.clipboard.writeText(val);
      setCopied(k);
      setTimeout(() => setCopied(null), 1500);
    } catch {
    }
  };
  const upiLink = `upi://pay?pa=${UPI_ID}&pn=JAI%20CLUB&am=${data.amount}&cu=INR&tn=${data.orderId}`;
  const submit = async () => {
    if (!utr || utr.length < 6) return;
    setSubmitted(true);
    await notifyTelegram(`💳 <b>Payment Submitted — Action Required</b>

🆔 Order: <code>${data.orderId}</code>
💰 Amount: <b>₹${data.amount}</b>
💳 Method: ${data.method}
🔢 UTR: <code>${utr}</code>
⏰ ${(/* @__PURE__ */ new Date()).toLocaleString("en-IN")}

<i>Tap below to approve or reject:</i>`, {
      inline_keyboard: [[{
        text: "✅ APPROVE",
        callback_data: `approve_${data.orderId}`
      }, {
        text: "❌ REJECT",
        callback_data: `reject_${data.orderId}`
      }]]
    });
  };
  const handleClose = () => {
    abortRef.current?.abort();
    onClose();
  };
  const approved = decision === "approved";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl", style: {
    background: "linear-gradient(180deg, #1a1230, #0d0a1f)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-grad-primary px-5 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-90", children: "Pay to" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-lg", children: "JAI CLUB Merchant" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleClose, className: "size-8 rounded-full bg-black/30 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) })
    ] }),
    !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Amount to Pay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-glow my-1", children: [
          "₹",
          data.amount
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-xs glass px-3 py-1 rounded-full border border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
            mm,
            ":",
            ss
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "remaining" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-4 space-y-3 border border-primary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "UPI ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-base", children: UPI_ID }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => copy(UPI_ID, "upi"), className: "tap shrink-0 px-3 py-1.5 rounded-lg bg-grad-primary text-xs font-bold flex items-center gap-1", children: copied === "upi" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }),
              " Copied"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3" }),
              " Copy"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Order ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: data.orderId }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => copy(data.orderId, "oid"), className: "tap shrink-0 px-2.5 py-1 rounded-lg glass text-xs font-bold flex items-center gap-1", children: copied === "oid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: upiLink, className: "block tap w-full py-3.5 rounded-2xl bg-grad-primary font-extrabold glow text-center text-sm flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "size-4" }),
        " Pay via UPI App"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground text-center", children: [
        "Pay ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-foreground", children: [
          "₹",
          data.amount
        ] }),
        " to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-primary", children: UPI_ID }),
        " then enter UTR below"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "UTR / Transaction ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: utr, onChange: (e) => setUtr(e.target.value), placeholder: "12-digit UTR number", className: "mt-1 w-full glass rounded-2xl px-4 py-3 text-sm font-bold outline-none border border-primary/30 placeholder:text-muted-foreground" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, disabled: utr.length < 6, className: "tap w-full py-3.5 rounded-2xl bg-grad-green font-extrabold disabled:opacity-40 text-sm", children: "I HAVE PAID — SUBMIT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground text-center leading-relaxed", children: "⚠ Pay exact amount only. Wrong amount = no credit. Balance updates within 1-5 minutes." })
    ] }) : decision === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-grad-primary grid place-items-center mx-auto glow animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-9" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-xl", children: "Waiting for Approval..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        "Your deposit of ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { className: "text-foreground", children: [
          "₹",
          data.amount
        ] }),
        " is being reviewed. Please wait."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-3 text-xs space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: data.orderId })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "UTR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: utr })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-yellow-400 animate-pulse", children: "⏳ PENDING" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2 rounded-full bg-yellow-400 animate-ping" }),
        "Checking approval in real-time..."
      ] })
    ] }) : (
      // Decision result
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center space-y-4", children: [
        approved ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-full bg-grad-green grid place-items-center mx-auto glow-green animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-11 text-white" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-full grid place-items-center mx-auto", style: {
          background: "linear-gradient(135deg, #dc2626, #b91c1c)",
          boxShadow: "0 0 30px rgba(239,68,68,0.5)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "size-11 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-black text-2xl ${approved ? "text-green-400" : "text-red-400"}`, children: approved ? "Payment Approved! 🎉" : "Payment Rejected ❌" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: approved ? `₹${data.amount} has been credited to your wallet. Enjoy!` : `Your deposit of ₹${data.amount} was rejected. Contact support with UTR: ${utr}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-3 text-xs space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: data.orderId })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
              "₹",
              data.amount
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: approved ? "text-green-400" : "text-red-400", children: approved ? "✅ SUCCESS" : "❌ FAILED" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleClose, className: `tap w-full py-3 rounded-2xl font-extrabold text-sm ${approved ? "bg-grad-green" : "bg-grad-red"}`, children: approved ? "DONE 🎊" : "CLOSE" })
      ] })
    )
  ] }) });
}
export {
  Deposit as component
};
