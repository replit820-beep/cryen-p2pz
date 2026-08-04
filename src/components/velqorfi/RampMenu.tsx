import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronRight,
  FileText,
  Globe,
  Home,
  ShieldCheck,
  Repeat,
  X,
} from "lucide-react";
import { BrandMark } from "./BrandMark";
import { PaymentMarks } from "./PaymentMarks";

const CARDS = [
  { icon: Home, label: "Home" },
  { icon: BarChart3, label: "Stocks Holdings" },
  { icon: Repeat, label: "Transactions" },
];

export function RampMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/30"
      />
        <div className="absolute inset-x-0 top-0 mx-auto max-w-[430px] animate-in slide-in-from-top rounded-b-2xl bg-white pb-6 duration-300 ease-out">
        <div className="flex items-center justify-between px-5 pt-6">
           <p className="text-[22px] font-bold text-ink">Menu</p>
          <button onClick={onClose} aria-label="Close menu">
            <X className="h-6 w-6 text-ink" />
          </button>
        </div>

        <div className="mt-6 space-y-4 px-5">
          {CARDS.map((c) => (
            <button
              key={c.label}
              onClick={onClose}
               className="flex w-full items-center gap-4 rounded-lg border border-ramp-line px-4 py-3.5 text-left transition-colors hover:bg-ramp-primary-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <c.icon className="h-5 w-5 text-brand" />
              </span>
               <span className="min-w-0 flex-1 truncate text-[16px] font-semibold text-ink">
                {c.label}
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" />
            </button>
          ))}
        </div>

        <div className="mt-7">
          <div className="flex items-center gap-3 bg-surface-soft px-5 py-4">
            <Globe className="h-5 w-5 shrink-0 text-ink" />
            <span className="min-w-0 flex-1 text-[17px] text-ink">Language</span>
            <span className="shrink-0 text-[15px] text-ink-soft">
              English(US)
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" />
          </div>
          <div className="flex items-center gap-3 px-5 py-4">
            <FileText className="h-5 w-5 shrink-0 text-ink" />
            <span className="min-w-0 flex-1 text-[17px] text-ink">
              Terms of Service
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" />
          </div>
          <div className="flex items-center gap-3 px-5 py-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-ink" />
            <span className="min-w-0 flex-1 text-[17px] text-ink">
              Privacy Policy
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <PaymentMarks />
          <p className="flex items-center gap-1.5 text-[14px] text-ink-soft">
            Powered by
            <Link to="/" className="inline-flex items-center gap-1 font-semibold text-brand">
              <BrandMark />
              Velqorfi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
