import Link from "next/link";

export default function GiftVouchersBanner() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="bg-surface-container rounded-3xl overflow-hidden flex flex-col md:flex-row editorial-shadow">
        <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <span className="font-label-md text-label-md text-primary mb-4 uppercase tracking-widest">Trovu Gifting</span>
          <h2 className="font-display-md text-display-md text-on-background mb-6">Give the perfect experience.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Trovu luxury vouchers allow your loved ones to choose their own world-class service from our curated marketplace.
          </p>
          <Link
            href="/gift-vouchers"
            className="bg-on-background text-white px-10 py-4 rounded-full font-label-md text-label-md hover:bg-on-background/90 transition-all self-start"
          >
            Buy Gift Voucher
          </Link>
        </div>
        <div className="md:w-1/2 min-h-[400px]">
          <img
            className="w-full h-full object-cover"
            alt="A beautifully packaged luxury gift card resting on a minimalist marble surface."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLMfSAnlEguB0lNoiKUqel7lNOch6w581BXqPkExknx_GlBLUdwSxpzd3KScyXX0ghZg7EaBXn7ByIeU5IIOUTRl6iybSIy9GYZWrrlNZ2emISl5wCAOHIBjmUl4iL9H6j5hLyY4LAf-_uIPqr9s_arupmUFSCyVFAqKVn-0nTuKEDJDF-0ZqeIsPFy3BcCPNF_py25Z1VCafOWb9HMXb1vppBWQ1W6rUmHRcNWiX7uI4oedHKoEdWwQZ1BmhxJyAfPn5e7H9svHKQ"
          />
        </div>
      </div>
    </section>
  );
}
