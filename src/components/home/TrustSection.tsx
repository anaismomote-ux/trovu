const trustFeatures = [
  {
    icon: "verified",
    title: "Verified Professionals",
    description: "Every provider undergoes a rigorous 5-step verification process.",
  },
  {
    icon: "lock",
    title: "Secure Payments",
    description: "End-to-end encrypted transactions for your financial security.",
  },
  {
    icon: "shield",
    title: "Escrow Protection",
    description: "Funds are held securely and only released when the service is complete.",
  },
  {
    icon: "reviews",
    title: "Authentic Reviews",
    description: "100% verified client reviews ensuring total transparency.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-[120px] bg-surface-container-high/30">
      <div className="px-[80px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <h2 className="font-playfair text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-on-background mb-6">
              Designed for trust.
            </h2>
            <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant mb-8">
              We curate every aspect of our marketplace to ensure that quality is never compromised by uncertainty.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
              Explore the Difference
            </button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{feature.icon}</span>
                <h4 className="font-playfair text-[24px] font-semibold mb-3">{feature.title}</h4>
                <p className="font-manrope text-[16px] text-on-surface-variant">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
