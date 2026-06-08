import Link from "next/link";

const todayBookings = [
  { client: "Sarah M.", service: "Full Balayage", time: "10:00 AM", price: "£280", status: "Confirmed" },
  { client: "Priya K.", service: "Colour Refresh", time: "1:30 PM", price: "£120", status: "Confirmed" },
  { client: "Charlotte B.", service: "Glossing Treatment", time: "4:00 PM", price: "£80", status: "Pending" },
];

export default function ProviderDashboardPage() {
  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="px-[80px] max-w-[1440px] mx-auto py-16">
        <div className="mb-12">
          <h1 className="font-playfair text-[48px] font-bold text-on-background mb-2">Provider Dashboard</h1>
          <p className="font-manrope text-[16px] text-on-surface-variant">Elena Vance — Master Hair Colorist</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "This Month Revenue", value: "£3,240", icon: "payments", delta: "+18%" },
            { label: "Bookings This Month", value: "28", icon: "calendar_today", delta: "+4" },
            { label: "New Requests", value: "5", icon: "notification_important", delta: "" },
            { label: "Profile Views", value: "412", icon: "visibility", delta: "+62" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <div className="flex justify-between items-start mb-3">
                <span className="material-symbols-outlined text-primary">{stat.icon}</span>
                {stat.delta && <span className="font-manrope text-[12px] font-semibold text-tertiary">{stat.delta}</span>}
              </div>
              <p className="font-playfair text-[32px] font-bold text-on-surface mb-1">{stat.value}</p>
              <p className="font-manrope text-[14px] text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's bookings */}
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-[32px] font-semibold mb-6">Today&apos;s Schedule</h2>
            <div className="space-y-4">
              {todayBookings.map((b) => (
                <div key={`${b.client}-${b.time}`} className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-playfair text-[20px] font-bold text-primary">{b.client[0]}</span>
                      </div>
                      <div>
                        <p className="font-playfair text-[20px] font-semibold">{b.client}</p>
                        <p className="font-manrope text-[14px] text-on-surface-variant">{b.service} · {b.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-playfair text-[24px] font-semibold text-primary">{b.price}</p>
                      <span className={`font-manrope text-[12px] font-semibold px-3 py-1 rounded-full ${b.status === "Confirmed" ? "bg-tertiary/10 text-tertiary" : "bg-outline-variant/40 text-on-surface-variant"}`}>
                        {b.status}
                      </span>
                    </div>
                  </div>
                  {b.status === "Pending" && (
                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 bg-primary text-on-primary py-2 rounded-full font-manrope text-[14px] font-semibold hover:bg-on-primary-container transition-all">Accept</button>
                      <button className="flex-1 border border-outline-variant text-on-surface py-2 rounded-full font-manrope text-[14px] font-semibold hover:bg-surface-container-low transition-all">Decline</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <h3 className="font-playfair text-[20px] font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { icon: "edit", label: "Edit Profile", href: "/dashboard/provider/profile" },
                  { icon: "manage_accounts", label: "Manage Services", href: "/dashboard/provider/services" },
                  { icon: "calendar_month", label: "Update Availability", href: "/dashboard/provider/availability" },
                  { icon: "photo_library", label: "Upload Portfolio", href: "/dashboard/provider/portfolio" },
                  { icon: "bar_chart", label: "View Analytics", href: "/dashboard/provider/analytics" },
                ].map((a) => (
                  <Link key={a.label} href={a.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-primary">{a.icon}</span>
                    <span className="font-manrope text-[14px] text-on-surface">{a.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <h3 className="font-playfair text-[20px] font-semibold mb-4">Payout Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-manrope text-[14px] text-on-surface-variant">Pending</span>
                  <span className="font-manrope text-[14px] font-semibold text-on-surface">£480</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-manrope text-[14px] text-on-surface-variant">In Escrow</span>
                  <span className="font-manrope text-[14px] font-semibold text-on-surface">£280</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-outline-variant/30">
                  <span className="font-manrope text-[14px] font-semibold text-on-surface">Total Available</span>
                  <span className="font-playfair text-[24px] font-bold text-primary">£760</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-on-primary py-3 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
                Request Payout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
