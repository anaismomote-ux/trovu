import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  { icon: "💇", label: "Beauty & Hair",     sub: "Hair, nails, lashes, skincare",  href: "/search?cat=beauty",       span: "md:col-span-4" },
  { icon: "🏋️", label: "Fitness",          sub: "Personal training, yoga, pilates", href: "/search?cat=fitness",     span: "md:col-span-4" },
  { icon: "🏠", label: "Home Services",     sub: "Cleaning, handyman, gardening",  href: "/search?cat=home",         span: "md:col-span-4" },
  { icon: "🧒", label: "Childcare & Pets",  sub: "Nanny, dog walking, pet sitting", href: "/search?cat=childcare",   span: "md:col-span-3" },
  { icon: "📸", label: "Creative & Events", sub: "Photography, DJ, catering",       href: "/search?cat=events",      span: "md:col-span-3" },
  { icon: "📚", label: "Tutoring",          sub: "Private tutor, music, languages", href: "/search?cat=education",   span: "md:col-span-3" },
  { icon: "🔧", label: "Trades",            sub: "Plumber, electrician, builder",   href: "/search?cat=trades",      span: "md:col-span-3" },
  { icon: "💼", label: "Professional",      sub: "Accountant, solicitor, HR",       href: "/search?cat=professional",span: "md:col-span-6" },
  { icon: "🚗", label: "Automotive",        sub: "Car wash, valet, mechanic",       href: "/search?cat=automotive",  span: "md:col-span-6" },
];

export default function CategoriesSection() {
  return (
    <section
      className="py-20 px-6 lg:px-10"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--green)" }}>
              What we offer
            </p>
            <h2 className="font-serif text-[32px] font-semibold leading-tight" style={{ color: "var(--text)" }}>
              Every service. One place.
            </h2>
          </div>
          <Link
            href="/search"
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold tracking-[0.07em] uppercase transition-colors group"
            style={{ color: "var(--green)" }}
          >
            View all
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={`${cat.span} group flex flex-col gap-3 p-5 rounded-xl border transition-all duration-200 hover:border-green hover:shadow-md`}
              style={{
                background: "var(--white)",
                borderColor: "var(--border)",
              }}
            >
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <p
                  className="text-[14px] font-semibold mb-0.5 group-hover:text-green transition-colors"
                  style={{ color: "var(--text)", fontFamily: "var(--font-serif)" }}
                >
                  {cat.label}
                </p>
                <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                  {cat.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
