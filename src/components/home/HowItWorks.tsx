const steps = [
  {
    icon: "search",
    title: "Search",
    description: "Find the perfect expert by service, location, or reputation.",
  },
  {
    icon: "compare_arrows",
    title: "Compare",
    description: "Review portfolios, ratings, and verified client testimonials.",
  },
  {
    icon: "calendar_today",
    title: "Book",
    description: "Secure your appointment with our integrated booking system.",
  },
  {
    icon: "verified_user",
    title: "Enjoy",
    description: "Experience world-class service with total peace of mind.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-playfair text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-on-background mb-4">
          Effortless luxury.
        </h2>
        <p className="font-manrope text-[16px] text-on-surface-variant">
          A seamless journey from discovery to completion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-10" />
        {steps.map((step) => (
          <div key={step.title} className="text-center group">
            <div className="w-24 h-24 bg-white editorial-shadow rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>
            </div>
            <h3 className="font-playfair text-[24px] font-semibold mb-4">{step.title}</h3>
            <p className="font-manrope text-[16px] text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
