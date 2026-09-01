import Link from "next/link";
import { Zap, Calendar, TrendingUp, ArrowRight } from "lucide-react";

const PERKS = [
  { icon: Zap,         title: "Uber-style matching",    desc: "Broadcast requests ping you in real time. Accept in 45 seconds — like Uber, but for your skills." },
  { icon: Calendar,    title: "You control your diary", desc: "Set your hours, radius, and max bookings. Accept direct bookings from loyal clients alongside broadcasts." },
  { icon: TrendingUp,  title: "Keep 90% of every job",  desc: "Trovu takes a flat 10% platform fee. No subscriptions, no hidden charges — just fair, transparent pay." },
];

export default function ForProviders() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — driver mode preview card */}
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
              style={{ background: "var(--green)" }}
            />
            <div
              className="relative rounded-2xl overflow-hidden p-6 space-y-4"
              style={{ background: "var(--white)", border: "1.5px solid var(--border)", boxShadow: "var(--shadow-xl)" }}
            >
              {/* Online indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse-dot" />
                  <span className="text-[12px] font-bold" style={{ color: "var(--green)" }}>You&apos;re Online</span>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-1 rounded-full"
                  style={{ background: "var(--green-light)", color: "var(--green-deep)" }}>
                  Driver Mode
                </span>
              </div>

              {/* Today stats */}
              <div className="grid grid-cols-3 gap-3">
                {[["£240", "Earned today"], ["3", "Jobs done"], ["100%", "Acceptance"]].map(([val, lbl]) => (
                  <div key={lbl} className="text-center p-3 rounded-xl" style={{ background: "var(--surface)" }}>
                    <p className="font-serif text-[22px] font-semibold" style={{ color: "var(--text)" }}>{val}</p>
                    <p className="text-[9px] font-bold tracking-wide uppercase" style={{ color: "var(--muted)" }}>{lbl}</p>
                  </div>
                ))}
              </div>

              {/* Incoming request ping */}
              <div
                className="rounded-xl p-4 border-2"
                style={{ background: "var(--green-light)", borderColor: "var(--green)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Zap size={12} fill="var(--green)" style={{ color: "var(--green)" }} />
                    <span className="text-[10px] font-bold tracking-wide uppercase" style={{ color: "var(--green-deep)" }}>
                      New Broadcast
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[18px] font-serif font-bold" style={{ color: "var(--amber)" }}>0:38</span>
                  </div>
                </div>
                <p className="text-[13px] font-semibold mb-0.5" style={{ color: "var(--text)" }}>Knotless Braids — Today 6pm</p>
                <p className="text-[11px] mb-3" style={{ color: "var(--muted)" }}>Priya M. · 2.4 miles · Payout: £100</p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2.5 rounded-lg text-[11px] font-bold tracking-wide uppercase"
                    style={{ background: "var(--surface-2)", color: "var(--muted)" }}>
                    Decline
                  </button>
                  <button className="py-2.5 rounded-lg text-[11px] font-bold tracking-wide uppercase text-white"
                    style={{ background: "var(--green)" }}>
                    Accept ✓
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--green)" }}>
              For providers
            </p>
            <h2 className="font-serif text-[32px] font-semibold mb-4 leading-tight" style={{ color: "var(--text)" }}>
              Your skills.<br />Your schedule.<br />Your earnings.
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--body)" }}>
              Go online, set your radius, and let clients come to you — like an Uber driver, but for your craft. Or keep your loyal regulars booking you directly.
            </p>

            <div className="space-y-5 mb-10">
              {PERKS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--green-light)" }}
                  >
                    <Icon size={16} style={{ color: "var(--green-deep)" }} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold mb-0.5" style={{ color: "var(--text)" }}>{title}</p>
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/become-a-provider"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white text-[12px] font-bold tracking-[0.07em] uppercase transition-all hover:opacity-90"
              style={{ background: "var(--green)" }}
            >
              Become a Provider
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
