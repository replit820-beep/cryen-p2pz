import { Headphones, Send, Disc3, Gift } from "lucide-react";

const actions = [
  { Icon: Headphones, color: "bg-grad-primary", label: "Support" },
  { Icon: Send, color: "bg-grad-blue", label: "Telegram" },
  { Icon: Disc3, color: "bg-grad-gold", label: "Spin" },
  { Icon: Gift, color: "bg-grad-pink", label: "Gift" },
];

export function FloatingActions() {
  return (
    <div className="absolute right-2.5 bottom-32 z-20 flex flex-col gap-2.5">
      {actions.map(({ Icon, color, label }, i) => (
        <button
          key={label}
          className={`tap size-11 rounded-full ${color} grid place-items-center shadow-card border border-white/15 animate-float`}
          style={{ animationDelay: `${i * 0.3}s` }}
          aria-label={label}
        >
          <Icon className="size-5" />
        </button>
      ))}
    </div>
  );
}
