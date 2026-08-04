import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const NAV = [
  { label: "Products", to: "/" },
  { label: "Solutions", to: "/" },
  { label: "Developers", to: "/" },
  { label: "Company", to: "/" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" aria-label="Velqorfi home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="text-sm font-medium text-white/85 hover:text-white"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/ramp"
            search={{ fiat: "INR", crypto: "USDC", amount: "5000" }}
            className="rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white"
          >
            Launch app
          </Link>
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}
