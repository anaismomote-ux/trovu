"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, MapPin, Check } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const STEPS = ["Your details", "Location", "Preferences", "Done"];

export default function ClientSignupPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <Logo size="sm" />
        <div className="flex gap-1.5">
          {STEPS.map((_, i) => (
            <div key={i} className="h-1.5 w-8 rounded-full transition-all" style={{ background: i <= step ? "var(--green)" : "var(--border)" }} />
          ))}
        </div>
        <span className="text-[11px]" style={{ color: "var(--muted)" }}>{step + 1}/{STEPS.length}</span>
      </div>

      <div className="max-w-[480px] mx-auto px-6 py-12">
        {step === 0 && (
          <div>
            <h2 className="font-serif text-[30px] font-semibold mb-6" style={{ color: "var(--text)" }}>Create your account</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="First name" placeholder="Amara" />
                <Field label="Last name" placeholder="Diallo" />
              </div>
              <Field label="Email" placeholder="amara@example.com" type="email" />
              <Field label="Phone" placeholder="+44 7700 000000" type="tel" />
              <Field label="Password" placeholder="Min. 8 characters" type="password" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="font-serif text-[30px] font-semibold mb-2" style={{ color: "var(--text)" }}>Where are you based?</h2>
            <p className="text-[13px] mb-6" style={{ color: "var(--muted)" }}>We use this to find providers near you.</p>
            <div className="space-y-4">
              <Field label="Postcode" placeholder="e.g. M1 1AA" />
              <div className="p-4 rounded-xl flex items-center gap-3 cursor-pointer transition-all hover:opacity-80" style={{ background: "var(--green-light)", border: "1px solid var(--green)" }}>
                <MapPin size={16} style={{ color: "var(--green)" }} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--green)" }}>Use my current location</span>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-serif text-[30px] font-semibold mb-2" style={{ color: "var(--text)" }}>What do you need most?</h2>
            <p className="text-[13px] mb-6" style={{ color: "var(--muted)" }}>We&apos;ll personalise your feed.</p>
            <div className="grid grid-cols-2 gap-3">
              {["Beauty & Hair", "Fitness", "Nails & Lashes", "Cleaning", "Childcare", "Photography", "Massage", "Tutoring"].map((s) => (
                <button key={s} className="p-4 rounded-xl border text-[12px] font-semibold text-left transition-all hover:border-[var(--green)]" style={{ background: "var(--white)", borderColor: "var(--border)", color: "var(--body)" }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--green-light)" }}>
              <Check size={36} style={{ color: "var(--green)" }} />
            </div>
            <h2 className="font-serif text-[32px] font-semibold mb-3" style={{ color: "var(--text)" }}>You&apos;re all set!</h2>
            <p className="text-[14px] mb-8" style={{ color: "var(--muted)" }}>Start finding verified providers near you right now.</p>
            <a href="/search" className="block w-full py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white text-center" style={{ background: "var(--green)" }}>
              Find My Provider
            </a>
          </div>
        )}

        {step < 3 && (
          <div className="flex gap-3 mt-10">
            {step > 0 && (
              <button onClick={() => setStep((s) => s - 1)} className="px-6 py-3.5 rounded-xl border flex items-center gap-2 text-[13px] font-semibold" style={{ border: "1.5px solid var(--border)", color: "var(--text)" }}>
                <ArrowLeft size={14} /> Back
              </button>
            )}
            <button onClick={() => setStep((s) => s + 1)} className="flex-1 py-3.5 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white flex items-center justify-center gap-2" style={{ background: "var(--green)" }}>
              Continue <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>{label}</label>
      <input type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl text-[13px] outline-none" style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
        onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
}
