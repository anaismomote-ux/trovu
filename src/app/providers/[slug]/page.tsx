"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MapPin, ShieldCheck, Clock, ChevronLeft, Play, Calendar, MessageSquare, Zap } from "lucide-react";

const PROVIDER = {
  name: "Jasmine Clarke",
  title: "Natural Hair Specialist",
  location: "Moss Side, Manchester",
  rating: 4.9,
  reviews: 87,
  price: 100,
  online: true,
  initial: "J",
  color: "#6BA07E",
  bio: "Specialist in natural hair care, protective styles, and knotless braids. 8+ years experience working with all curl types. I come to you — fully equipped mobile setup.",
  services: [
    { name: "Knotless Braids", duration: "3–5 hrs", price: 120 },
    { name: "Silk Press", duration: "2 hrs", price: 80 },
    { name: "Natural Twist Set", duration: "2 hrs", price: 70 },
    { name: "Loc Maintenance", duration: "1.5 hrs", price: 60 },
    { name: "Consultation", duration: "30 min", price: 0 },
  ],
  portfolio: ["#6BA07E", "#4A7A60", "#7BA090", "#5A9070", "#6BA07E", "#3A6A50"],
  verifications: ["T1 — ID Verified", "T2 — Home Access + Basic DBS"],
  responseTime: "Usually within 30 min",
  completionRate: "98%",
};

const REVIEWS = [
  { name: "Amara D.", rating: 5, text: "Jasmine was incredible — arrived on time, was super professional and my braids are absolutely perfect.", initial: "A", color: "#C4883A" },
  { name: "Priya M.", rating: 5, text: "Best natural hair specialist in Manchester. Book her before she gets even busier!", initial: "P", color: "#6BA07E" },
  { name: "Kezia O.", rating: 5, text: "I've been to so many specialists and none compare. She genuinely cares about hair health.", initial: "K", color: "#7B5EA7" },
];

