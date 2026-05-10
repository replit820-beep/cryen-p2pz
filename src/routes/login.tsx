import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Phone, Lock, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const nav = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const submit = () => {
    if (u.trim() === "vineet" && p === "rndi") {
      try { localStorage.setItem("jai_user", u); } catch {}
      nav({ to: "/" });
    } else {
      setErr("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-10">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/40 blur-3xl animate-float" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 rounded-full blur-3xl" style={{ background: "oklch(0.62 0.25 320 / 0.3)" }} />

      <div className="relative text-center mt-4">
        <div className="text-5xl mb-2 animate-float">👑</div>
        <h1 className="text-3xl font-black tracking-widest text-glow-blue">JAI CLUB</h1>
        <p className="text-xs text-muted-foreground mt-1">Premium Color Trading Platform</p>
      </div>

      <div className="relative mt-8 space-y-4">
        <div>
          <label className="text-xs text-muted-foreground">Username / Phone</label>
          <div className="mt-1.5 glass rounded-2xl flex items-center px-3 py-3 border border-primary/30 focus-within:neon-border">
            <Phone className="size-4 text-muted-foreground" />
            <input value={u} onChange={(e) => setU(e.target.value)} className="flex-1 bg-transparent outline-none text-sm ml-3 placeholder:text-muted-foreground" placeholder="Enter username" />
          </div>
        </div>

        <div>
          <label className="text-xs text-muted-foreground">Password</label>
          <div className="mt-1.5 glass rounded-2xl flex items-center px-3 py-3 border border-primary/30">
            <Lock className="size-4 text-muted-foreground" />
            <input value={p} onChange={(e) => setP(e.target.value)} type={show ? "text" : "password"} className="flex-1 bg-transparent outline-none text-sm ml-3 placeholder:text-muted-foreground" placeholder="Enter password" />
            <button onClick={() => setShow(!show)} className="text-muted-foreground">
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {err && <div className="text-xs text-red-400 font-semibold">{err}</div>}

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="accent-primary size-3.5" /> Remember me
          </label>
          <a className="text-primary font-semibold">Forgot password?</a>
        </div>

        <button onClick={submit} className="w-full tap text-center py-3.5 rounded-2xl bg-grad-primary font-extrabold glow shadow-card">
          LOGIN
        </button>

        <Link to="/register" className="block tap text-center py-3.5 rounded-2xl glass border border-primary/40 font-extrabold text-primary">
          REGISTER
        </Link>
      </div>
    </div>
  );
}
