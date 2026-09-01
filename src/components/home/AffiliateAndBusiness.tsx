import Link from "next/link";
import { Users, Building2, ArrowRight } from "lucide-react";

export default function AffiliateAndBusiness() {
  return (
    <section className="py-8 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-4">

        <div
          className="p-8 rounded-2xl border group transition-all hover:shadow-md hover:border-green"
          style={{ background: "var(--white)", borderColor: "var(--border)" }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "var(--green-light)" }}>
            <Users size={18} style={{ color: "var(--green-deep)" }} />
          </div>
          <h3 className="font-serif text-[20px] font-semibold mb-2" style={{ color: "var(--text)" }}>
            Affiliate Programme
          </h3>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            Refer clients or providers to Trovu and earn commission on every booking they make. No cap, no minimums.
          </p>
          <Link href="/affiliate" className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase group-hover:gap-2.5 transition-all"
            style={{ color: "var(--green)" }}>
            Join Programme <ArrowRight size={13} />
          </Link>
        </div>

        <div
          className="p-8 rounded-2xl border group transition-all hover:shadow-md hover:border-green"
          style={{ background: "var(--white)", borderColor: "var(--border)" }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "var(--green-light)" }}>
            <Building2 size={18} style={{ color: "var(--green-deep)" }} />
          </div>
          <h3 className="font-serif text-[20px] font-semibold mb-2" style={{ color: "var(--text)" }}>
            Business Solutions
          </h3>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            Scalable tools for salons, gyms, and agencies. Multi-provider scheduling, team dashboards, and priority support.
          </p>
          <Link href="/business" className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase group-hover:gap-2.5 transition-all"
            style={{ color: "var(--green)" }}>
            Request a Demo <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
