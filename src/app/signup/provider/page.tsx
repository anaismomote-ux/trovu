"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Upload, MapPin, Clock, Shield, Camera } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const STEPS = [
  { n: 1, label: "Your info" },
  { n: 2, label: "Services" },
  { n: 3, label: "Location" },
  { n: 4, label: "Availability" },
  { n: 5, label: "Verification" },
  { n: 6, label: "Go live" },
];

const SERVICES = [
  "Beauty & Hair", "Nails & Lashes", "Fitness & PT", "Massage & Wellness",
  "Childcare", "Cleaning", "Photography", "Tutoring", "Pet Care", "Automotive",
  "Gardening", "Home Repairs", "Makeup Artist", "Nutrition & Diet",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ProviderSignupPage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>(["Mon", "Tue", "Wed", "Thu", "Fri"]);
  const [broadcastMode, setBroadcastMode] = useState(true);

  const toggleService = (s: string) =>
    setSelectedServices((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);
  const toggleDay = (d: string) =>
    setSelectedDays((p) => p.includes(d) ? p.filter((x) => x !== d) : [...p, d]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <Logo size="sm" />
        <div className="flex items-center gap-2">
          {STEPS.map((s) => (
            <div key={s.n} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all"
                style={{
                  background: step > s.n ? "var(--green)" : step === s.n ? "var(--green)" : "var(--surface-2)",
                  color: step >= s.n ? "white" : "var(--muted)",
                }}
              >
                {step > s.n ? <Check size={12} /> : s.n}
              </div>
              {s.n < STEPS.length && (
                <div className="w-6 h-px hidden sm:block" style={{ background: step > s.n ? "var(--green)" : "var(--border)" }} />
              )}
            </div>
          ))}
        </div>
        <span className="text-[11px]" style={{ color: "var(--muted)" }}>Step {step} of {STEPS.length}</span>
      </div>

      <div className="max-w-[560px] mx-auto px-6 py-12">
        {/* Step 1 — Basic info */}
        {step === 1 && (
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>Step 1</p>
            <h2 className="font-serif text-[32px] font-semibold mb-8" style={{ color: "var(--text)" }}>Tell us about yourself</h2>

            {/* Avatar upload */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:opacity-80" style={{ background: "var(--green-light)", border: "2px dashed var(--green)" }}>
                <Camera size={24} style={{ color: "var(--green)" }} />
              </div>
              <div>
                <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--text)" }}>Add a profile photo</p>
                <p className="text-[11px]" style={{ color: "var(--muted)" }}>Clear, professional headshot recommended</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="First name" placeholder="Jasmine" />
                <Field label="Last name" placeholder="Clarke" />
              </div>
              <Field label="Professional title" placeholder="e.g. Natural Hair Specialist" />
              <Field label="Email address" type="email" placeholder="you@example.com" />
              <Field label="Phone number" type="tel" placeholder="+44 7700 000000" />
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Bio</label>
                <textarea
                  rows={4}
                  placeholder="Tell clients what makes you great..."
                  className="w-full px-4 py-3 rounded-xl text-[13px] outline-none resize-none transition-all"
                  style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Services */}
        {step === 2 && (
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>Step 2</p>
            <h2 className="font-serif text-[32px] font-semibold mb-2" style={{ color: "var(--text)" }}>What do you offer?</h2>
            <p className="text-[13px] mb-8" style={{ color: "var(--muted)" }}>Select all categories that apply. You can customise individual services later.</p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleService(s)}
                  className="px-4 py-2 rounded-full text-[12px] font-semibold border transition-all"
                  style={{
                    background: selectedServices.includes(s) ? "var(--green)" : "var(--white)",
                    borderColor: selectedServices.includes(s) ? "var(--green)" : "var(--border)",
                    color: selectedServices.includes(s) ? "white" : "var(--body)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            <Field label="Starting price (£)" type="number" placeholder="e.g. 80" />
          </div>
        )}

        {/* Step 3 — Location */}
        {step === 3 && (
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>Step 3</p>
            <h2 className="font-serif text-[32px] font-semibold mb-2" style={{ color: "var(--text)" }}>Where do you operate?</h2>
            <p className="text-[13px] mb-8" style={{ color: "var(--muted)" }}>We use this to match you with nearby broadcast requests.</p>

            <div className="space-y-4">
              <Field label="Your base postcode" placeholder="e.g. M1 1AA" />
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Maximum travel radius</label>
                <div className="flex gap-2">
                  {["3 mi", "5 mi", "10 mi", "15 mi", "20+ mi"].map((r) => (
                    <button key={r} className="flex-1 py-2.5 rounded-xl text-[11px] font-semibold border transition-all" style={{ background: r === "5 mi" ? "var(--green)" : "var(--white)", borderColor: r === "5 mi" ? "var(--green)" : "var(--border)", color: r === "5 mi" ? "white" : "var(--body)" }}>
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl flex items-start gap-3" style={{ background: "var(--green-light)", border: "1px solid var(--green)" }}>
                <MapPin size={16} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} />
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--green-deep)" }}>
                  Broadcasts within your radius will ping your phone in real-time. First to accept wins the job.
                </p>
              </div>

              <div>
                <label className="block text-[12px] font-semibold mb-3" style={{ color: "var(--text)" }}>Service type</label>
                <div className="grid grid-cols-2 gap-3">
                  {[["Mobile — I go to clients", true], ["Studio — clients come to me", false]].map(([label, active]) => (
                    <button key={String(label)} className="p-4 rounded-xl border text-left transition-all" style={{ background: active ? "var(--green-light)" : "var(--white)", borderColor: active ? "var(--green)" : "var(--border)" }}>
                      <p className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>{String(label)}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4 — Availability */}
        {step === 4 && (
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>Step 4</p>
            <h2 className="font-serif text-[32px] font-semibold mb-2" style={{ color: "var(--text)" }}>Your availability</h2>
            <p className="text-[13px] mb-8" style={{ color: "var(--muted)" }}>Set your typical working days and hours. You can adjust anytime.</p>

            <div className="flex gap-2 mb-6 flex-wrap">
              {DAYS.map((d) => (
                <button
                  key={d}
                  onClick={() => toggleDay(d)}
                  className="w-12 h-12 rounded-xl text-[12px] font-bold border transition-all"
                  style={{
                    background: selectedDays.includes(d) ? "var(--green)" : "var(--white)",
                    borderColor: selectedDays.includes(d) ? "var(--green)" : "var(--border)",
                    color: selectedDays.includes(d) ? "white" : "var(--muted)",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Start time</label>
                <select className="w-full px-4 py-3 rounded-xl text-[13px] outline-none" style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
                  {["08:00", "09:00", "10:00", "11:00"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>End time</label>
                <select className="w-full px-4 py-3 rounded-xl text-[13px] outline-none" style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
                  {["17:00", "18:00", "19:00", "20:00", "21:00"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Broadcast toggle */}
            <div className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Clock size={16} style={{ color: "var(--green)" }} />
                  <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>Broadcast mode (Go Online)</p>
                </div>
                <button
                  onClick={() => setBroadcastMode(!broadcastMode)}
                  className="w-11 h-6 rounded-full transition-all relative"
                  style={{ background: broadcastMode ? "var(--green)" : "var(--border)" }}
                >
                  <span
                    className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
                    style={{ left: broadcastMode ? "calc(100% - 20px)" : "4px" }}
                  />
                </button>
              </div>
              <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                When online, you&apos;ll receive real-time pings for nearby requests. Accept in 45 seconds — first to respond wins.
              </p>
            </div>
          </div>
        )}

        {/* Step 5 — Verification */}
        {step === 5 && (
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>Step 5</p>
            <h2 className="font-serif text-[32px] font-semibold mb-2" style={{ color: "var(--text)" }}>Verify your identity</h2>
            <p className="text-[13px] mb-8" style={{ color: "var(--muted)" }}>Verification builds trust and unlocks more clients. Start with T1 to get listed.</p>

            <div className="space-y-3">
              {[
                { tier: "T1", label: "ID Verification", sub: "Passport or driving licence + selfie", price: "Free", required: true },
                { tier: "T2", label: "Home Access + Basic DBS", sub: "Required for services in client homes", price: "£21.50", required: false },
                { tier: "T3", label: "Trade Certification", sub: "Upload relevant qualifications", price: "Free", required: false },
                { tier: "T4", label: "Enhanced DBS", sub: "Required for childcare & vulnerable adults", price: "£49.50", required: false },
              ].map((v) => (
                <div
                  key={v.tier}
                  className="p-5 rounded-xl border flex items-start gap-4"
                  style={{ background: v.required ? "var(--green-light)" : "var(--white)", borderColor: v.required ? "var(--green)" : "var(--border)" }}
                >
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0" style={{ background: v.required ? "var(--green)" : "var(--surface-2)", color: v.required ? "white" : "var(--muted)" }}>
                    {v.tier}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>{v.label}</p>
                      {v.required && <span className="text-[9px] font-bold tracking-wide px-2 py-0.5 rounded-full" style={{ background: "var(--green)", color: "white" }}>REQUIRED</span>}
                    </div>
                    <p className="text-[11px]" style={{ color: "var(--muted)" }}>{v.sub}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>{v.price}</p>
                    <button className="mt-2 text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg transition-all" style={{ background: "var(--green)", color: "white" }}>
                      {v.required ? "Start" : "Add"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 6 — Go live */}
        {step === 6 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--green-light)" }}>
              <Shield size={36} style={{ color: "var(--green)" }} />
            </div>
            <h2 className="font-serif text-[36px] font-semibold mb-3" style={{ color: "var(--text)" }}>You&apos;re almost live!</h2>
            <p className="text-[14px] mb-8 max-w-[360px] mx-auto" style={{ color: "var(--muted)" }}>
              We&apos;re reviewing your profile. Once approved (usually within 2 hours), you can go online and start receiving bookings.
            </p>
            <div className="p-5 rounded-2xl text-left mb-8" style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}>
              {[
                ["Profile complete", true],
                ["Services added", true],
                ["Location set", true],
                ["T1 verification submitted", true],
                ["Review in progress", false],
              ].map(([label, done]) => (
                <div key={String(label)} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: "var(--border)" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: done ? "var(--green)" : "var(--surface-2)" }}>
                    {done ? <Check size={10} color="white" /> : null}
                  </span>
                  <span className="text-[13px]" style={{ color: done ? "var(--text)" : "var(--muted)" }}>{String(label)}</span>
                </div>
              ))}
            </div>
            <button
              className="w-full py-4 rounded-xl text-[13px] font-bold tracking-[0.06em] uppercase text-white transition-all hover:opacity-90"
              style={{ background: "var(--green)" }}
            >
              Go to My Dashboard
            </button>
          </div>
        )}

        {/* Nav buttons */}
        {step < 6 && (
          <div className="flex gap-3 mt-10">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-6 py-3.5 rounded-xl border flex items-center gap-2 text-[13px] font-semibold transition-all hover:opacity-80"
                style={{ border: "1.5px solid var(--border)", color: "var(--text)" }}
              >
                <ArrowLeft size={14} /> Back
              </button>
            )}
            <button
              onClick={() => setStep((s) => s + 1)}
              className="flex-1 py-3.5 rounded-xl text-[13px] font-bold tracking-[0.06em] uppercase text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
              style={{ background: "var(--green)" }}
            >
              {step === 5 ? "Submit for Review" : "Continue"} <ArrowRight size={14} />
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
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all"
        style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
        onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
}
