const STEPS = [
  { icon: "✦",  num: "01", title: "Describe it",     desc: "Type or say what you need — our AI understands plain English and detects whether you want someone now or later." },
  { icon: "🔒", num: "02", title: "Pay into escrow",  desc: "Your payment is held securely — not a penny goes to the provider until you confirm the service is done." },
  { icon: "📍", num: "03", title: "They arrive",      desc: "GPS check-in confirms the appointment has started. Both parties check in — no ghosting, no surprises." },
  { icon: "✓",  num: "04", title: "Confirm & release", desc: "Both sides confirm completion. Payment releases within 24 hours. Raise a dispute at any point if needed." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 lg:px-10" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: "var(--green)" }}>
            How it works
          </p>
          <h2 className="font-serif text-[32px] font-semibold" style={{ color: "var(--text)" }}>
            Book in under 60 seconds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "var(--border)" }}
          />

          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative">
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl mb-5 relative z-10"
                style={{ background: "var(--white)", border: "1.5px solid var(--border)", boxShadow: "var(--shadow-md)" }}
              >
                {step.icon}
              </div>
              <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1" style={{ color: "var(--green)" }}>
                {step.num}
              </p>
              <h3 className="font-serif text-[18px] font-semibold mb-2" style={{ color: "var(--text)" }}>
                {step.title}
              </h3>
              <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
