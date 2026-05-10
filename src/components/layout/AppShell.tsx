import { Outlet, useLocation } from "@tanstack/react-router";
import { TopHeader } from "./TopHeader";
import { BottomNav } from "./BottomNav";
import { FloatingActions } from "./FloatingActions";

const HIDE_CHROME = ["/login", "/register", "/splash"];

export function AppShell() {
  const loc = useLocation();
  const hide = HIDE_CHROME.some((p) => loc.pathname.startsWith(p));

  return (
    <div className="min-h-screen w-full flex justify-center md:p-6">
      <div className="relative w-full max-w-[420px] min-h-screen md:min-h-[900px] md:max-h-[900px] md:rounded-[2.2rem] overflow-hidden bg-background shadow-card border border-white/5 flex flex-col">
        {/* ambient lights */}
        <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 w-72 h-72 rounded-full bg-pink/20 blur-3xl" style={{ background: "oklch(0.62 0.25 320 / 0.25)" }} />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-bluebet/20 blur-3xl" style={{ background: "oklch(0.5 0.2 270 / 0.25)" }} />

        {!hide && <TopHeader />}
        <main className="relative flex-1 overflow-y-auto scrollbar-none pb-28 animate-fade-in">
          <Outlet />
        </main>
        {!hide && <FloatingActions />}
        {!hide && <BottomNav />}
      </div>
    </div>
  );
}
