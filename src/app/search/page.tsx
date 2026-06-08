"use client";

import { useState } from "react";
import Link from "next/link";

const mockProviders = [
  { name: "Elena Vance", title: "Master Hair Colorist", location: "Mayfair, London", rating: "4.9", reviews: 142, price: "£120", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", slug: "elena-vance", category: "Hair Styling", available: true },
  { name: "Marcus Thorne", title: "Performance Coach", location: "Chelsea, London", rating: "5.0", reviews: 89, price: "£85", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80", slug: "marcus-thorne", category: "Fitness", available: true },
  { name: "Sophie Laurent", title: "Makeup Artist", location: "Kensington, London", rating: "4.8", reviews: 215, price: "£200", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", slug: "sophie-laurent", category: "Beauty", available: false },
  { name: "David Chen", title: "Private Math Tutor", location: "Richmond, London", rating: "4.9", reviews: 67, price: "£60", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80", slug: "david-chen", category: "Education", available: true },
  { name: "Amara Osei", title: "Braid Specialist", location: "Brixton, London", rating: "4.9", reviews: 312, price: "£95", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&q=80", slug: "amara-osei", category: "Beauty", available: true },
  { name: "James Whitfield", title: "Portrait Photographer", location: "Shoreditch, London", rating: "4.7", reviews: 98, price: "£250", img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=400&q=80", slug: "james-whitfield", category: "Photography", available: true },
];

const categories = ["All", "Beauty", "Fitness", "Education", "Photography", "Wellness", "Home Services"];

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = mockProviders.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Search Header */}
      <div className="bg-surface-container-low border-b border-outline-variant/30 py-8 px-[80px] max-w-[1440px] mx-auto">
        <div className="bg-white p-2 rounded-full editorial-shadow flex flex-col md:flex-row gap-2 max-w-3xl border border-outline-variant/20">
          <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-outline-variant/30">
            <span className="material-symbols-outlined text-primary mr-3">search</span>
            <input className="w-full outline-none font-manrope text-[16px] text-on-surface placeholder:text-on-surface-variant/50" placeholder="What service?" type="text" />
          </div>
          <div className="flex-1 flex items-center px-6 py-3">
            <span className="material-symbols-outlined text-primary mr-3">location_on</span>
            <input className="w-full outline-none font-manrope text-[16px] text-on-surface placeholder:text-on-surface-variant/50" placeholder="Location" type="text" />
          </div>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
            Search
          </button>
        </div>
      </div>

      <div className="px-[80px] max-w-[1440px] mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="bg-white rounded-xl border border-outline-variant/20 editorial-shadow p-6 sticky top-24">
              <h3 className="font-playfair text-[24px] font-semibold mb-6">Filters</h3>

              <div className="mb-6">
                <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-full font-manrope text-[14px] transition-all ${selectedCategory === cat ? "bg-primary text-on-primary" : "text-on-surface-variant hover:bg-surface-container-low"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-3">Price Range</h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-1/2 px-3 py-2 border border-outline-variant rounded-lg font-manrope text-[14px] outline-none focus:border-primary" />
                  <input type="number" placeholder="Max" className="w-1/2 px-3 py-2 border border-outline-variant rounded-lg font-manrope text-[14px] outline-none focus:border-primary" />
                </div>
              </div>

              <div>
                <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-3">Availability</h4>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="accent-primary w-4 h-4" />
                  <span className="font-manrope text-[14px] text-on-surface-variant">Available Now</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="font-manrope text-[16px] text-on-surface-variant">
                <span className="font-semibold text-on-surface">{filtered.length}</span> professionals found
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-outline-variant rounded-full font-manrope text-[14px] text-on-surface outline-none focus:border-primary"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((pro) => (
                <div key={pro.slug} className="bg-white rounded-xl overflow-hidden editorial-shadow group border border-outline-variant/10">
                  <div className="relative aspect-square">
                    <img src={pro.img} alt={pro.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      <span className="font-manrope text-[12px] font-medium text-on-surface">Verified</span>
                    </div>
                    {pro.available && (
                      <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-manrope text-[12px] font-semibold">
                        Available
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-playfair text-[24px] font-semibold text-on-surface leading-tight">{pro.name}</h3>
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-manrope text-[14px] font-semibold tracking-[0.05em]">{pro.rating}</span>
                      </div>
                    </div>
                    <p className="font-manrope text-[16px] text-on-surface-variant mb-1">{pro.title}</p>
                    <p className="font-manrope text-[12px] text-on-surface-variant/70 mb-4">{pro.reviews} reviews</p>
                    <div className="flex items-center gap-2 mb-6 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span className="font-manrope text-[12px] font-medium">{pro.location}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                      <div>
                        <p className="font-manrope text-[12px] font-medium text-on-surface-variant">Starts from</p>
                        <p className="font-playfair text-[24px] font-semibold text-primary">{pro.price}</p>
                      </div>
                      <Link href={`/providers/${pro.slug}`} className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
