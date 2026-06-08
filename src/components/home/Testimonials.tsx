const testimonials = [
  {
    quote: "Trovu has completely transformed how I manage my wellness routine. Every professional I've booked has been exceptional.",
    name: "Alexandra Grey",
    location: "London, UK",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    offset: false,
  },
  {
    quote: "The level of service and the ease of booking is unparalleled. It truly feels like a boutique concierge for every need.",
    name: "Julian Thorne",
    location: "Paris, France",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    offset: true,
  },
  {
    quote: "Finding a verified tutor for my son was effortless. Trovu provides the peace of mind that is so rare in online marketplaces.",
    name: "Elena Rossi",
    location: "New York, USA",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    offset: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-[120px] bg-surface-container-high/20">
      <div className="px-[80px] max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-on-background mb-4">
            Trusted by the discerning.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-white p-10 rounded-2xl editorial-shadow ${t.offset ? "md:translate-y-8" : ""}`}
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-manrope text-[18px] leading-[1.6] text-on-surface mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-on-surface">
                    {t.name}
                  </p>
                  <p className="font-manrope text-[12px] font-medium text-on-surface-variant">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
