import Link from "next/link";
import { Gift } from "lucide-react";

export default function GiftVouchersBanner() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className="rounded-2xl p-10 lg:p-14 flex flex-col md:flex-row items-center gap-10"
          style={{ background: "var(--amber-light)", border: "1.5px solid var(--amber)" }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--amber)", color: "white" }}>
            <Gift size={28} />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1" style={{ color: "var(--amber)" }}>
              Trovu Gifting
            </p>
            <h2 className="font-serif text-[26px] font-semibold mb-2" style={{ color: "var(--text)" }}>
              Give the gift of a great experience.
            </h2>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--body)" }}>
              Trovu gift vouchers let your loved ones choose any verified service on the platform — valid for 12 months, delivered instantly by email.
            </p>
          </div>
          <Link
            href="/gift-vouchers"
            className="flex-shrink-0 px-7 py-3.5 rounded-xl text-white text-[11px] font-bold tracking-[0.07em] uppercase transition-all hover:opacity-90 whitespace-nowrap"
            style={{ background: "var(--amber)" }}
          >
            Buy a Voucher
          </Link>
        </div>
      </div>
    </section>
  );
}
