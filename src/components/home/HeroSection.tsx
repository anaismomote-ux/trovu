import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface-container-low">
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover"
            alt="A high-end editorial lifestyle photograph of a sophisticated woman receiving a professional beauty treatment in a sun-drenched, minimalist studio."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC88EHIRN8UMPnbFdjY_szs0wzmgfOYEfSRKYEZa0c4Xgd4ti85BBBpUyfRvuHyS_M9NxC2JgnA_2TEaDupQhdRYT-sUhxRevd70q17CIGFtxzt_JXXV43m3nlj99-CAIPkIr6lQ9U3orHhR8qWeB5ZmY-dQSgBQeA2oSrF4iBaqR-ZBRX7vBQ_GTM3oa3HJ_x-Vl1tb3AfOX9GfRtxzc_Xtx2vs1EgEonWle2ucCde6Vk3lqQvNjpggMC_973BxFkFuzv3mfwGrflH"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent"></div>
        </div>
      </div>
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full py-section-gap">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-display-lg text-on-background mb-6 leading-tight">
            Find trusted professionals for every service.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Discover, compare and book verified professionals through one premium marketplace curated for your lifestyle.
          </p>
          <div className="bg-white p-2 rounded-full editorial-shadow flex flex-col md:flex-row gap-2 max-w-3xl border border-outline-variant/20">
            <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mr-3">search</span>
              <input
                className="w-full border-none focus:ring-0 font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none bg-transparent"
                placeholder="What service?"
                type="text"
              />
            </div>
            <div className="flex-1 flex items-center px-6 py-3">
              <span className="material-symbols-outlined text-primary mr-3">location_on</span>
              <input
                className="w-full border-none focus:ring-0 font-body-md text-on-surface placeholder:text-on-surface-variant/50 outline-none bg-transparent"
                placeholder="Location"
                type="text"
              />
            </div>
            <Link
              href="/search"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all text-center"
            >
              Search
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-label-md text-label-md text-on-surface-variant">Popular:</span>
            <div className="flex gap-2">
              <Link href="/search?q=Interior+Design" className="px-4 py-1 rounded-full border border-outline-variant text-label-sm font-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                Interior Design
              </Link>
              <Link href="/search?q=Personal+Training" className="px-4 py-1 rounded-full border border-outline-variant text-label-sm font-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                Personal Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
