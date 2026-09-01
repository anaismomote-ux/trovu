import { Star } from "lucide-react";

const TESTIMONIALS = [
  { quote: "I described what I wanted and Jasmine was at my door two hours later. The braids were perfect — exactly what I asked for.", name: "Priya M.", location: "Manchester", rating: 5, initial: "P", color: "#6BA07E" },
  { quote: "As a provider, the Uber-style ping changed everything. I went from chasing clients to clients competing for my slots.", name: "Jasmine C.", location: "Salford — Hair Specialist", rating: 5, initial: "J", color: "#C4883A" },
  { quote: "The escrow protection gave me total peace of mind. I knew my money was safe until I confirmed I was happy.", name: "Amara D.", location: "Manchester", rating: 5, initial: "A", color: "#7B5EA7" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--green)" }}>
            Real reviews
          </p>
          <h2 className="font-serif text-[32px] font-semibold" style={{ color: "var(--text)" }}>
            Trusted by clients &amp; providers.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`p-6 rounded-xl border ${i === 1 ? "md:translate-y-4" : ""}`}
              style={{ background: "var(--white)", borderColor: "var(--border)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} fill="var(--amber)" style={{ color: "var(--amber)" }} />
                ))}
              </div>

              <p className="text-[13px] leading-relaxed italic mb-6" style={{ color: "var(--body)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-white font-semibold text-[16px]"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>{t.name}</p>
                  <p className="text-[10px]" style={{ color: "var(--muted)" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
