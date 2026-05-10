import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Lock, ChevronDown, KeyRound, Ticket } from "lucide-react";

export const Route = createFileRoute("/register")({ component: Register });

function Register() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-8">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/40 blur-3xl animate-float" />

      <div className="relative text-center mt-2">
        <div className="text-4xl mb-1">👑</div>
        <h1 className="text-2xl font-black tracking-widest text-glow-blue">CREATE ACCOUNT</h1>
        <p className="text-xs text-muted-foreground mt-1">Join JAI CLUB and get ₹558 bonus</p>
      </div>

      <div className="relative mt-6 space-y-3">
        {[
          { l: "Phone Number", I: Phone, p: "Enter phone", code: true },
          { l: "OTP Code", I: KeyRound, p: "6-digit OTP", otp: true },
          { l: "Password", I: Lock, p: "Set password", type: "password" },
          { l: "Confirm Password", I: Lock, p: "Confirm password", type: "password" },
          { l: "Invite Code", I: Ticket, p: "Optional invite code" },
        ].map((f) => (
          <div key={f.l}>
            <label className="text-xs text-muted-foreground">{f.l}</label>
            <div className="mt-1 glass rounded-2xl flex items-center px-3 py-2.5 border border-primary/30">
              {f.code && (
                <button className="flex items-center gap-1 pr-2 border-r border-white/10">
                  <span className="text-base">🇮🇳</span>
                  <span className="text-xs font-bold">+91</span>
                  <ChevronDown className="size-3" />
                </button>
              )}
              <f.I className="size-4 text-muted-foreground ml-2" />
              <input type={f.type || "text"} className="flex-1 bg-transparent outline-none text-sm ml-2 placeholder:text-muted-foreground" placeholder={f.p} />
              {f.otp && <button className="text-[11px] font-bold text-primary px-2">SEND</button>}
            </div>
          </div>
        ))}

        <div className="text-[11px] text-red-bet leading-snug" style={{ color: "oklch(0.7 0.22 25)" }}>
          ⚠ Password must be 8-16 chars including letters & numbers.
        </div>

        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" defaultChecked className="accent-primary size-4 mt-0.5" />
          <span>I agree to the <span className="text-primary font-semibold">Terms & Conditions</span> and Privacy Policy</span>
        </label>

        <Link to="/" className="block tap text-center py-4 rounded-2xl bg-grad-primary font-extrabold glow text-base">
          REGISTER
        </Link>

        <Link to="/login" className="block text-center text-xs text-muted-foreground">
          Already have an account? <span className="text-primary font-semibold">Login</span>
        </Link>
      </div>
    </div>
  );
}
