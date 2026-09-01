import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className="rounded-2xl p-12 lg:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--green)", boxShadow: "var(--shadow-xl)" }}
        >
          {/* Soft radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <h2
              className="font-serif font-semibold mb-4 text-white"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              Find your person today.
            </h2>
            <p className="text-[15px] mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Describe what you need — AI finds who&apos;s available near you right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/search"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[12px] font-bold tracking-[0.07em] uppercase transition-all hover:opacity-95"
                style={{ background: "var(--white)", color: "var(--green-deep)" }}
              >
                <Zap size={13} fill="currentColor" />
                Match Me Now
              </Link>
              <Link
                href="/become-a-provider"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[12px] font-bold tracking-[0.07em] uppercase border-2 border-white/40 text-white transition-all hover:bg-white/10"
              >
                Become a Provider
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
