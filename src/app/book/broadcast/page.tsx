"use client";

import { useState } from "react";
import { Mic, MapPin, Zap, ChevronRight, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CATS = ["Beauty & Hair", "Fitness", "Nails & Lashes", "Cleaning", "Childcare", "Photography", "Massage", "Tutoring"];

export default function BroadcastPage() {
  const [step, setStep] = useState<"form" | "finding" | "matched">("form");
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Beauty & Hair");
  const [urgency, setUrgency] = useState<"today" | "scheduled">("today");
  const [listening, setListening] = useState(false);
  const [countdown, setCountdown] = useState(45);

  const launch = () => {
    setStep("finding");
    let t = 45;
    const id = setInterval(() => {
      t -= 1;
      setCountdown(t);
      if (t <= 20) {
        clearInterval(id);
        setStep("matched");
      }
    }, 1000);
  };

  if (step === "matched") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)" }}>
        <div className="text-center max-w-[420px]">
          <div className="relative w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center font-serif text-[40px] text-white font-semibold" style={{ background: "var(--green)" }}>
            J
            <span className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "white" }}>
              <Zap size={14} style={{ color: "var(--green)" }} />
            </span>
          </div>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--green)" }}>Match Found!</p>
          <h2 className="font-serif text-[30px] font-semibold mb-2" style={{ color: "var(--text)" }}>Jasmine Clarke accepted</h2>
          <p className="text-[13px] mb-1" style={{ color: "var(--muted)" }}>Natural Hair Specialist · 0.8 miles away</p>
          <p className="text-[13px] mb-8" style={{ color: "var(--muted)" }}>She&apos;s on her way. ETA: <strong style={{ color: "var(--text)" }}>~20 minutes</strong></p>

          <div className="rounded-2xl p-5 mb-6 text-left" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
            {[["Service", query || "Knotless braids"], ["Provider", "Jasmine Clarke"], ["ETA", "~20 min"], ["Payment", "Held in escrow"]].map(([l, v]) => (
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
              Track Booking
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === "finding") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)" }}>
        <div className="text-center max-w-[380px]">
          {/* Pulsing rings */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full opacity-10 animate-ping" style={{ background: "var(--green)" }} />
            <div className="absolute inset-4 rounded-full opacity-20 animate-ping" style={{ background: "var(--green)", animationDelay: "0.3s" }} />
            <div className="absolute inset-8 rounded-full opacity-30 animate-ping" style={{ background: "var(--green)", animationDelay: "0.6s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "var(--green)" }}>
                <Zap size={32} color="white" />
              </div>
            </div>
          </div>

          <h2 className="font-serif text-[28px] font-semibold mb-2" style={{ color: "var(--text)" }}>Finding your provider...</h2>
          <p className="text-[13px] mb-6" style={{ color: "var(--muted)" }}>Broadcasting to providers within 3 miles of you</p>

          <div className="flex justify-center gap-1 mb-2">
            {[..."JASMINE"].map((l, i) => (
              <span key={i} className="text-[20px] font-serif font-semibold" style={{ color: "var(--green)", animationDelay: `${i * 0.1}s` }}>{l}</span>
            ))}
          </div>
          <p className="text-[12px] mb-6" style={{ color: "var(--muted)" }}>Responding...</p>

          <div className="p-4 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between text-[13px]">
              <span style={{ color: "var(--muted)" }}>Time remaining</span>
              <span className="font-bold font-serif text-[24px]" style={{ color: countdown < 15 ? "var(--error)" : "var(--text)" }}>{countdown}s</span>
            </div>
            <div className="h-1.5 rounded-full mt-2 overflow-hidden" style={{ background: "var(--border)" }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${(countdown / 45) * 100}%`, background: countdown < 15 ? "var(--error)" : "var(--green)" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="max-w-[560px] mx-auto px-6 py-10">
        <Link href="/search" className="inline-flex items-center gap-1.5 text-[12px] font-semibold mb-8" style={{ color: "var(--muted)" }}>
          <ArrowLeft size={14} /> Back
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <Zap size={18} style={{ color: "var(--green)" }} />
          <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--green)" }}>Instant Match</span>
        </div>
        <h1 className="font-serif text-[32px] font-semibold mb-2" style={{ color: "var(--text)" }}>Broadcast your request</h1>
        <p className="text-[13px] mb-8" style={{ color: "var(--muted)" }}>
          Nearby providers receive your request instantly. First to accept gets the job.
        </p>

        {/* Urgency toggle */}
        <div className="flex gap-2 mb-6">
          {(["today", "scheduled"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUrgency(u)}
              className="flex-1 py-3 rounded-xl border text-[12px] font-semibold capitalize transition-all"
              style={{
                background: urgency === u ? "var(--green)" : "var(--white)",
                borderColor: urgency === u ? "var(--green)" : "var(--border)",
                color: urgency === u ? "white" : "var(--body)",
              }}
            >
              {u === "today" ? "⚡ Today / ASAP" : "📅 Schedule for later"}
            </button>
          ))}
        </div>

        {/* Request input */}
        <div className="mb-4">
          <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Describe what you need</label>
          <div className="flex items-start gap-2">
            <textarea
              rows={3}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='e.g. "Knotless braids, medium length, today afternoon"'
              className="flex-1 px-4 py-3 rounded-xl text-[13px] outline-none resize-none"
              style={{ background: "var(--white)", border: "1.5px solid var(--border)", color: "var(--text)" }}
            />
            <button
              onMouseDown={() => setListening(true)}
              onMouseUp={() => setListening(false)}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0"
              style={{ background: listening ? "var(--error)" : "var(--green-light)", color: listening ? "white" : "var(--green)" }}
            >
              <Mic size={18} />
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-[12px] font-semibold mb-2" style={{ color: "var(--text)" }}>Category</label>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-3.5 py-1.5 rounded-full border text-[11px] font-semibold transition-all"
                style={{
                  background: cat === c ? "var(--green)" : "var(--white)",
                  borderColor: cat === c ? "var(--green)" : "var(--border)",
                  color: cat === c ? "white" : "var(--body)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Your location</label>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}>
            <MapPin size={14} style={{ color: "var(--green)" }} />
            <span className="text-[13px]" style={{ color: "var(--text)" }}>Manchester City Centre, M1</span>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-8">
          <label className="block text-[12px] font-semibold mb-1.5" style={{ color: "var(--text)" }}>Budget (optional)</label>
          <div className="flex gap-2">
            {["£0–50", "£50–100", "£100–150", "£150+"].map((b) => (
              <button key={b} className="flex-1 py-2.5 rounded-xl border text-[11px] font-semibold transition-all" style={{ background: "var(--white)", borderColor: "var(--border)", color: "var(--body)" }}>
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="p-5 rounded-2xl mb-8" style={{ background: "var(--green-light)", border: "1px solid var(--green)" }}>
          <div className="flex gap-3 items-start">
            <Clock size={16} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-[12px] font-semibold mb-1" style={{ color: "var(--green-deep)" }}>How broadcasts work</p>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--green-deep)", opacity: 0.8 }}>
                Your request goes to all providers within 3 miles. First to accept wins. If no one responds in 45 seconds, we expand to 5 miles, then 10.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={launch}
          className="w-full py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
          style={{ background: "var(--green)" }}
        >
          <Zap size={14} fill="white" /> Broadcast Now <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
