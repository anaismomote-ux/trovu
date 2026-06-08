import Link from "next/link";

const benefits = [
  {
    num: "1",
    title: "Exclusive Audience",
    description: "Connect with clients who value quality and trust.",
  },
  {
    num: "2",
    title: "Seamless Management",
    description: "Integrated booking, payments, and client management tools.",
  },
  {
    num: "3",
    title: "Global Reputation",
    description: "Benefit from Trovu's premium branding and trusted ecosystem.",
  },
];

export default function ForProviders() {
  return (
    <section className="py-[120px] bg-surface-container-low overflow-hidden">
      <div className="px-[80px] max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80"
              alt="Professional provider"
              className="rounded-2xl relative z-10 editorial-shadow w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-playfair text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-on-background mb-8">
              Elevate your business to elite status.
            </h2>
            <div className="space-y-8 mb-10">
              {benefits.map((b) => (
                <div key={b.num} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-manrope font-semibold shrink-0">
                    {b.num}
                  </span>
                  <div>
                    <h4 className="font-playfair text-[24px] font-semibold mb-2">{b.title}</h4>
                    <p className="font-manrope text-[16px] text-on-surface-variant">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/become-a-provider"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all inline-block"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
