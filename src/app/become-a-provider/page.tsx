import Link from "next/link";
import { Shield, Zap, TrendingUp, Users, Check, Star, Clock } from "lucide-react";

const PERKS = [
  { icon: <Zap size={20} />, title: "Uber-style broadcasts", sub: "Get pinged for nearby jobs in real time. First to accept wins." },
  { icon: <Users size={20} />, title: "Direct bookings too", sub: "Loyal clients book you directly. You control your calendar." },
  { icon: <TrendingUp size={20} />, title: "Same-day payouts", sub: "Funds released from escrow as soon as the client confirms." },
  { icon: <Shield size={20} />, title: "Verified & trusted", sub: "Verification builds your badge and unlocks higher-value clients." },
  { icon: <Star size={20} />, title: "Review system", sub: "Reviews stay on your profile permanently — build your reputation." },
  { icon: <Clock size={20} />, title: "You set your hours", sub: "Go online when you want. Go offline when you need a break." },
];

const TIERS = [
  { tier: "T1", label: "ID Verification", desc: "ID + selfie. Required to list. Free.", color: "var(--green)" },
  { tier: "T2", label: "Home Access DBS", desc: "Basic DBS check. Required for home services. £21.50.", color: "var(--amber)" },
  { tier: "T3", label: "Trade Certification", desc: "Upload qualifications. Unlocks trust badge. Free.", color: "var(--green)" },
  { tier: "T4", label: "Enhanced DBS", desc: "Required for childcare & vulnerable adults. £49.50.", color: "var(--amber)" },
];

export default function BecomeAProviderPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: "var(--green)" }}>For Professionals</p>
          <h1 className="font-serif font-semibold mb-6 text-white" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1, color: "var(--text)" }}>
            Grow your business<br />on your terms.
          </h1>
          <p className="text-[16px] mb-10 max-w-[480px] mx-auto" style={{ color: "var(--muted)" }}>
            Join Manchester&apos;s fastest-growing service marketplace. Get broadcast requests like Uber, or build a loyal direct client base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup/provider" className="px-8 py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white transition-all hover:opacity-90" style={{ background: "var(--green)" }}>
              Apply as a Provider
            </Link>
            <Link href="#how-it-works" className="px-8 py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase border transition-all hover:opacity-80" style={{ border: "1.5px solid var(--border)", color: "var(--text)" }}>
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-10" style={{ background: "var(--surface)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6">
          {[["£2,800", "Avg. monthly earnings"], ["48 hrs", "From apply to live"], ["98%", "Client satisfaction"]].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-serif text-[40px] font-semibold mb-1" style={{ color: "var(--green)" }}>{v}</p>
              <p className="text-[13px]" style={{ color: "var(--muted)" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[36px] font-semibold text-center mb-12" style={{ color: "var(--text)" }}>Everything you need to thrive.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--green-light)", color: "var(--green)" }}>
                  {p.icon}
                </div>
                <h3 className="font-serif text-[17px] font-semibold mb-1" style={{ color: "var(--text)" }}>{p.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section id="verify" className="py-20 px-6 lg:px-10" style={{ background: "var(--surface)" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-serif text-[32px] font-semibold mb-3" style={{ color: "var(--text)" }}>Verification tiers</h2>
          <p className="text-[13px] mb-10" style={{ color: "var(--muted)" }}>Start with T1 (free) to get listed. Add tiers to unlock more trust, more clients, and higher rates.</p>
          <div className="space-y-3">
            {TIERS.map((t) => (
              <div key={t.tier} className="p-5 rounded-xl border flex items-center gap-4 text-left" style={{ background: "var(--white)", borderColor: "var(--border)" }}>
                <span className="w-10 h-10 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: t.color }}>{t.tier}</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>{t.label}</p>
                  <p className="text-[11px]" style={{ color: "var(--muted)" }}>{t.desc}</p>
                </div>
                <Check size={16} className="ml-auto flex-shrink-0" style={{ color: "var(--green)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-serif text-[36px] font-semibold mb-4" style={{ color: "var(--text)" }}>Ready to grow?</h2>
          <p className="text-[14px] mb-8" style={{ color: "var(--muted)" }}>Applications take less than 10 minutes. You can be live within 48 hours.</p>
          <Link href="/signup/provider" className="inline-block px-10 py-4 rounded-xl text-[13px] font-bold tracking-wide uppercase text-white transition-all hover:opacity-90" style={{ background: "var(--green)" }}>
            Apply Now — It&apos;s Free
          </Link>
        </div>
      </section>
    </div>
  );
}
