"use client";

import Link from "next/link";
import { Calendar, MessageSquare, Star, Search, ChevronRight, Clock, ShieldCheck, Zap } from "lucide-react";

const BOOKINGS = [
  { provider: "Jasmine Clarke", service: "Knotless Braids", date: "Today · 2:00 PM", price: "£120", status: "upcoming", initial: "J", color: "#6BA07E" },
  { provider: "Marcus Adeyemi", service: "PT Session", date: "Wed 3 Sep · 10:00 AM", price: "£60", status: "upcoming", initial: "M", color: "#C4883A" },
  { provider: "Unique Okonkwo", service: "Gel Nails", date: "Sat 30 Aug", price: "£65", status: "completed", initial: "U", color: "#7B5EA7" },
];

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="max-w-[900px] mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-[28px] font-semibold" style={{ color: "var(--text)" }}>Hey, Amara 👋</h1>
            <p className="text-[13px] mt-1" style={{ color: "var(--muted)" }}>Monday, 1 September 2026</p>
          </div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-serif text-white font-semibold" style={{ background: "#C4883A" }}>A</div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <Link href="/book/broadcast" className="p-5 rounded-2xl flex items-center gap-3 transition-all hover:opacity-90" style={{ background: "var(--green)", color: "white" }}>
            <Zap size={20} fill="white" />
            <div>
              <p className="text-[13px] font-bold">Instant Match</p>
              <p className="text-[11px] opacity-70">Get a provider in minutes</p>
            </div>
          </Link>
          <Link href="/search" className="p-5 rounded-2xl flex items-center gap-3 transition-all hover:opacity-80" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
            <Search size={20} style={{ color: "var(--green)" }} />
            <div>
              <p className="text-[13px] font-bold" style={{ color: "var(--text)" }}>Browse</p>
              <p className="text-[11px]" style={{ color: "var(--muted)" }}>Find the right provider</p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[["Bookings", "12", <Calendar key="c" size={16} />], ["Providers", "5", <Star key="s" size={16} />], ["Protected", "£480", <ShieldCheck key="sh" size={16} />]].map(([l, v, icon]) => (
            <div key={String(l)} className="p-5 rounded-2xl text-center" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
              <div className="flex justify-center mb-2" style={{ color: "var(--green)" }}>{icon}</div>
              <p className="font-serif text-[24px] font-semibold" style={{ color: "var(--text)" }}>{String(v)}</p>
              <p className="text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>{String(l)}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-[20px] font-semibold mb-4" style={{ color: "var(--text)" }}>My Bookings</h2>
        <div className="space-y-3 mb-8">
          {BOOKINGS.map((b) => (
            <div key={`${b.provider}-${b.date}`} className="p-5 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-serif text-white font-semibold" style={{ background: b.color }}>{b.initial}</div>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>{b.provider}</p>
                    <p className="text-[12px]" style={{ color: "var(--muted)" }}>{b.service}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Clock size={10} style={{ color: "var(--muted)" }} />
                      <span className="text-[11px]" style={{ color: "var(--muted)" }}>{b.date}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-[18px] font-semibold" style={{ color: "var(--green)" }}>{b.price}</p>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: b.status === "upcoming" ? "var(--green-light)" : "var(--surface-2)", color: b.status === "upcoming" ? "var(--green)" : "var(--muted)" }}>
                    {b.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </div>
              </div>
              {b.status === "completed" && (
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 py-2.5 rounded-xl text-[11px] font-bold text-white" style={{ background: "var(--green)" }}>Leave Review</button>
                  <button className="flex-1 py-2.5 rounded-xl border text-[11px] font-semibold" style={{ border: "1.5px solid var(--border)", color: "var(--muted)" }}>Book Again</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[["Messages", <MessageSquare key="m" size={18} />, "/messages"], ["Reviews", <Star key="r" size={18} />, "/dashboard/customer/reviews"], ["Settings", <ChevronRight key="s" size={18} />, "/dashboard/customer/settings"]].map(([l, icon, href]) => (
            <Link key={String(l)} href={String(href)} className="p-4 rounded-2xl flex flex-col items-center gap-2 transition-all hover:opacity-80" style={{ background: "var(--white)", border: "1px solid var(--border)", color: "var(--muted)" }}>
              {icon}
              <span className="text-[11px] font-semibold" style={{ color: "var(--text)" }}>{String(l)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
