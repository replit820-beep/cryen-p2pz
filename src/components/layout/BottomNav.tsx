import { Link, useLocation } from "@tanstack/react-router";
import { Home, Activity, Gift, Wallet, User, Gamepad2 } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/activity", label: "Activity", icon: Activity },
  { to: "/wingo", label: "Game", icon: Gamepad2, center: true },
  { to: "/promotion", label: "Promo", icon: Gift },
  { to: "/account", label: "Account", icon: User },
];

export function BottomNav() {
  const loc = useLocation();
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-30">
      <div className="glass-strong rounded-t-3xl border-t border-primary/40 px-2 pt-2 pb-3">
        <div className="flex items-end justify-between">
          {tabs.map(({ to, label, icon: Icon, center }) => {
            const active = loc.pathname === to;
            if (center) {
              return (
                <Link key={to} to={to} className="-mt-7 tap">
                  <div className={`size-14 rounded-2xl bg-grad-primary grid place-items-center glow ${active ? "animate-pulse-glow" : ""}`}>
                    <Icon className="size-6" />
                  </div>
                  <div className="text-[10px] text-center mt-1 font-medium">{label}</div>
                </Link>
              );
            }
            return (
              <Link key={to} to={to} className="flex-1 flex flex-col items-center gap-1 py-1 tap">
                <Icon className={`size-5 ${active ? "text-primary text-glow" : "text-muted-foreground"}`} />
                <span className={`text-[10px] ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export { tabs };
