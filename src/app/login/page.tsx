"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Fingerprint } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [tab, setTab] = useState<"email" | "passkey">("email");

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>
      {/* Left panel — decorative */}
      <div
        className="hidden lg:flex flex-col justify-between w-[420px] flex-shrink-0 p-14"
        style={{ background: "var(--green)", color: "white" }}
      >
        <Logo size="sm" light />
        <div>
          <p className="font-serif text-[40px] leading-[1.1] font-semibold mb-6">
            Your trusted<br />service network.
          </p>
          <p className="text-[14px] leading-relaxed opacity-75">
            AI-matched providers. Escrow-protected payments. DBS-verified professionals.
          </p>
        </div>
        <p className="text-[11px] opacity-40">© 2026 Trovu Ltd.</p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[400px]">
          <div className="lg:hidden mb-10">
            <Logo size="sm" />
          </div>

          <h1 className="font-serif text-[32px] font-semibold mb-1" style={{ color: "var(--text)" }}>
            Welcome back
          </h1>
          <p className="text-[14px] mb-8" style={{ color: "var(--muted)" }}>
            Sign in to your Trovu account
          </p>

          {/* Tab toggle */}
          <div className="flex gap-1 p-1 rounded-xl mb-8" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            {(["email", "passkey"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 py-2.5 rounded-lg text-[12px] font-semibold tracking-wide transition-all"
                style={{
                  background: tab === t ? "var(--white)" : "transparent",
                  color: tab === t ? "var(--text)" : "var(--muted)",
                  boxShadow: tab === t ? "var(--shadow-sm)" : "none",
                }}
              >
                {t === "email" ? "Email" : "Passkey / Biometric"}
              </button>
            ))}
          </div>

          {tab === "email" ? (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-all"
                  style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>Password</label>
                  <Link href="/forgot-password" className="text-[11px]" style={{ color: "var(--green)" }}>Forgot password?</Link>
                </div>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-xl text-[14px] outline-none transition-all"
                    style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--muted)" }}
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-[13px] font-bold tracking-[0.06em] uppercase text-white transition-all hover:opacity-90 mt-2"
                style={{ background: "var(--green)" }}
              >
                Sign In
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <button
                className="w-full py-4 rounded-xl flex items-center justify-center gap-3 text-[14px] font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--green)", color: "white" }}
              >
                <Fingerprint size={20} />
                Sign in with Passkey / Face ID
              </button>
              <p className="text-[11px] mt-4" style={{ color: "var(--muted)" }}>
                Uses WebAuthn — your biometrics stay on your device
              </p>
            </div>
          )}

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-[11px]" style={{ color: "var(--muted)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>

          <button
            className="w-full py-3.5 rounded-xl border flex items-center justify-center gap-3 text-[13px] font-semibold transition-all hover:opacity-80"
            style={{ border: "1.5px solid var(--border)", color: "var(--text)", background: "var(--white)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" />
              <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" />
              <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z" />
              <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-[13px] mt-8" style={{ color: "var(--muted)" }}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold" style={{ color: "var(--green)" }}>Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
