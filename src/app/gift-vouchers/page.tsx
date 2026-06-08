import Link from "next/link";

const fixedVouchers = [
  { amount: "£25", desc: "Perfect for a taster service", popular: false },
  { amount: "£50", desc: "Ideal for a single treatment", popular: false },
  { amount: "£100", desc: "A generous gift for any occasion", popular: true },
  { amount: "£200", desc: "A premium experience gift", popular: false },
  { amount: "£500", desc: "The ultimate luxury gifting", popular: false },
];

const serviceVouchers = [
  { name: "Hair Styling Voucher", icon: "content_cut", desc: "Redeemable with any verified hair stylist" },
  { name: "Personal Training Voucher", icon: "fitness_center", desc: "For a session with an elite fitness coach" },
  { name: "Photography Voucher", icon: "photo_camera", desc: "Professional portrait or lifestyle session" },
  { name: "Wellness Voucher", icon: "spa", desc: "Massage, yoga, or holistic therapy" },
  { name: "Makeup Voucher", icon: "brush", desc: "Professional makeup for any occasion" },
  { name: "Tutoring Voucher", icon: "school", desc: "Private learning session with an expert tutor" },
];

export default function GiftVouchersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-surface-container-low py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary mb-4 uppercase block">
            Trovu Gifting
          </span>
          <h1 className="font-playfair text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-on-background mb-6">
            Give the gift of an exceptional experience.
          </h1>
          <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant">
            Trovu gift vouchers are the perfect present — letting your loved ones choose from thousands of verified professionals and services.
          </p>
        </div>
      </section>

      {/* Fixed Vouchers */}
      <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <h2 className="font-playfair text-[32px] font-semibold text-on-background mb-4">Fixed Value Vouchers</h2>
        <p className="font-manrope text-[16px] text-on-surface-variant mb-12">
          Choose a voucher amount. The recipient can spend it on any service on the platform.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {fixedVouchers.map((v) => (
            <div
              key={v.amount}
              className={`relative p-8 rounded-2xl border text-center cursor-pointer transition-all group ${v.popular ? "border-primary bg-primary/5" : "border-outline-variant/30 bg-white hover:border-primary"} editorial-shadow`}
            >
              {v.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[12px] font-manrope font-semibold tracking-[0.05em] px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <p className="font-playfair text-[48px] font-bold text-primary mb-2">{v.amount}</p>
              <p className="font-manrope text-[14px] text-on-surface-variant mb-6">{v.desc}</p>
              <button className="w-full bg-primary text-on-primary py-3 rounded-full font-manrope text-[14px] font-semibold hover:bg-on-primary-container transition-all">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Service Vouchers */}
      <section className="py-[120px] bg-surface-container-low">
        <div className="px-[80px] max-w-[1440px] mx-auto">
          <h2 className="font-playfair text-[32px] font-semibold text-on-background mb-4">Service-Specific Vouchers</h2>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-12">
            Gift a specific type of experience to your recipient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceVouchers.map((sv) => (
              <div key={sv.name} className="bg-white p-8 rounded-2xl editorial-shadow border border-outline-variant/10 flex items-start gap-6 group hover:border-primary transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">{sv.icon}</span>
                </div>
                <div>
                  <h3 className="font-playfair text-[20px] font-semibold mb-2">{sv.name}</h3>
                  <p className="font-manrope text-[14px] text-on-surface-variant mb-4">{sv.desc}</p>
                  <button className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary flex items-center gap-1">
                    Buy Voucher <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <h2 className="font-playfair text-[48px] font-bold text-on-background text-center mb-16">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "card_giftcard", step: "1", title: "Choose a voucher", desc: "Pick a fixed value or a service-specific gift voucher." },
            { icon: "send", step: "2", title: "Send it instantly", desc: "Delivered by email with a personalised message, instantly or on a chosen date." },
            { icon: "celebration", step: "3", title: "Recipient redeems", desc: "They browse the platform and book any verified professional they love." },
          ].map((s) => (
            <div key={s.title} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">{s.icon}</span>
              </div>
              <h3 className="font-playfair text-[24px] font-semibold mb-3">{s.title}</h3>
              <p className="font-manrope text-[16px] text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
