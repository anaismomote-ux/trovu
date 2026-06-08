export default function HowItWorks() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-display-md text-display-md text-on-background mb-4">Effortless luxury.</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">A seamless journey from discovery to completion.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-10"></div>
        <div className="text-center group">
          <div className="w-24 h-24 bg-white editorial-shadow rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-primary text-4xl">search</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Search</h3>
          <p className="font-body-md text-on-surface-variant">Find the perfect expert by service, location, or reputation.</p>
        </div>
        <div className="text-center group">
          <div className="w-24 h-24 bg-white editorial-shadow rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-primary text-4xl">compare_arrows</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Compare</h3>
          <p className="font-body-md text-on-surface-variant">Review portfolios, ratings, and verified client testimonials.</p>
        </div>
        <div className="text-center group">
          <div className="w-24 h-24 bg-white editorial-shadow rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-primary text-4xl">calendar_today</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Book</h3>
          <p className="font-body-md text-on-surface-variant">Secure your appointment with our integrated luxury booking system.</p>
        </div>
        <div className="text-center group">
          <div className="w-24 h-24 bg-white editorial-shadow rounded-full flex items-center justify-center mx-auto mb-8 border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Enjoy</h3>
          <p className="font-body-md text-on-surface-variant">Experience world-class service with total peace of mind.</p>
        </div>
      </div>
    </section>
  );
}
