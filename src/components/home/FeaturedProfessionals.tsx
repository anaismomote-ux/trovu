import Link from "next/link";

const professionals = [
  {
    name: "Elena Vance",
    title: "Master Hair Colorist",
    location: "Mayfair, London",
    rating: "4.9",
    price: "£120",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    slug: "elena-vance",
  },
  {
    name: "Marcus Thorne",
    title: "Performance Coach",
    location: "Chelsea, London",
    rating: "5.0",
    price: "£85",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
    slug: "marcus-thorne",
  },
  {
    name: "Sophie Laurent",
    title: "Makeup Artist",
    location: "Kensington, London",
    rating: "4.8",
    price: "£200",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    slug: "sophie-laurent",
  },
  {
    name: "David Chen",
    title: "Private Math Tutor",
    location: "Richmond, London",
    rating: "4.9",
    price: "£60",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    slug: "david-chen",
  },
];

export default function FeaturedProfessionals() {
  return (
    <section className="py-[120px] bg-surface-container-low">
      <div className="px-[80px] max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-[32px] leading-[1.3] font-semibold text-on-background mb-4">
            Elite Professionals
          </h2>
          <p className="font-manrope text-[16px] text-on-surface-variant max-w-2xl mx-auto">
            Vetted experts hand-picked for their exceptional craft and professional integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((pro) => (
            <div
              key={pro.name}
              className="bg-white rounded-xl overflow-hidden editorial-shadow group border border-outline-variant/10"
            >
              <div className="relative aspect-square">
                <img
                  src={pro.img}
                  alt={pro.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-tertiary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-manrope text-[12px] font-medium text-on-surface">Verified</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-playfair text-[24px] font-semibold text-on-surface leading-tight">
                    {pro.name}
                  </h3>
                  <div className="flex items-center gap-1 text-primary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-manrope text-[14px] font-semibold tracking-[0.05em]">
                      {pro.rating}
                    </span>
                  </div>
                </div>
                <p className="font-manrope text-[16px] text-on-surface-variant mb-4">{pro.title}</p>
                <div className="flex items-center gap-2 mb-6 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="font-manrope text-[12px] font-medium">{pro.location}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                  <div>
                    <p className="font-manrope text-[12px] font-medium text-on-surface-variant">
                      Starts from
                    </p>
                    <p className="font-playfair text-[24px] font-semibold text-primary">{pro.price}</p>
                  </div>
                  <Link
                    href={`/providers/${pro.slug}`}
                    className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
