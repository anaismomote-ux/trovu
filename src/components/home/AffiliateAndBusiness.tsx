import Link from "next/link";

export default function AffiliateAndBusiness() {
  return (
    <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-12 border border-outline-variant/30 rounded-3xl group hover:border-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-primary text-4xl mb-6 block">group_add</span>
          <h3 className="font-playfair text-[32px] leading-[1.3] font-semibold mb-4">Affiliate Programme</h3>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-8">
            Join our referral network and earn commissions by recommending Trovu's services to your network.
          </p>
          <Link
            href="/affiliate"
            className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary flex items-center gap-2 group/link"
          >
            Join Affiliate Programme{" "}
            <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="p-12 border border-outline-variant/30 rounded-3xl group hover:border-secondary transition-colors duration-500">
          <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">business_center</span>
          <h3 className="font-playfair text-[32px] leading-[1.3] font-semibold mb-4">Business Solutions</h3>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-8">
            Scalable solutions for salons, agencies, and studios. Streamline your operations with our enterprise-grade platform.
          </p>
          <Link
            href="/business"
            className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-secondary flex items-center gap-2 group/link"
          >
            Request Demo{" "}
            <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
