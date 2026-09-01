"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Mic, MapPin, Zap, ArrowRight } from "lucide-react";

const POPULAR = [
  "Knotless braids", "Silk press", "Personal training",
  "Gel nails", "Deep tissue massage", "Photography",
];

const STATS = [
  { value: "4,200+", label: "Verified providers" },
  { value: "98%",    label: "Satisfaction rate" },
  { value: "£0",     label: "Booking fee" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--bg)", paddingTop: "120px", paddingBottom: "80px" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, #6BA07E0D 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy + search */}
          <div>
            {/* AI badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8"
              style={{ background: "var(--green-light)", borderColor: "var(--green)", borderWidth: 1 }}>
              <Zap size={11} className="text-green-deep" fill="currentColor" />
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-green-deep">
                AI-Powered Matching
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-semibold leading-[1.05] mb-6"
              style={{ fontSize: "clamp(42px, 5vw, 68px)", color: "var(--text)", letterSpacing: "-0.02em" }}
            >
              Find your{" "}
              <em style={{ color: "var(--green)", fontStyle: "italic" }}>person.</em>
            </h1>

            <p className="text-[17px] leading-relaxed mb-10" style={{ color: "var(--body)", maxWidth: "440px" }}>
              Describe what you need — our AI finds verified, available providers near you in seconds. Escrow-protected. DBS-checked. No surprises.
            </p>

            {/* Smart search bar */}
            <div
              className="flex flex-col gap-3 p-3 rounded-2xl mb-6"
              style={{ background: "var(--white)", border: "1.5px solid var(--border)", boxShadow: "var(--shadow-lg)" }}
            >
              {/* Text input row */}
              <div className="flex items-center gap-3 px-2">
                <Search size={16} style={{ color: "var(--green)", flexShrink: 0 }} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. knotless braids today evening, Manchester…"
                  className="flex-1 text-[14px] bg-transparent border-none outline-none"
                  style={{ color: "var(--text)", fontFamily: "var(--font-sans)" }}
                />
                <button
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                  style={{ color: "var(--muted)" }}
                  title="Voice search"
                  aria-label="Voice search"
                >
                  <Mic size={15} />
                </button>
              </div>

              {/* Location + CTA row */}
              <div className="flex gap-2">
                <div
                  className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1.5px solid var(--border)" }}
                >
                  <MapPin size={13} style={{ color: "var(--muted)", flexShrink: 0 }} />
                  <input
                    placeholder="Your location"
                    className="w-full text-[13px] bg-transparent border-none outline-none"
                    style={{ color: "var(--body)", fontFamily: "var(--font-sans)" }}
                  />
                </div>
                <Link
                  href={`/search${query ? `?q=${encodeURIComponent(query)}` : ""}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[11px] font-bold tracking-[0.07em] uppercase transition-all hover:opacity-90 whitespace-nowrap"
                  style={{ background: "var(--green)" }}
                >
                  <Zap size={12} fill="currentColor" />
                  Match Me
                </Link>
              </div>

              {/* Mode hint */}
              <p className="text-[10px] text-center pb-1" style={{ color: "var(--muted)" }}>
                Say <span style={{ color: "var(--green)" }}>"today"</span> for instant matching ·{" "}
                Say a date to browse &amp; schedule
              </p>
            </div>

            {/* Popular tags */}
            <div className="flex flex-wrap gap-2">
              {POPULAR.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all hover:border-green hover:text-green-deep"
                  style={{
                    background: "var(--white)",
                    border: "1.5px solid var(--border)",
                    color: "var(--body)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right — social proof + illustration */}
          <div className="hidden lg:flex flex-col gap-6">
            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 p-6 rounded-2xl"
              style={{ background: "var(--surface)", border: "1.5px solid var(--border)" }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-[28px] font-semibold" style={{ color: "var(--green)" }}>
                    {s.value}
                  </p>
                  <p className="text-[11px] font-medium" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* How it works card */}
            <div
              className="p-6 rounded-2xl space-y-4"
              style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}
            >
              <p className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: "var(--muted)" }}>
                How Trovu works
              </p>
              {[
                { icon: "✦", label: "AI matches you", desc: "Describe your service in plain English — AI finds the best fit nearby." },
                { icon: "🔒", label: "Pay into escrow",  desc: "Your money is held safely — only released when you confirm." },
                { icon: "📍", label: "Provider arrives",  desc: "GPS check-in confirms the appointment has started." },
                { icon: "✓",  label: "Confirm & release", desc: "Both parties confirm — payment releases within 24 hours." },
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: "var(--green-light)", color: "var(--green-deep)" }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>{step.label}</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Provider CTA */}
            <Link
              href="/become-a-provider"
              className="flex items-center justify-between p-5 rounded-2xl transition-all hover:opacity-90 group"
              style={{ background: "var(--green)", color: "var(--white)" }}
            >
              <div>
                <p className="font-serif text-[18px] font-semibold">Become a provider</p>
                <p className="text-[12px] opacity-75 mt-0.5">Set your own rates. Keep 90% of every booking.</p>
              </div>
              <ArrowRight size={20} className="opacity-75 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
