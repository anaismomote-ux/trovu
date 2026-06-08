export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-surface-container-low py-[120px] px-[80px] max-w-[1440px] mx-auto text-center">
        <span className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary mb-4 uppercase block">Affiliate Programme</span>
        <h1 className="font-playfair text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-on-background mb-6 max-w-3xl mx-auto">
          Earn by sharing the Trovu experience.
        </h1>
        <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto mb-10">
          Join our referral network and earn competitive commissions for every successful booking made through your unique link.
        </p>
        <a href="#apply" className="bg-primary text-on-primary px-10 py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all inline-block">
          Apply Now
        </a>
      </section>

      {/* Commission tiers */}
      <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <h2 className="font-playfair text-[48px] font-bold text-center mb-16">Commission Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tier: "Starter", commission: "8%", referrals: "1–10 referrals/month", perks: ["Referral link & code", "Dashboard access", "Monthly payouts"] },
            { tier: "Growth", commission: "12%", referrals: "11–50 referrals/month", perks: ["Everything in Starter", "Priority support", "Bi-weekly payouts", "Exclusive promotions"], highlighted: true },
            { tier: "Elite", commission: "18%", referrals: "50+ referrals/month", perks: ["Everything in Growth", "Dedicated account manager", "Weekly payouts", "Co-marketing opportunities"] },
          ].map((t) => (
            <div key={t.tier} className={`p-10 rounded-2xl border ${t.highlighted ? "border-primary bg-primary/5" : "border-outline-variant/30 bg-white"} editorial-shadow`}>
              {t.highlighted && (
                <div className="bg-primary text-on-primary text-[12px] font-manrope font-semibold tracking-[0.05em] px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
              )}
              <h3 className="font-playfair text-[32px] font-semibold mb-2">{t.tier}</h3>
              <p className="font-playfair text-[64px] font-bold text-primary leading-none mb-2">{t.commission}</p>
              <p className="font-manrope text-[14px] text-on-surface-variant mb-8">{t.referrals}</p>
              <ul className="space-y-3 mb-8">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-manrope text-[14px] text-on-surface-variant">{p}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] transition-all ${t.highlighted ? "bg-primary text-on-primary hover:bg-on-primary-container" : "border border-outline-variant text-on-surface hover:bg-surface-container-low"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="py-[120px] bg-surface-container-low">
        <div className="px-[80px] max-w-[1440px] mx-auto max-w-2xl mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-2xl editorial-shadow">
            <h2 className="font-playfair text-[32px] font-semibold mb-8">Apply to become an affiliate</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
                </div>
                <div>
                  <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
                </div>
              </div>
              <div>
                <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Email</label>
                <input type="email" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
              </div>
              <div>
                <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Website / Social Media</label>
                <input type="url" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" placeholder="https://" />
              </div>
              <div>
                <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">How will you promote Trovu?</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px] resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
