export default function BecomeAProviderPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-surface-container-low py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary mb-4 uppercase block">For Providers</span>
            <h1 className="font-playfair text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-on-background mb-6">
              Join the Trovu provider network.
            </h1>
            <p className="font-manrope text-[18px] leading-[1.6] text-on-surface-variant mb-10">
              Connect with thousands of clients looking for exceptional professionals. Build your business on a premium, trusted platform.
            </p>
            <a href="#apply" className="bg-primary text-on-primary px-10 py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all inline-block">
              Apply Now
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80"
            alt="Professional provider"
            className="rounded-2xl editorial-shadow w-full aspect-[4/5] object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-outline-variant/30">
        <div className="px-[80px] max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "10,000+", label: "Active Providers" },
            { value: "£2.4M+", label: "Paid to Providers" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "48hr", label: "Average Approval" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-playfair text-[48px] font-bold text-primary mb-2">{stat.value}</p>
              <p className="font-manrope text-[16px] text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <h2 className="font-playfair text-[48px] font-bold text-on-background text-center mb-16">Why join Trovu?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "payments", title: "Guaranteed Payments", desc: "Escrow-protected payments. You always get paid — on time, every time." },
            { icon: "manage_accounts", title: "Your Own CRM", desc: "Full client management, booking calendar, and analytics built in." },
            { icon: "groups", title: "Verified Clients", desc: "Every client on Trovu is verified, creating a trusted booking environment." },
            { icon: "trending_up", title: "Dynamic Pricing", desc: "Set peak, off-peak, and holiday pricing to maximise your revenue." },
            { icon: "star_rate", title: "Build Your Reputation", desc: "Collect verified reviews that build your profile and attract more clients." },
            { icon: "support_agent", title: "Dedicated Support", desc: "Our provider success team is always on hand to help you grow." },
          ].map((b) => (
            <div key={b.title} className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{b.icon}</span>
              <h3 className="font-playfair text-[24px] font-semibold mb-3">{b.title}</h3>
              <p className="font-manrope text-[16px] text-on-surface-variant">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-[120px] bg-surface-container-low">
        <div className="px-[80px] max-w-[1440px] mx-auto">
          <h2 className="font-playfair text-[48px] font-bold text-on-background text-center mb-16">How the application works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {[
              { icon: "edit_note", label: "Apply", desc: "Complete your provider application" },
              { icon: "rate_review", label: "Review", desc: "Our team reviews your application" },
              { icon: "verified", label: "Approve", desc: "Receive approval and dashboard access" },
              { icon: "person", label: "Set Up Profile", desc: "Add services, pricing, and portfolio" },
              { icon: "storefront", label: "Go Live", desc: "Start receiving bookings" },
            ].map((step, i) => (
              <div key={step.label} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <p className="font-playfair text-[18px] font-semibold mb-1">{step.label}</p>
                <p className="font-manrope text-[14px] text-on-surface-variant">{step.desc}</p>
                {i < 4 && <div className="hidden md:block absolute" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-[48px] font-bold text-on-background mb-4">Apply to become a provider</h2>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-12">
            Fill in your details below and our team will review your application within 48 hours.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Email Address</label>
              <input type="email" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Service Category</label>
              <select className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px] bg-white">
                <option>Select a category</option>
                <option>Beauty</option>
                <option>Wellness</option>
                <option>Fitness</option>
                <option>Creative</option>
                <option>Education</option>
                <option>Home Services</option>
              </select>
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Years of Experience</label>
              <input type="number" min="0" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Tell us about yourself</label>
              <textarea rows={5} className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px] resize-none" placeholder="Describe your skills, experience, and what makes you exceptional..." />
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary py-5 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
