export default function AffiliateDashboardPage() {
  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="px-[80px] max-w-[1440px] mx-auto py-16">
        <div className="mb-12">
          <h1 className="font-playfair text-[48px] font-bold text-on-background mb-2">Affiliate Dashboard</h1>
          <p className="font-manrope text-[16px] text-on-surface-variant">Track your referrals and commissions.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Earned", value: "£1,248", icon: "payments" },
            { label: "This Month", value: "£340", icon: "trending_up" },
            { label: "Total Referrals", value: "47", icon: "group_add" },
            { label: "Conversion Rate", value: "18%", icon: "percent" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary mb-3 block">{stat.icon}</span>
              <p className="font-playfair text-[32px] font-bold text-on-surface mb-1">{stat.value}</p>
              <p className="font-manrope text-[14px] text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Referral Link */}
        <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10 mb-12">
          <h2 className="font-playfair text-[24px] font-semibold mb-4">Your Referral Link</h2>
          <div className="flex gap-4">
            <div className="flex-1 flex items-center px-5 py-3 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <span className="font-manrope text-[14px] text-on-surface-variant">https://trovu.com/ref/</span>
              <span className="font-manrope text-[14px] font-semibold text-on-surface">your-unique-code</span>
            </div>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">content_copy</span>
              Copy
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="font-manrope text-[14px] text-on-surface-variant">Your code:</span>
            <span className="font-manrope text-[14px] font-bold text-primary px-4 py-1 bg-primary/10 rounded-full">TROVOU47</span>
          </div>
        </div>

        {/* Recent Referrals */}
        <div>
          <h2 className="font-playfair text-[32px] font-semibold mb-6">Recent Referrals</h2>
          <div className="bg-white rounded-xl editorial-shadow border border-outline-variant/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-surface-container-low border-b border-outline-variant/30">
                <tr>
                  {["Date", "Customer", "Service", "Value", "Commission", "Status"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left font-manrope text-[12px] font-semibold tracking-[0.05em] text-on-surface-variant uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {[
                  { date: "05 Jun", customer: "Alice B.", service: "Hair Styling", value: "£120", commission: "£14.40", status: "Paid" },
                  { date: "03 Jun", customer: "Tom H.", service: "PT Session", value: "£85", commission: "£10.20", status: "Paid" },
                  { date: "01 Jun", customer: "Rachel S.", service: "Photography", value: "£250", commission: "£30.00", status: "Pending" },
                ].map((r) => (
                  <tr key={r.customer}>
                    <td className="px-6 py-4 font-manrope text-[14px] text-on-surface-variant">{r.date}</td>
                    <td className="px-6 py-4 font-manrope text-[14px] text-on-surface">{r.customer}</td>
                    <td className="px-6 py-4 font-manrope text-[14px] text-on-surface-variant">{r.service}</td>
                    <td className="px-6 py-4 font-manrope text-[14px] text-on-surface">{r.value}</td>
                    <td className="px-6 py-4 font-playfair text-[16px] font-semibold text-primary">{r.commission}</td>
                    <td className="px-6 py-4">
                      <span className={`font-manrope text-[12px] font-semibold px-3 py-1 rounded-full ${r.status === "Paid" ? "bg-tertiary/10 text-tertiary" : "bg-outline-variant/40 text-on-surface-variant"}`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
