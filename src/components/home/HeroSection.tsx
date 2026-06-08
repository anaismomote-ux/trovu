import Link from "next/link";

const popularTags = ["Hair Styling", "Personal Training", "Photography", "Massage Therapy"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface-container-low">
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="w-full h-full relative">
          <img
            src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=80"
            alt="Premium beauty service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent" />
        </div>
      </div>

      <div className="relative z-10 px-[80px] max-w-[1440px] mx-auto w-full py-[120px]">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-on-background mb-6">
            Find trusted professionals for every service.
          </h1>
          <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant mb-10">
            Discover, compare and book verified professionals through one premium marketplace curated for your lifestyle.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-full editorial-shadow flex flex-col md:flex-row gap-2 max-w-3xl border border-outline-variant/20">
            <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mr-3">search</span>
              <input
                className="w-full border-none focus:ring-0 font-manrope text-[16px] text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                placeholder="What service?"
                type="text"
              />
            </div>
            <div className="flex-1 flex items-center px-6 py-3">
              <span className="material-symbols-outlined text-primary mr-3">location_on</span>
              <input
                className="w-full border-none focus:ring-0 font-manrope text-[16px] text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                placeholder="Location"
                type="text"
              />
            </div>
            <Link
              href="/search"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all text-center"
            >
              Search
            </Link>
          </div>

          {/* Popular tags */}
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <span className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-on-surface-variant">
              Popular:
            </span>
            <div className="flex gap-2 flex-wrap">
              {popularTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="px-4 py-1 rounded-full border border-outline-variant font-manrope text-[12px] font-medium text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 flex-wrap">
            {[
              { icon: "verified", label: "10,000+ Verified Providers" },
              { icon: "star", label: "4.9 Average Rating" },
              { icon: "shield", label: "Escrow Protected" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-lg">{item.icon}</span>
                <span className="font-manrope text-[14px] font-semibold text-on-surface-variant">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
