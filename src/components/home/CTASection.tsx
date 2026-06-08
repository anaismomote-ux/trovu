import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mb-20 px-[80px] max-w-[1440px] mx-auto">
      <div className="bg-primary-container/20 rounded-3xl p-16 lg:p-24 text-center border border-primary-container/30">
        <h2 className="font-playfair text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-on-background mb-8">
          Ready to find the perfect professional?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/search"
            className="bg-primary text-on-primary px-10 py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all"
          >
            Find a Provider
          </Link>
          <Link
            href="/become-a-provider"
            className="bg-white border border-outline-variant text-on-background px-10 py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-surface-container-low transition-all"
          >
            Become a Provider
          </Link>
        </div>
      </div>
    </section>
  );
}
