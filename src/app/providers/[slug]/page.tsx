import Link from "next/link";

export default function ProviderProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-surface-container-low py-16 px-[80px] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
              alt="Elena Vance"
              className="w-48 h-48 rounded-2xl object-cover editorial-shadow"
            />
            <div className="absolute -bottom-3 -right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 editorial-shadow border border-outline-variant/20">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-manrope text-[12px] font-semibold text-on-surface">Verified</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <h1 className="font-playfair text-[48px] font-bold text-on-background mb-2">Elena Vance</h1>
                <p className="font-manrope text-[18px] text-on-surface-variant mb-4">Master Hair Colorist</p>
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="font-manrope text-[14px] font-semibold ml-1">4.9</span>
                    <span className="font-manrope text-[14px] text-on-surface-variant">(142 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="font-manrope text-[14px]">Mayfair, London</span>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="font-manrope text-[14px]">Responds within 1 hour</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/20 min-w-[300px]">
                <p className="font-manrope text-[12px] font-semibold text-on-surface-variant mb-1">Starts from</p>
                <p className="font-playfair text-[48px] font-bold text-primary mb-6">£120</p>
                <Link
                  href="/bookings/new"
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all text-center block mb-3"
                >
                  Book Now
                </Link>
                <button className="w-full border border-outline-variant text-on-surface py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-surface-container-low transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[80px] max-w-[1440px] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="font-playfair text-[32px] font-semibold mb-6">About</h2>
              <p className="font-manrope text-[16px] text-on-surface-variant leading-relaxed">
                With over 12 years of experience in luxury hair colouring, Elena has built a reputation for transformative colour work at the highest level. Trained in Paris and London, she specialises in balayage, colour correction, and bespoke toning treatments that complement each client&apos;s unique features.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="font-playfair text-[32px] font-semibold mb-6">Services</h2>
              <div className="space-y-4">
                {[
                  { name: "Full Balayage", duration: "3 hours", price: "£280" },
                  { name: "Colour Refresh", duration: "1.5 hours", price: "£120" },
                  { name: "Glossing Treatment", duration: "45 min", price: "£80" },
                  { name: "Colour Consultation", duration: "30 min", price: "Free" },
                ].map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-6 bg-white rounded-xl border border-outline-variant/20 editorial-shadow">
                    <div>
                      <h4 className="font-playfair text-[20px] font-semibold mb-1">{service.name}</h4>
                      <p className="font-manrope text-[14px] text-on-surface-variant">{service.duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-playfair text-[24px] font-semibold text-primary">{service.price}</span>
                      <button className="bg-primary text-on-primary px-5 py-2 rounded-full font-manrope text-[14px] font-semibold hover:bg-on-primary-container transition-all">
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio */}
            <section>
              <h2 className="font-playfair text-[32px] font-semibold mb-6">Portfolio</h2>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${["1560869713-7d0a29430803", "1522337360826-a8e79f2ab3c2", "1522338242992-e1a54906a8da", "1546961342-ea5f71b193f5", "1580618672591-eb180b1a973f", "1522337660-f5d02f299f72"][i]}?w=300&q=80`}
                      alt={`Portfolio ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="font-playfair text-[32px] font-semibold mb-6">Reviews</h2>
              <div className="space-y-6">
                {[
                  { name: "Sarah M.", date: "May 2026", rating: 5, text: "Absolutely incredible work. Elena completely transformed my hair and I couldn't be happier." },
                  { name: "Priya K.", date: "April 2026", rating: 5, text: "The best balayage I've ever had. Elena listened carefully and delivered beyond expectations." },
                  { name: "Charlotte B.", date: "March 2026", rating: 4, text: "Exceptional skill and professionalism. Will definitely be returning." },
                ].map((review) => (
                  <div key={review.name} className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-manrope text-[14px] font-semibold text-on-surface">{review.name}</p>
                        <p className="font-manrope text-[12px] text-on-surface-variant">{review.date}</p>
                      </div>
                      <div className="flex text-primary">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                    </div>
                    <p className="font-manrope text-[16px] text-on-surface-variant italic">&ldquo;{review.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <h3 className="font-playfair text-[20px] font-semibold mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">badge</span>
                  <span className="font-manrope text-[14px] text-on-surface-variant">5-step verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
                  <span className="font-manrope text-[14px] text-on-surface-variant">12 years experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">home_work</span>
                  <span className="font-manrope text-[14px] text-on-surface-variant">Mobile & salon available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">language</span>
                  <span className="font-manrope text-[14px] text-on-surface-variant">English, French</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <h3 className="font-playfair text-[20px] font-semibold mb-4">Availability</h3>
              <div className="space-y-2">
                {["Monday", "Tuesday", "Thursday", "Friday", "Saturday"].map((day) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="font-manrope text-[14px] text-on-surface-variant">{day}</span>
                    <span className="font-manrope text-[12px] font-semibold text-tertiary">9am – 6pm</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
