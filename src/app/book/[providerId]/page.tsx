"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, MapPin, Shield, CreditCard, Check } from "lucide-react";

const SERVICES = [
  { name: "Knotless Braids", duration: "3–5 hrs", price: 120 },
  { name: "Silk Press", duration: "2 hrs", price: 80 },
  { name: "Natural Twist Set", duration: "2 hrs", price: 70 },
  { name: "Loc Maintenance", duration: "1.5 hrs", price: 60 },
];

const SLOTS = {
  "Mon 1 Sep": ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
  "Tue 2 Sep": ["10:00 AM", "1:00 PM", "3:00 PM"],
  "Wed 3 Sep": ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
  "Thu 4 Sep": ["11:00 AM", "3:00 PM"],
  "Fri 5 Sep": ["9:00 AM", "10:00 AM", "2:00 PM", "4:00 PM"],
};

const STEPS = ["Service", "Date & Time", "Your Details", "Payment"];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(0);
  const [day, setDay] = useState("Mon 1 Sep");
  const [slot, setSlot] = useState("2:00 PM");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)" }}>
        <div className="text-center max-w-[420px]">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--green-light)" }}>
            <Check size={36} style={{ color: "var(--green)" }} />
          </div>
          <h2 className="font-serif text-[32px] font-semibold mb-3" style={{ color: "var(--text)" }}>Booking confirmed!</h2>
          <p className="text-[14px] mb-6" style={{ color: "var(--muted)" }}>
            Jasmine Clarke has accepted your booking for <strong>{SERVICES[service].name}</strong> on <strong>{day} at {slot}</strong>.
            Your payment is held securely in escrow.
          </p>
          <div className="p-5 rounded-2xl text-left mb-6" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
            {[["Service", SERVICES[service].name], ["Date", `${day} · ${slot}`], ["Duration", SERVICES[service].duration], ["Amount in escrow", `£${SERVICES[service].price}`]].map(([l, v]) => (
              <div key={l} className="flex justify-between py-2.5 border-b last:border-0 text-[13px]" style={{ borderColor: "var(--border)" }}>
                <span style={{ color: "var(--muted)" }}>{l}</span>
                <span className="font-semibold" style={{ color: "var(--text)" }}>{v}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="/messages" className="flex-1 py-3.5 rounded-xl border text-[13px] font-semibold text-center" style={{ border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Message Jasmine
            </Link>
            <Link href="/dashboard/customer" className="flex-1 py-3.5 rounded-xl text-[13px] font-bold text-white text-center" style={{ background: "var(--green)" }}>
              My Bookings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div className="sticky top-0 z-10 px-6 py-4 flex items-center gap-4" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <button style={{ color: "var(--muted)" }} onClick={() => step > 0 && setStep((s) => s - 1)}>
          <ChevronLeft size={20} />
        </button>
        <div className="flex-1 flex gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i <= step ? "100%" : "24px",
                  background: i < step ? "var(--green)" : i === step ? "var(--green)" : "var(--border)",
                  flex: i <= step ? 1 : undefined,
                }}
              />
            </div>
          ))}
        </div>
        <span className="text-[11px]" style={{ color: "var(--muted)" }}>{step + 1}/{STEPS.length}</span>
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-10">
        {/* Provider mini card */}
        <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-serif text-white font-semibold text-[20px]" style={{ background: "#6BA07E" }}>J</div>
          <div>
            <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>Jasmine Clarke</p>
            <p className="text-[12px]" style={{ color: "var(--muted)" }}>Natural Hair Specialist · Manchester</p>
          </div>
        </div>

        {/* Step 0 — Service */}
        {step === 0 && (
          <div>
            <h2 className="font-serif text-[28px] font-semibold mb-6" style={{ color: "var(--text)" }}>Select a service</h2>
            <div className="space-y-3">
              {SERVICES.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setService(i)}
                  className="w-full p-5 rounded-2xl border text-left transition-all"
                  style={{
                    background: service === i ? "var(--green-light)" : "var(--white)",
                    borderColor: service === i ? "var(--green)" : "var(--border)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>{s.name}</p>
                      <p className="text-[12px] mt-0.5" style={{ color: "var(--muted)" }}>
                        <Clock size={11} className="inline mr-1" />{s.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-serif text-[22px] font-semibold" style={{ color: "var(--green)" }}>£{s.price}</p>
                      {service === i && <Check size={16} style={{ color: "var(--green)" }} />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1 — Date & Time */}
        {step === 1 && (
          <div>
            <h2 className="font-serif text-[28px] font-semibold mb-6" style={{ color: "var(--text)" }}>Choose a time</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
              {Object.keys(SLOTS).map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className="flex-shrink-0 px-4 py-2.5 rounded-xl border text-[12px] font-semibold transition-all"
                  style={{
                    background: day === d ? "var(--green)" : "var(--white)",
                    borderColor: day === d ? "var(--green)" : "var(--border)",
                    color: day === d ? "white" : "var(--text)",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(SLOTS[day as keyof typeof SLOTS] || []).map((t) => (
                <button
                  key={t}
                  onClick={() => setSlot(t)}
                  className="py-3.5 rounded-xl border text-[13px] font-semibold transition-all"
                  style={{
                    background: slot === t ? "var(--green)" : "var(--white)",
                    borderColor: slot === t ? "var(--green)" : "var(--border)",
                    color: slot === t ? "white" : "var(--text)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — Details */}
        {step === 2 && (
          <div>
            <h2 className="font-serif text-[28px] font-semibold mb-6" style={{ color: "var(--text)" }}>Your details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FieldInline label="First name" placeholder="Amara" />
                <FieldInline label="Last name" placeholder="Diallo" />
              </div>
              <FieldInline label="Phone" placeholder="+44 7700 000000" type="tel" />
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Your address (for mobile service)</label>
                <textarea
                  rows={3}
                  placeholder="Full address including postcode"
                  className="w-full px-4 py-3 rounded-xl text-[13px] outline-none resize-none"
                  style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
                />
              </div>
              <FieldInline label="Notes for Jasmine (optional)" placeholder="e.g. I have 4c hair, prefer no extensions" />
            </div>
          </div>
        )}

        {/* Step 3 — Payment */}
        {step === 3 && (
          <div>
            <h2 className="font-serif text-[28px] font-semibold mb-2" style={{ color: "var(--text)" }}>Payment</h2>
            <p className="text-[13px] mb-6" style={{ color: "var(--muted)" }}>
              Your payment is held in escrow — only released after you confirm the service is complete.
            </p>

            {/* Summary */}
            <div className="p-5 rounded-2xl mb-5" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
              {[
                ["Service", SERVICES[service].name],
                ["Date & Time", `${day} · ${slot}`],
                ["Duration", SERVICES[service].duration],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between py-2.5 border-b text-[13px]" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--muted)" }}>{l}</span>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>{v}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 text-[15px]">
                <span className="font-semibold" style={{ color: "var(--text)" }}>Total (in escrow)</span>
                <span className="font-serif text-[22px] font-semibold" style={{ color: "var(--green)" }}>£{SERVICES[service].price}</span>
              </div>
            </div>

            {/* Card */}
            <div className="space-y-4">
              <FieldInline label="Card number" placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-4">
                <FieldInline label="Expiry" placeholder="MM / YY" />
                <FieldInline label="CVC" placeholder="123" />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5 p-3 rounded-xl" style={{ background: "var(--green-light)" }}>
              <Shield size={14} style={{ color: "var(--green)" }} />
              <p className="text-[11px]" style={{ color: "var(--green-deep)" }}>Escrow protected · funds only released when you confirm completion</p>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            if (step === STEPS.length - 1) setDone(true);
            else setStep((s) => s + 1);
          }}
          className="w-full mt-8 py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
          style={{ background: "var(--green)" }}
        >
          {step === 3 ? (
            <><CreditCard size={14} /> Pay & Confirm Booking</>
          ) : (
            <>Continue <ChevronRight size={14} /></>
          )}
        </button>
      </div>
    </div>
  );
}

function FieldInline({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-[13px] outline-none"
        style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
        onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
}
