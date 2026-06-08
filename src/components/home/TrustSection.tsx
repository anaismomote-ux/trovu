export default function TrustSection() {
  return (
    <section className="py-section-gap bg-surface-container-high/30">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center">
          <div className="lg:col-span-1">
            <h2 className="font-display-md text-display-md text-on-background mb-6">Designed for trust.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              We curate every aspect of our marketplace to ensure that luxury is never compromised by uncertainty.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all">
              Explore the Difference
            </button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">verified</span>
              <h4 className="font-headline-md text-headline-md mb-3">Verified Professionals</h4>
              <p className="font-body-md text-on-surface-variant">Every provider undergoes a rigorous 5-step verification process.</p>
            </div>
            <div className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">lock</span>
              <h4 className="font-headline-md text-headline-md mb-3">Secure Payments</h4>
              <p className="font-body-md text-on-surface-variant">End-to-end encrypted transactions for your financial security.</p>
            </div>
            <div className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">shield</span>
              <h4 className="font-headline-md text-headline-md mb-3">Escrow Protection</h4>
              <p className="font-body-md text-on-surface-variant">Funds are held securely and only released when the service is complete.</p>
            </div>
            <div className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">reviews</span>
              <h4 className="font-headline-md text-headline-md mb-3">Authentic Reviews</h4>
              <p className="font-body-md text-on-surface-variant">100% verified client reviews ensuring total transparency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
