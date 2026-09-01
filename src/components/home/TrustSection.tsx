import { ShieldCheck, Lock, Star, BadgeCheck } from "lucide-react";

const TRUST = [
  { icon: ShieldCheck, title: "DBS Verified",         desc: "Providers working in homes or with vulnerable people carry a valid DBS check — processed by Trovu." },
  { icon: Lock,        title: "Escrow Protection",    desc: "Funds are held securely until both parties confirm the service is complete. Never pay direct." },
  { icon: BadgeCheck,  title: "Identity Checked",     desc: "Every provider is verified against government-issued ID with biometric face matching." },
  { icon: Star,        title: "Reviewed & Rated",     desc: "Every review is from a real completed booking — no fake stars, no anonymous posts." },
];

const TIERS = [
  { code: "T1", label: "ID Verified",        color: "var(--green)",  desc: "Government ID + selfie biometric" },
  { code: "T2", label: "Home Access",        color: "var(--amber)",  desc: "ID + Basic DBS + Insurance" },
  { code: "T3", label: "Trade Certified",    color: "#B97020",       desc: "DBS + Gas Safe / NICEIC cert" },
  { code: "T4", label: "Enhanced DBS",       color: "#C0544A",       desc: "For childcare & vulnerable adults" },
  { code: "T6", label: "Regulated Pro",      color: "#7B5EA7",       desc: "HCPC / NMC / SRA / FCA verified" },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--green)" }}>
              Built for trust
            </p>
            <h2 className="font-serif text-[32px] font-semibold mb-4 leading-tight" style={{ color: "var(--text)" }}>
              Safety isn&apos;t an afterthought.<br />It&apos;s the product.
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ color: "var(--body)" }}>
              Trovu runs the UK&apos;s most rigorous provider verification system — because when someone enters your home, trust is everything.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {TRUST.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-xl border"
                  style={{ background: "var(--white)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "var(--green-light)" }}
                  >
                    <Icon size={16} style={{ color: "var(--green-deep)" }} />
                  </div>
                  <h4 className="font-serif text-[15px] font-semibold mb-1" style={{ color: "var(--text)" }}>{title}</h4>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — verification tiers */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: "var(--muted)" }}>
              Verification tiers
            </p>
            <div className="space-y-3">
              {TIERS.map((tier) => (
                <div
                  key={tier.code}
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ background: "var(--white)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: tier.color }}
                  >
                    <span className="text-[11px] font-bold">{tier.code}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>{tier.label}</p>
                    <p className="text-[11px]" style={{ color: "var(--muted)" }}>{tier.desc}</p>
                  </div>
                  <ShieldCheck size={14} style={{ color: tier.color, flexShrink: 0 }} />
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-5 rounded-xl"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green)" }}
            >
              <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--green-deep)" }}>
                Every booking is escrow-protected
              </p>
              <p className="text-[12px]" style={{ color: "var(--green-deep)", opacity: 0.8 }}>
                Your payment is never released until you confirm the service is complete. Dispute within 48 hours for a full review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
