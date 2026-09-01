"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, SlidersHorizontal, Star, ShieldCheck, Zap, X } from "lucide-react";

const PROVIDERS = [
  { name: "Jasmine Clarke", title: "Natural Hair Specialist", location: "Moss Side, Manchester", rating: 4.9, reviews: 87, price: 100, slug: "jasmine-clarke", category: "Beauty & Hair", online: true, initial: "J", color: "#6BA07E", verified: true },
  { name: "Marcus Adeyemi", title: "Performance Coach", location: "Salford, Manchester", rating: 5.0, reviews: 43, price: 60, slug: "marcus-adeyemi", category: "Fitness", online: true, initial: "M", color: "#C4883A", verified: true },
  { name: "Unique Okonkwo", title: "Nail Artist", location: "Salford, Manchester", rating: 4.8, reviews: 112, price: 65, slug: "unique-okonkwo", category: "Nails & Lashes", online: true, initial: "U", color: "#7B5EA7", verified: true },
  { name: "Tee Williams", title: "Hair & Colour Specialist", location: "Hulme, Manchester", rating: 4.7, reviews: 54, price: 80, slug: "tee-williams", category: "Beauty & Hair", online: false, initial: "T", color: "#4A7A60", verified: true },
  { name: "Priya Sharma", title: "Makeup Artist", location: "Didsbury, Manchester", rating: 4.9, reviews: 201, price: 150, slug: "priya-sharma", category: "Beauty & Hair", online: true, initial: "P", color: "#C4883A", verified: true },
  { name: "Kwame Asante", title: "Personal Trainer", location: "Ancoats, Manchester", rating: 4.6, reviews: 38, price: 55, slug: "kwame-asante", category: "Fitness", online: false, initial: "K", color: "#6BA07E", verified: false },
];

const CATS = ["All", "Beauty & Hair", "Fitness", "Nails & Lashes", "Childcare", "Cleaning", "Photography"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"rating" | "price" | "reviews">("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = PROVIDERS
    .filter((p) => cat === "All" || p.category === cat)
    .filter((p) => !onlineOnly || p.online)
    .filter((p) => !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => sortBy === "price" ? a.price - b.price : sortBy === "reviews" ? b.reviews - a.reviews : b.rating - a.rating);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Search header */}
      <div className="sticky top-0 z-10 px-6 py-4" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-3 items-center">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}>
              <Search size={16} style={{ color: "var(--muted)" }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search providers or services..."
                className="flex-1 bg-transparent text-[13px] outline-none"
                style={{ color: "var(--text)" }}
              />
              {query && <button onClick={() => setQuery("")}><X size={14} style={{ color: "var(--muted)" }} /></button>}
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "var(--white)", border: "1.5px solid var(--border)" }}>
              <MapPin size={14} style={{ color: "var(--green)" }} />
              <span className="text-[13px]" style={{ color: "var(--text)" }}>Manchester</span>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all"
              style={{ background: showFilters ? "var(--green)" : "var(--white)", color: showFilters ? "white" : "var(--text)", border: showFilters ? "none" : "1.5px solid var(--border)" }}
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="px-4 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap border transition-all flex-shrink-0"
                style={{
                  background: cat === c ? "var(--green)" : "var(--white)",
                  borderColor: cat === c ? "var(--green)" : "var(--border)",
                  color: cat === c ? "white" : "var(--body)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {/* Filter bar */}
        {showFilters && (
          <div className="mb-6 p-5 rounded-2xl flex flex-wrap gap-6 items-center" style={{ background: "var(--white)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOnlineOnly(!onlineOnly)}
                className="w-10 h-5 rounded-full relative transition-all"
                style={{ background: onlineOnly ? "var(--green)" : "var(--border)" }}
              >
                <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all" style={{ left: onlineOnly ? "calc(100% - 18px)" : "2px" }} />
              </button>
              <span className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>Online now only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px]" style={{ color: "var(--muted)" }}>Sort:</span>
              {(["rating", "price", "reviews"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className="px-3 py-1 rounded-lg text-[11px] font-semibold capitalize transition-all"
                  style={{ background: sortBy === s ? "var(--green-light)" : "transparent", color: sortBy === s ? "var(--green)" : "var(--muted)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px]" style={{ color: "var(--muted)" }}>{filtered.length} providers found</p>
          {/* Broadcast CTA */}
          <Link
            href="/book/broadcast"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide uppercase text-white transition-all hover:opacity-90"
            style={{ background: "var(--green)" }}
          >
            <Zap size={12} fill="white" /> Instant Match
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/providers/${p.slug}`} className="group block">
              <div
                className="rounded-2xl overflow-hidden border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ background: "var(--white)", borderColor: "var(--border)" }}
              >
                {/* Avatar */}
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${p.color}40, ${p.color}80)` }}
                >
                  <span className="font-serif text-[64px] font-semibold text-white/80">{p.initial}</span>
                  {p.online && (
                    <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "var(--green)", color: "white" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" /> ONLINE
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>{p.name}</p>
                      <p className="text-[12px]" style={{ color: "var(--muted)" }}>{p.title}</p>
                    </div>
                    {p.verified && <ShieldCheck size={16} style={{ color: "var(--green)", flexShrink: 0 }} />}
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <MapPin size={11} style={{ color: "var(--muted)" }} />
                    <span className="text-[11px]" style={{ color: "var(--muted)" }}>{p.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-1">
                      <Star size={12} fill="var(--amber)" style={{ color: "var(--amber)" }} />
                      <span className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>{p.rating}</span>
                      <span className="text-[11px]" style={{ color: "var(--muted)" }}>({p.reviews})</span>
                    </div>
                    <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>From <span style={{ color: "var(--green)" }}>£{p.price}</span></p>
                  </div>

                  <button
                    className="w-full mt-4 py-2.5 rounded-xl text-[12px] font-bold tracking-wide uppercase transition-all"
                    style={{ background: "var(--green-light)", color: "var(--green)" }}
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    View & Book
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
