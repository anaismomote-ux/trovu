"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Briefcase, ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export default function SignupPage() {
  const [role, setRole] = useState<"client" | "provider" | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-10">
          <Logo size="sm" className="justify-center mb-6" />
          <h1 className="font-serif text-[32px] font-semibold mb-2" style={{ color: "var(--text)" }}>
            Join Trovu
          </h1>
          <p className="text-[14px]" style={{ color: "var(--muted)" }}>
            How are you using Trovu?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            {
              key: "client" as const,
              icon: <Sparkles size={24} />,
              title: "I need services",
              sub: "Find and book verified providers near me",
              perks: ["AI-matched instantly", "Escrow protection", "DBS-verified pros"],
            },
            {
              key: "provider" as const,
              icon: <Briefcase size={24} />,
              title: "I offer services",
              sub: "Grow my client base and earn more",
              perks: ["Uber-style broadcasts", "Direct bookings", "Same-day payouts"],
            },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setRole(opt.key)}
              className="relative p-6 rounded-2xl border-2 text-left transition-all"
              style={{
                background: role === opt.key ? "var(--green-light)" : "var(--white)",
                borderColor: role === opt.key ? "var(--green)" : "var(--border)",
              }}
            >
              {role === opt.key && (
                <span
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "var(--green)" }}
                >
                  <Check size={11} color="white" />
                </span>
              )}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: role === opt.key ? "var(--green)" : "var(--surface-2)", color: role === opt.key ? "white" : "var(--green)" }}
              >
                {opt.icon}
              </div>
              <p className="font-serif text-[16px] font-semibold mb-1" style={{ color: "var(--text)" }}>{opt.title}</p>
              <p className="text-[11px] leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{opt.sub}</p>
              <ul className="space-y-1.5">
                {opt.perks.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--body)" }}>
                    <Check size={10} style={{ color: "var(--green)" }} />
                    {p}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <Link
          href={role === "provider" ? "/signup/provider" : role === "client" ? "/signup/client" : "#"}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-[13px] font-bold tracking-[0.06em] uppercase text-white transition-all ${!role ? "opacity-40 pointer-events-none" : "hover:opacity-90"}`}
          style={{ background: "var(--green)" }}
        >
          Continue as {role === "provider" ? "Provider" : role === "client" ? "Client" : "..."}
          <ArrowRight size={14} />
        </Link>

        <p className="text-center text-[12px] mt-6" style={{ color: "var(--muted)" }}>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold" style={{ color: "var(--green)" }}>Sign in</Link>
        </p>

        <p className="text-center text-[10px] mt-4" style={{ color: "var(--muted)" }}>
          By continuing you agree to our{" "}
          <Link href="/terms" style={{ color: "var(--green)" }}>Terms</Link> and{" "}
          <Link href="/privacy" style={{ color: "var(--green)" }}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
