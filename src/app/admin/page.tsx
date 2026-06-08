import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-surface-container-low">
      <div className="px-[80px] max-w-[1440px] mx-auto py-16">
        <div className="mb-12">
          <h1 className="font-playfair text-[48px] font-bold text-on-background mb-2">Admin Dashboard</h1>
          <p className="font-manrope text-[16px] text-on-surface-variant">Platform overview and management</p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Revenue (MTD)", value: "£84,320", icon: "payments", delta: "+22%" },
            { label: "Active Bookings", value: "1,204", icon: "calendar_today", delta: "+18" },
            { label: "Pending Applications", value: "37", icon: "pending_actions", delta: "" },
            { label: "Active Providers", value: "10,482", icon: "store", delta: "+94" },
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
          {/* Provider Applications */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-[32px] font-semibold">Pending Provider Applications</h2>
              <Link href="/admin/applications" className="font-manrope text-[14px] font-semibold text-primary hover:underline">View all</Link>
            </div>
            <div className="space-y-4">
              {[
                { name: "Jasmine Okafor", category: "Braiding", submitted: "Today", experience: "8 years" },
                { name: "Rami Al-Hassan", category: "Personal Training", submitted: "Yesterday", experience: "5 years" },
                { name: "Lucia Fernandez", category: "Massage Therapy", submitted: "2 days ago", experience: "10 years" },
              ].map((app) => (
                <div key={app.name} className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-playfair text-[20px] font-bold text-primary">{app.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-playfair text-[20px] font-semibold">{app.name}</p>
                        <p className="font-manrope text-[14px] text-on-surface-variant">{app.category} · {app.experience}</p>
                        <p className="font-manrope text-[12px] text-on-surface-variant">Submitted {app.submitted}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-primary text-on-primary px-5 py-2 rounded-full font-manrope text-[14px] font-semibold hover:bg-on-primary-container transition-all">Approve</button>
                      <button className="border border-outline-variant text-on-surface px-5 py-2 rounded-full font-manrope text-[14px] font-semibold hover:bg-surface-container-low transition-all">Review</button>
                      <button className="border border-error/40 text-error px-5 py-2 rounded-full font-manrope text-[14px] font-semibold hover:bg-error-container transition-all">Reject</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Nav */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10">
              <h3 className="font-playfair text-[20px] font-semibold mb-4">Admin Navigation</h3>
              <div className="space-y-2">
                {[
                  { icon: "people", label: "Users", href: "/admin/users" },
                  { icon: "store", label: "Providers", href: "/admin/providers" },
                  { icon: "pending_actions", label: "Applications", href: "/admin/applications" },
                  { icon: "calendar_today", label: "Bookings", href: "/admin/bookings" },
                  { icon: "payments", label: "Payments", href: "/admin/payments" },
                  { icon: "card_giftcard", label: "Vouchers", href: "/admin/vouchers" },
                  { icon: "group_add", label: "Affiliates", href: "/admin/affiliates" },
                  { icon: "reviews", label: "Reviews", href: "/admin/reviews" },
                  { icon: "settings", label: "Settings", href: "/admin/settings" },
                ].map((nav) => (
                  <Link key={nav.label} href={nav.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-primary">{nav.icon}</span>
                    <span className="font-manrope text-[14px] text-on-surface">{nav.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
