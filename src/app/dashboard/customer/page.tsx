import Link from "next/link";

const upcomingBookings = [
  { provider: "Elena Vance", service: "Full Balayage", date: "Mon 15 Jun, 2pm", price: "£280", status: "Confirmed", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" },
  { provider: "Marcus Thorne", service: "PT Session", date: "Wed 17 Jun, 10am", price: "£85", status: "Pending", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80" },
];

export default function CustomerDashboardPage() {
  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="px-[80px] max-w-[1440px] mx-auto py-16">
        <div className="mb-12">
          <h1 className="font-playfair text-[48px] font-bold text-on-background mb-2">Welcome back, Sarah</h1>
          <p className="font-manrope text-[16px] text-on-surface-variant">Here&apos;s what&apos;s coming up.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Bookings", value: "24", icon: "calendar_today" },
            { label: "Saved Providers", value: "8", icon: "favorite" },
            { label: "Voucher Balance", value: "£150", icon: "card_giftcard" },
            { label: "Reviews Left", value: "3", icon: "star_rate" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary mb-3 block">{stat.icon}</span>
              <p className="font-playfair text-[32px] font-bold text-on-surface mb-1">{stat.value}</p>
              <p className="font-manrope text-[14px] text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-[32px] font-semibold">Upcoming Bookings</h2>
              <Link href="/bookings" className="font-manrope text-[14px] font-semibold text-primary hover:underline">View all</Link>
            </div>
            <div className="space-y-4">
              {upcomingBookings.map((b) => (
                <div key={b.provider} className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10 flex items-center gap-6">
                  <img src={b.avatar} alt={b.provider} className="w-14 h-14 rounded-full object-cover" />
                  <div className="flex-1">
                    <h3 className="font-playfair text-[20px] font-semibold">{b.provider}</h3>
                    <p className="font-manrope text-[14px] text-on-surface-variant">{b.service}</p>
                    <p className="font-manrope text-[12px] text-on-surface-variant">{b.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-playfair text-[24px] font-semibold text-primary">{b.price}</p>
                    <span className={`font-manrope text-[12px] font-semibold px-3 py-1 rounded-full ${b.status === "Confirmed" ? "bg-tertiary/10 text-tertiary" : "bg-primary/10 text-primary"}`}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <h3 className="font-playfair text-[20px] font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/search" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary">search</span>
                  <span className="font-manrope text-[14px] text-on-surface">Find a Provider</span>
                </Link>
                <Link href="/gift-vouchers" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary">card_giftcard</span>
                  <span className="font-manrope text-[14px] text-on-surface">Buy Gift Voucher</span>
                </Link>
                <Link href="/messages" className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary">chat</span>
                  <span className="font-manrope text-[14px] text-on-surface">Messages</span>
                </Link>
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="font-playfair text-[20px] font-semibold mb-2">Voucher Balance</h3>
              <p className="font-playfair text-[48px] font-bold text-primary mb-4">£150</p>
              <Link href="/search" className="w-full bg-primary text-on-primary py-3 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all text-center block">
                Use Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
