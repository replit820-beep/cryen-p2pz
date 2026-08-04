import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import QRCode from "react-qr-code";
import { Check, Copy, Pointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatBubble } from "@/components/velqorfi/ChatBubble";

const UPI_ID = "wtfvinayak@fam";

export const Route = createFileRoute("/pay")({
  validateSearch: (search: Record<string, unknown>) => ({
    amount: cleanSearchValue(search["amount"], "1500"),
    fiat: cleanSearchValue(search["fiat"], "INR"),
    asset: cleanSearchValue(search["asset"], "USDC"),
    receive: cleanSearchValue(search["receive"], "0"),
  }),
  head: () => ({
    meta: [
      { title: "Complete UPI Payment — Velqorfi" },
      {
        name: "description",
        content:
          "Scan the UPI QR code or copy the UPI ID to complete your Velqorfi crypto order, then submit your 12-digit UTR.",
      },
      { property: "og:title", content: "Complete UPI Payment — Velqorfi" },
      {
        property: "og:description",
        content:
          "Pay with any UPI app and submit your UTR to finish your Velqorfi order.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pay,
});

function cleanSearchValue(value: unknown, fallback: string) {
  if (typeof value !== "string") return fallback;
  return value.replace(/^"|"$/g, "");
}

function Pay() {
  const { amount } = Route.useSearch();
  const value = Number(amount) || 0;
  const [left, setLeft] = useState(600);
  const [copied, setCopied] = useState(false);
  const [utr, setUtr] = useState("");
  const [success, setSuccess] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const payUri = `upi://pay?pa=${UPI_ID}&pn=Velqorfi&am=${value.toFixed(2)}&cu=INR&tn=Velqorfi%20Order`;

  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const saveQr = () => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;
    const blob = new Blob([new XMLSerializer().serializeToString(svg)], {
      type: "image/svg+xml",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `velqorfi-upi-${value}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (success) {
    return (
      <main className="mx-auto min-h-screen max-w-[430px] bg-pay-background font-payment">
        <div className="bg-pay-primary px-6 pb-10 pt-8 text-center">
          <p className="text-[28px] font-bold leading-8 text-brand-foreground">
            ₹{value.toLocaleString("en-IN", { useGrouping: false })} RS
          </p>
          <p className="mt-1 text-[13px] font-normal leading-5 text-brand-foreground/90">
            Payment Amount
          </p>
          <span className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success animate-rise">
            <Check className="h-8 w-8 text-brand-foreground" strokeWidth={3} />
          </span>
          <p className="mt-3 text-[16px] font-semibold text-success">
            Success
          </p>
        </div>
        <ChatBubble />
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-[430px] bg-pay-background pb-10 font-payment">
      <div className="bg-pay-primary px-6 pb-6 pt-8 text-center">
        <p className="text-[28px] font-bold leading-8 text-brand-foreground">
          ₹{value.toLocaleString("en-IN", { useGrouping: false })} RS
        </p>
        <p className="mt-1 text-[13px] font-normal leading-5 text-brand-foreground/90">
          Payment Amount
        </p>
        <p className="mt-4 text-[17px] font-semibold leading-6 text-brand-foreground tabular-nums">
          00:{mm}:{ss}
        </p>
      </div>

      <div className="relative px-5 pt-6 animate-rise">
        <div
          ref={qrRef}
          className="mx-auto w-[220px] rounded-2xl bg-pay-card p-5 shadow-sm"
        >
          <QRCode
            value={payUri}
            size={180}
            className="block h-[180px] w-[180px]"
          />
        </div>
        <div className="mt-3 flex justify-center">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={saveQr}
            className="h-8 rounded-lg border border-pay-line bg-pay-surface px-4 text-[12px] font-medium text-pay-foreground shadow-none hover:bg-pay-surface/80"
          >
            Save QR code
          </Button>
        </div>

        {copied && (
          <div className="pointer-events-none absolute left-1/2 top-[20%] flex h-[128px] w-[220px] -translate-x-1/2 flex-col items-center justify-center gap-3 rounded-xl bg-foreground/85 animate-fade-in">
            <Check className="h-6 w-6 text-brand-foreground" strokeWidth={3} />
            <span className="rounded-lg bg-brand-foreground/10 px-3 py-1 text-[13px] text-brand-foreground">
              Copy success
            </span>
          </div>
        )}

        <p className="mt-6 text-[15px] font-bold leading-5 text-pay-primary">
          Select Payment Method
        </p>

        <div className="mt-5 flex h-14 items-center justify-between rounded-xl border border-pay-line bg-pay-card px-4">
          <span className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pay-card shadow-sm">
              <span className="text-[10px] font-bold leading-none tracking-tight">
                <span className="text-brand-blue">pay</span>
                <span className="text-pay-primary">tm</span>
              </span>
            </span>
            <span className="text-[15px] font-bold text-pay-primary">Paytm</span>
          </span>
          <Pointer className="h-6 w-6 text-brand-blue" />
        </div>

        <Button
          type="button"
          variant="secondary"
          onClick={copy}
          className="mt-5 flex h-14 w-full items-center justify-between rounded-xl border border-pay-line bg-pay-surface px-4 text-left shadow-none hover:bg-pay-surface/80"
        >
          <span className="text-[14px] text-pay-foreground">
            <span className="font-bold">UPI:</span>{" "}
            <span className="font-normal">{UPI_ID}</span>
          </span>
          <Copy className="h-5 w-5 text-pay-foreground/70" />
        </Button>

        <div className="mt-5 flex h-14 overflow-hidden rounded-xl border border-pay-line bg-pay-card focus-within:border-pay-primary">
          <input
            value={utr}
            onChange={(e) => setUtr(e.target.value.replace(/\D/g, ""))}
            inputMode="numeric"
            maxLength={12}
            placeholder="Payment successful enter UTR"
            className="w-full min-w-0 bg-transparent px-4 text-[13px] text-pay-foreground outline-none placeholder:text-pay-foreground/40"
          />
          <Button
            type="button"
            onClick={() => utr.length >= 12 && setSuccess(true)}
            className="h-full shrink-0 rounded-none bg-pay-primary px-6 text-[14px] font-semibold text-brand-foreground shadow-none hover:bg-pay-primary/90 disabled:opacity-60"
            disabled={utr.length < 12}
          >
            Submit
          </Button>
        </div>

        <p className="mt-5 text-[13px] font-semibold text-pay-foreground">
          Notice:
        </p>
        <ol className="mt-2 space-y-2 text-[12px] leading-relaxed text-pay-foreground/90">
          <li>1. Don't pay for the same link repeatedly.</li>
          <li>
            2. Please select the payment method you need and make sure you phone
            has the corresponding wallet software installed.
          </li>
          <li>
            3. After completing the payment, please fill in the 12-digit UTR.
          </li>
        </ol>
      </div>
      <ChatBubble />
    </main>
  );
}
