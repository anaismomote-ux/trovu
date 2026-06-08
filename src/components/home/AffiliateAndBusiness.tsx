import Link from "next/link";

export default function AffiliateAndBusiness() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="p-12 border border-outline-variant/30 rounded-3xl group hover:border-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-primary text-4xl mb-6 block">group_add</span>
          <h3 className="font-headline-lg text-headline-lg mb-4">Affiliate Programme</h3>
          <p className="font-body-md text-on-surface-variant mb-8">
            Join our referral network and earn high-tier commissions by recommending Trovu&apos;s luxury services to your network.
          </p>
          <Link href="/affiliate" className="font-label-md text-label-md text-primary flex items-center gap-2 group/link">
            Join Affiliate Programme{" "}
            <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="p-12 border border-outline-variant/30 rounded-3xl group hover:border-secondary transition-colors duration-500">
          <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">business_center</span>
          <h3 className="font-headline-lg text-headline-lg mb-4">Business Solutions</h3>
          <p className="font-body-md text-on-surface-variant mb-8">
            Scalable solutions for salons, agencies, and gyms. Streamline your operations with our enterprise-grade platform.
          </p>
          <Link href="/business" className="font-label-md text-label-md text-secondary flex items-center gap-2 group/link">
            Request Demo{" "}
            <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
