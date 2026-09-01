import Link from "next/link";
import { MapPin, Star, ShieldCheck } from "lucide-react";

const PROVIDERS = [
  { name: "Jasmine Clarke",  role: "Natural Hair Specialist",  location: "Manchester",   price: 100, rating: 4.9, reviews: 87,  tier: "T1", category: "Hair",     slug: "jasmine-clarke",  online: true  },
  { name: "Marcus Adeyemi",  role: "Performance Coach",        location: "Manchester",   price: 60,  rating: 5.0, reviews: 43,  tier: "T1", category: "Fitness",  slug: "marcus-adeyemi",  online: true  },
  { name: "Unique Okonkwo",  role: "Nail Artist",              location: "Salford",      price: 65,  rating: 4.8, reviews: 112, tier: "T1", category: "Nails",    slug: "unique-okonkwo",  online: false },
  { name: "Tee Williams",    role: "Hair & Colour Specialist", location: "Manchester",   price: 80,  rating: 4.7, reviews: 54,  tier: "T1", category: "Hair",     slug: "tee-williams",    online: true  },
];

const AVATAR_COLORS = ["#6BA07E", "#C4883A", "#7B5EA7", "#3A7ABE"];

function Avatar({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="w-full aspect-square flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
    >
      <span
        className="font-serif text-white font-semibold"
        style={{ fontSize: "clamp(48px, 8vw, 72px)" }}
      >
        {name[0]}
      </span>
    </div>
  );
}

export default function FeaturedProfessionals() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--green)" }}>
              Online now
            </p>
            <h2 className="font-serif text-[32px] font-semibold" style={{ color: "var(--text)" }}>
              Ready to take your booking.
            </h2>
          </div>
          <Link
            href="/search"
            className="hidden sm:block text-[11px] font-bold tracking-[0.07em] uppercase"
            style={{ color: "var(--green)" }}
          >
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PROVIDERS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/providers/${p.slug}`}
              className="group rounded-xl overflow-hidden border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "var(--white)", borderColor: "var(--border)" }}
            >
              {/* Avatar */}
              <div className="relative aspect-square overflow-hidden">
                <Avatar name={p.name} color={AVATAR_COLORS[i]} />

                {/* Online dot */}
                {p.online && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                    <span className="text-[9px] font-bold tracking-wide uppercase" style={{ color: "var(--green)" }}>Online</span>
                  </div>
                )}

                {/* Verified badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                  <ShieldCheck size={10} style={{ color: "var(--green)" }} />
                  <span className="text-[9px] font-bold" style={{ color: "var(--green-deep)" }}>{p.tier} Verified</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-0.5">
                  <h3 className="font-serif text-[15px] font-semibold leading-tight" style={{ color: "var(--text)" }}>
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <Star size={10} fill="var(--amber)" style={{ color: "var(--amber)" }} />
                    <span className="text-[11px] font-bold" style={{ color: "var(--text)" }}>{p.rating}</span>
                  </div>
                </div>
                <p className="text-[11px] mb-2" style={{ color: "var(--muted)" }}>{p.role}</p>
                <div className="flex items-center gap-1 mb-3">
                  <MapPin size={10} style={{ color: "var(--muted)" }} />
                  <span className="text-[10px]" style={{ color: "var(--muted)" }}>{p.location} · {p.reviews} reviews</span>
                </div>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div>
                    <p className="text-[9px] font-bold tracking-wide uppercase" style={{ color: "var(--muted)" }}>From</p>
                    <p className="font-serif text-[18px] font-semibold" style={{ color: "var(--green)" }}>£{p.price}</p>
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg transition-colors group-hover:bg-green group-hover:text-white"
                    style={{ background: "var(--green-light)", color: "var(--green-deep)" }}
                  >
                    Book
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
