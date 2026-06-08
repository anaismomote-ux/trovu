export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-surface-container-low py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-secondary mb-4 uppercase block">Business Solutions</span>
            <h1 className="font-playfair text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-on-background mb-6">
              Enterprise solutions for service businesses.
            </h1>
            <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant mb-10">
              Manage multiple locations, staff, and calendars from a single intelligent platform designed for modern service businesses.
            </p>
            <div className="flex gap-4">
              <a href="#demo" className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-secondary-container transition-all inline-block">
                Request Demo
              </a>
              <a href="#pricing" className="border border-outline-variant text-on-surface px-10 py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-surface-container-low transition-all inline-block">
                View Pricing
              </a>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: "corporate_fare", title: "Multi-Location Management", desc: "Manage multiple venues, studios, or salons from one dashboard." },
              { icon: "group", title: "Team Calendar", desc: "Coordinate bookings and schedules across all your staff members." },
              { icon: "analytics", title: "Business Analytics", desc: "Revenue reports, booking trends, and client insights in real-time." },
              { icon: "payments", title: "Centralised Billing", desc: "Consolidated invoicing, payouts, and financial reporting." },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4 bg-white p-6 rounded-xl editorial-shadow border border-outline-variant/10">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-playfair text-[20px] font-semibold mb-1">{f.title}</h3>
                  <p className="font-manrope text-[14px] text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo" className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-[48px] font-bold mb-4">Request a demo</h2>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-12">Tell us about your business and we&apos;ll get in touch within 24 hours.</p>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="font-manrope text-[14px] font-semibold block mb-2">First Name</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary outline-none font-manrope text-[16px]" />
              </div>
              <div>
                <label className="font-manrope text-[14px] font-semibold block mb-2">Last Name</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary outline-none font-manrope text-[16px]" />
              </div>
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold block mb-2">Business Email</label>
              <input type="email" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary outline-none font-manrope text-[16px]" />
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold block mb-2">Business Name</label>
              <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary outline-none font-manrope text-[16px]" />
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold block mb-2">Number of Locations</label>
              <select className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-secondary outline-none font-manrope text-[16px] bg-white">
                <option>1–2 locations</option>
                <option>3–10 locations</option>
                <option>10+ locations</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-secondary text-on-secondary py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-secondary-container transition-all">
              Request Demo
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
