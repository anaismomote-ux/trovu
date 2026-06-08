import Link from "next/link";

export default function GiftVouchersBanner() {
  return (
    <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
      <div className="bg-surface-container rounded-3xl overflow-hidden flex flex-col md:flex-row editorial-shadow">
        <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <span className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary mb-4 uppercase">
            Trovu Gifting
          </span>
          <h2 className="font-playfair text-[48px] leading-[1.2] tracking-[-0.01em] font-bold text-on-background mb-6">
            Give the perfect experience.
          </h2>
          <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant mb-10">
            Trovu gift vouchers allow your loved ones to choose their own world-class service from our curated marketplace.
          </p>
          <Link
            href="/gift-vouchers"
            className="bg-on-background text-white px-10 py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-background/90 transition-all self-start"
          >
            Buy Gift Voucher
          </Link>
        </div>
        <div className="md:w-1/2 min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=700&q=80"
            alt="Luxury gift voucher"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
