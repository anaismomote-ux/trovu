"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Power, Bell, TrendingUp, Calendar, MessageSquare, Star,
  MapPin, Clock, ChevronRight, Zap, Users, ArrowUpRight,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const BOOKINGS = [
  { client: "Sarah M.", service: "Full Balayage", time: "10:00 AM", price: "£280", status: "confirmed", initial: "S", color: "#6BA07E" },
  { client: "Priya K.", service: "Colour Refresh", time: "1:30 PM", price: "£120", status: "confirmed", initial: "P", color: "#C4883A" },
  { client: "Charlotte B.", service: "Glossing Treatment", time: "4:00 PM", price: "£80", status: "pending", initial: "C", color: "#7B5EA7" },
];

export default function ProviderDashboard() {
  const [online, setOnline] = useState(false);
  const [pingVisible, setPingVisible] = useState(false);

  const goOnline = () => {
    setOnline(true);
    setTimeout(() => setPingVisible(true), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Broadcast ping overlay */}
      {pingVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(42,59,48,0.92)" }}>
          <div className="w-full max-w-[380px] mx-4">
            <div className="rounded-3xl overflow-hidden" style={{ background: "var(--white)" }}>
              {/* Pulse ring */}
              <div className="relative py-10 flex items-center justify-center" style={{ background: "var(--green)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full opacity-20 animate-ping" style={{ background: "white" }} />
                </div>
                <div className="relative z-10 text-center">
                  <Zap size={36} color="white" className="mx-auto mb-2" />
                  <p className="text-white font-bold text-[16px]">New Broadcast Request!</p>
                  <p className="text-white/70 text-[12px] mt-1">0.8 miles away</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-5 p-4 rounded-xl" style={{ background: "var(--surface)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-semibold text-white flex-shrink-0" style={{ background: "#6BA07E" }}>A</div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>Amara D.</p>
                    <p className="text-[12px] mt-0.5" style={{ color: "var(--body)" }}>"Knotless braids, medium length — today afternoon if possible"</p>
                  </div>
                </div>

                <div className="flex gap-4 text-center mb-6">
                  <div className="flex-1 p-3 rounded-xl" style={{ background: "var(--green-light)" }}>
                    <p className="text-[11px]" style={{ color: "var(--muted)" }}>Budget</p>
                    <p className="text-[16px] font-bold" style={{ color: "var(--green)" }}>£80–120</p>
                  </div>
                  <div className="flex-1 p-3 rounded-xl" style={{ background: "var(--amber-light)" }}>
                    <p className="text-[11px]" style={{ color: "var(--muted)" }}>Distance</p>
                    <p className="text-[16px] font-bold" style={{ color: "var(--amber)" }}>0.8 mi</p>
                  </div>
                  <div className="flex-1 p-3 rounded-xl" style={{ background: "var(--surface-2)" }}>
                    <p className="text-[11px]" style={{ color: "var(--muted)" }}>Time left</p>
                    <CountDown start={45} onEnd={() => setPingVisible(false)} />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setPingVisible(false)}
                    className="flex-1 py-3.5 rounded-xl border text-[13px] font-semibold transition-all hover:opacity-80"
                    style={{ border: "1.5px solid var(--border)", color: "var(--muted)" }}
                  >
                    Decline
                  </button>
                  <Link
                    href="/dashboard/provider/request/demo"
                    className="flex-1 py-3.5 rounded-xl text-[13px] font-bold text-white text-center transition-all hover:opacity-90"
                    style={{ background: "var(--green)" }}
                  >
                    Accept Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="flex">
        <aside className="hidden lg:flex flex-col w-64 min-h-screen sticky top-0 p-6" style={{ background: "var(--surface)", borderRight: "1px solid var(--border)" }}>
          <Logo size="sm" className="mb-8" />

          <nav className="flex-1 space-y-1">
            {[
              { icon: <TrendingUp size={16} />, label: "Dashboard", href: "/dashboard/provider", active: true },
              { icon: <Calendar size={16} />, label: "Schedule", href: "/dashboard/provider/schedule" },
              { icon: <MessageSquare size={16} />, label: "Messages", href: "/messages" },
              { icon: <Star size={16} />, label: "Reviews", href: "/dashboard/provider/reviews" },
              { icon: <Users size={16} />, label: "Clients", href: "/dashboard/provider/clients" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all"
                style={{
                  background: item.active ? "var(--green-light)" : "transparent",
                  color: item.active ? "var(--green)" : "var(--muted)",
                  fontWeight: item.active ? 600 : 400,
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Go Online button */}
          <button
            onClick={online ? () => setOnline(false) : goOnline}
            className="w-full py-3.5 rounded-xl text-[13px] font-bold tracking-wide flex items-center justify-center gap-2 transition-all"
            style={{
              background: online ? "var(--green)" : "var(--surface-2)",
              color: online ? "white" : "var(--muted)",
              border: online ? "none" : "1.5px solid var(--border)",
            }}
          >
            <Power size={14} />
            {online ? "● Online" : "Go Online"}
          </button>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 lg:p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-[28px] font-semibold" style={{ color: "var(--text)" }}>Good morning, Jasmine 👋</h1>
              <p className="text-[13px] mt-1" style={{ color: "var(--muted)" }}>Monday, 1 September 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                <Bell size={16} style={{ color: "var(--muted)" }} />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: "var(--amber)" }} />
              </button>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-serif text-white font-semibold" style={{ background: "var(--green)" }}>J</div>
            </div>
          </div>

          {/* Online status banner */}
          {online && (
            <div className="mb-6 p-4 rounded-2xl flex items-center gap-3" style={{ background: "var(--green)", color: "white" }}>
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <p className="text-[13px] font-semibold flex-1">You&apos;re online — accepting broadcasts within 5 miles</p>
              <button onClick={() => setOnline(false)} className="text-[11px] opacity-70 hover:opacity-100">Go offline</button>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "This Month", value: "£3,240", delta: "+18%", icon: <TrendingUp size={16} />, color: "var(--green)" },
              { label: "Bookings", value: "28", delta: "+4", icon: <Calendar size={16} />, color: "var(--amber)" },
              { label: "New Requests", value: "5", delta: "", icon: <Bell size={16} />, color: "var(--green)" },
              { label: "Profile Views", value: "412", delta: "+62", icon: <ArrowUpRight size={16} />, color: "var(--amber)" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                <div className="flex justify-between items-start mb-3">
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                  {stat.delta && <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--green-light)", color: "var(--green)" }}>{stat.delta}</span>}
                </div>
                <p className="font-serif text-[28px] font-semibold" style={{ color: "var(--text)" }}>{stat.value}</p>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Today's schedule */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-[20px] font-semibold" style={{ color: "var(--text)" }}>Today&apos;s Schedule</h2>
                <Link href="/dashboard/provider/schedule" className="text-[11px] font-semibold flex items-center gap-1" style={{ color: "var(--green)" }}>
                  View all <ChevronRight size={12} />
                </Link>
              </div>
              <div className="space-y-3">
                {BOOKINGS.map((b) => (
                  <div key={b.client} className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-semibold text-white flex-shrink-0" style={{ background: b.color }}>
                          {b.initial}
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>{b.client}</p>
                          <p className="text-[12px]" style={{ color: "var(--muted)" }}>{b.service} · {b.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-[20px] font-semibold" style={{ color: "var(--green)" }}>{b.price}</p>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{
                          background: b.status === "confirmed" ? "var(--green-light)" : "var(--amber-light)",
                          color: b.status === "confirmed" ? "var(--green)" : "var(--amber)",
                        }}>
                          {b.status === "confirmed" ? "Confirmed" : "Pending"}
                        </span>
                      </div>
                    </div>
                    {b.status === "pending" && (
                      <div className="flex gap-3 mt-4">
                        <button className="flex-1 py-2.5 rounded-xl text-[12px] font-bold text-white transition-all hover:opacity-90" style={{ background: "var(--green)" }}>Accept</button>
                        <button className="flex-1 py-2.5 rounded-xl text-[12px] font-semibold border transition-all hover:opacity-80" style={{ border: "1.5px solid var(--border)", color: "var(--muted)" }}>Decline</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Payout */}
              <div className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                <h3 className="font-serif text-[16px] font-semibold mb-4" style={{ color: "var(--text)" }}>Payout</h3>
                <div className="space-y-2.5">
                  {[["Pending", "£480"], ["In Escrow", "£280"]].map(([l, v]) => (
                    <div key={l} className="flex justify-between">
                      <span className="text-[12px]" style={{ color: "var(--muted)" }}>{l}</span>
                      <span className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>{v}</span>
                    </div>
                  ))}
                  <div className="pt-3 flex justify-between border-t" style={{ borderColor: "var(--border)" }}>
                    <span className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>Available</span>
                    <span className="font-serif text-[22px] font-semibold" style={{ color: "var(--green)" }}>£760</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-3 rounded-xl text-[12px] font-bold text-white transition-all hover:opacity-90" style={{ background: "var(--green)" }}>
                  Request Payout
                </button>
              </div>

              {/* Quick links */}
              <div className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                <h3 className="font-serif text-[16px] font-semibold mb-4" style={{ color: "var(--text)" }}>Quick Actions</h3>
                <div className="space-y-1">
                  {[
                    ["Edit Profile", "/dashboard/provider/profile"],
                    ["Manage Services", "/dashboard/provider/services"],
                    ["Update Availability", "/dashboard/provider/availability"],
                    ["Upload Portfolio", "/dashboard/provider/portfolio"],
                    ["View Analytics", "/dashboard/provider/analytics"],
                  ].map(([label, href]) => (
                    <Link key={label} href={href} className="flex items-center justify-between p-2.5 rounded-xl transition-all hover:bg-[var(--surface)]" style={{ color: "var(--body)" }}>
                      <span className="text-[13px]">{label}</span>
                      <ChevronRight size={14} style={{ color: "var(--muted)" }} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Go online mobile */}
              <button
                onClick={online ? () => setOnline(false) : goOnline}
                className="w-full py-4 rounded-xl text-[13px] font-bold tracking-wide flex items-center justify-center gap-2 transition-all lg:hidden"
                style={{ background: online ? "var(--green)" : "var(--white)", color: online ? "white" : "var(--muted)", border: online ? "none" : "1.5px solid var(--border)" }}
              >
                <Power size={14} />
                {online ? "● Online — tap to go offline" : "Go Online"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function CountDown({ start, onEnd }: { start: number; onEnd: () => void }) {
  const [secs, setSecs] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setSecs((s) => {
        if (s <= 1) { clearInterval(id); onEnd(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [onEnd]);
  return (
    <p className="text-[16px] font-bold" style={{ color: secs < 15 ? "var(--error)" : "var(--text)" }}>
      {secs}s
    </p>
  );
}