export default function ProviderProfilePage() {
  const [selectedService, setSelectedService] = useState(0);
  const [tab, setTab] = useState<"services" | "portfolio" | "reviews">("services");

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Back */}
      <div className="px-6 py-4 max-w-[1200px] mx-auto">
        <Link href="/search" className="inline-flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: "var(--muted)" }}>
          <ChevronLeft size={14} /> Back to search
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Profile header */}
            <div className="rounded-2xl overflow-hidden mb-6" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
              {/* Hero */}
              <div className="relative h-52 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${PROVIDER.color}40, ${PROVIDER.color}90)` }}>
                <span className="font-serif text-[80px] font-semibold text-white/70">{PROVIDER.initial}</span>
                {/* Video intro button */}
                <button className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold" style={{ background: "rgba(255,255,255,0.9)", color: "var(--text)" }}>
                  <Play size={12} fill="var(--green)" style={{ color: "var(--green)" }} /> Watch intro
                </button>
                {PROVIDER.online && (
                  <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold" style={{ background: "var(--green)", color: "white" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> ONLINE NOW
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h1 className="font-serif text-[28px] font-semibold" style={{ color: "var(--text)" }}>{PROVIDER.name}</h1>
                    <p className="text-[14px]" style={{ color: "var(--muted)" }}>{PROVIDER.title}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                      <Star size={14} fill="var(--amber)" style={{ color: "var(--amber)" }} />
                      <span className="font-semibold text-[15px]" style={{ color: "var(--text)" }}>{PROVIDER.rating}</span>
                      <span className="text-[12px]" style={{ color: "var(--muted)" }}>({PROVIDER.reviews})</span>
                    </div>
                    <p className="text-[11px] font-semibold" style={{ color: "var(--green)" }}>From £{PROVIDER.price}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--muted)" }}>
                    <MapPin size={13} style={{ color: "var(--green)" }} /> {PROVIDER.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--muted)" }}>
                    <Clock size={13} style={{ color: "var(--green)" }} /> {PROVIDER.responseTime}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--muted)" }}>
                    <ShieldCheck size={13} style={{ color: "var(--green)" }} /> {PROVIDER.verifications[0]}
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed" style={{ color: "var(--body)" }}>{PROVIDER.bio}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: "var(--surface-2)" }}>
              {(["services", "portfolio", "reviews"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 py-2.5 rounded-lg text-[12px] font-semibold capitalize transition-all"
                  style={{
                    background: tab === t ? "var(--white)" : "transparent",
                    color: tab === t ? "var(--text)" : "var(--muted)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === "services" && (
              <div className="space-y-3">
                {PROVIDER.services.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setSelectedService(i)}
                    className="w-full p-5 rounded-2xl border text-left transition-all"
                    style={{
                      background: selectedService === i ? "var(--green-light)" : "var(--white)",
                      borderColor: selectedService === i ? "var(--green)" : "var(--border)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>{s.name}</p>
                        <p className="text-[12px] mt-0.5" style={{ color: "var(--muted)" }}>
                          <Clock size={11} className="inline mr-1" /> {s.duration}
                        </p>
                      </div>
                      <p className="font-serif text-[22px] font-semibold" style={{ color: "var(--green)" }}>
                        {s.price === 0 ? "Free" : `£${s.price}`}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {tab === "portfolio" && (
              <div className="grid grid-cols-3 gap-3">
                {PROVIDER.portfolio.map((color, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:opacity-80"
                    style={{ background: `linear-gradient(135deg, ${color}60, ${color})` }}
                  >
                    <span className="font-serif text-[28px] font-semibold text-white/60">{PROVIDER.initial}</span>
                  </div>
                ))}
              </div>
            )}

            {tab === "reviews" && (
              <div className="space-y-4">
                {REVIEWS.map((r) => (
                  <div key={r.name} className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-white font-semibold" style={{ background: r.color }}>
                          {r.initial}
                        </div>
                        <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>{r.name}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(r.rating)].map((_, j) => <Star key={j} size={11} fill="var(--amber)" style={{ color: "var(--amber)" }} />)}
                      </div>
                    </div>
                    <p className="text-[13px] leading-relaxed italic" style={{ color: "var(--body)" }}>&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Booking sidebar */}
          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 rounded-2xl" style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}>
                <p className="text-[12px] font-bold tracking-wide uppercase mb-1" style={{ color: "var(--muted)" }}>
                  {PROVIDER.services[selectedService]?.name}
                </p>
                <p className="font-serif text-[32px] font-semibold mb-1" style={{ color: "var(--green)" }}>
                  £{PROVIDER.services[selectedService]?.price || "Free"}
                </p>
                <p className="text-[12px] mb-5" style={{ color: "var(--muted)" }}>
                  <Clock size={11} className="inline mr-1" />
                  {PROVIDER.services[selectedService]?.duration}
                </p>

                <Link
                  href={`/book/jasmine-clarke`}
                  className="w-full py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 mb-3"
                  style={{ background: "var(--green)" }}
                >
                  <Calendar size={14} /> Book Direct
                </Link>

                {PROVIDER.online && (
                  <Link
                    href="/book/broadcast"
                    className="w-full py-3.5 rounded-xl text-[12px] font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all hover:opacity-80"
                    style={{ background: "var(--green-light)", color: "var(--green)" }}
                  >
                    <Zap size={12} /> Broadcast Request
                  </Link>
                )}

                <button className="w-full mt-3 py-3 rounded-xl border text-[12px] font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-80" style={{ border: "1.5px solid var(--border)", color: "var(--muted)" }}>
                  <MessageSquare size={13} /> Message First
                </button>
              </div>

              <div className="p-5 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Verifications</p>
                {PROVIDER.verifications.map((v) => (
                  <div key={v} className="flex items-center gap-2 py-2 border-b last:border-0" style={{ borderColor: "var(--border)" }}>
                    <ShieldCheck size={13} style={{ color: "var(--green)" }} />
                    <span className="text-[12px]" style={{ color: "var(--body)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
