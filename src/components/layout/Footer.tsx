import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-high w-full pt-[120px] pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-[80px] max-w-[1440px] mx-auto mb-20">
        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="font-playfair text-3xl font-bold text-primary block mb-6">
            TROVU
          </Link>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-8 leading-relaxed">
            The premier destination for discovering and booking world-class professionals.
          </p>
          <div className="flex gap-3">
            {[
              { icon: "photo_camera", label: "Instagram", href: "#" },
              { icon: "public", label: "Facebook", href: "#" },
              { icon: "smart_display", label: "TikTok", href: "#" },
              { icon: "work", label: "LinkedIn", href: "#" },
              { icon: "play_circle", label: "YouTube", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Discover */}
        <div>
          <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-6">
            Discover
          </h4>
          <ul className="space-y-4">
            {[
              { label: "Find Professionals", href: "/search" },
              { label: "Categories", href: "/services" },
              { label: "Locations", href: "/locations" },
              { label: "Gift Vouchers", href: "/gift-vouchers" },
              { label: "Popular Services", href: "/services" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="font-manrope text-[16px] text-on-surface-variant hover:text-primary hover:underline transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Providers */}
        <div>
          <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-6">
            Providers
          </h4>
          <ul className="space-y-4">
            {[
              { label: "Become a Provider", href: "/become-a-provider" },
              { label: "Provider Benefits", href: "/become-a-provider#benefits" },
              { label: "Business Solutions", href: "/business" },
              { label: "Affiliate Programme", href: "/affiliate" },
              { label: "Provider Resources", href: "/provider/resources" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="font-manrope text-[16px] text-on-surface-variant hover:text-primary hover:underline transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-6">
            Company
          </h4>
          <ul className="space-y-4">
            {[
              { label: "About Us", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
              { label: "Help Centre", href: "/help" },
              { label: "Trust & Safety", href: "/trust" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="font-manrope text-[16px] text-on-surface-variant hover:text-primary hover:underline transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Newsletter */}
        <div>
          <h4 className="font-manrope text-[14px] font-semibold tracking-[0.05em] uppercase text-on-surface mb-6">
            Newsletter
          </h4>
          <p className="font-manrope text-[16px] text-on-surface-variant mb-6 leading-relaxed">
            Curated updates and exclusive invitations to your inbox.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-5 py-3 rounded-full border border-outline-variant focus:border-primary focus:ring-0 font-manrope text-[16px] outline-none"
            />
            <button className="bg-on-background text-white px-6 py-3 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-background/90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-outline-variant/30 px-[80px] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-manrope text-[16px] text-on-surface-variant">
          © 2026 Trovu. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Accessibility", href: "/accessibility" },
          ].map((link) => (
            <Link key={link.label} href={link.href} className="font-manrope text-[12px] font-semibold text-on-surface-variant hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <button className="flex items-center gap-1 font-manrope text-[12px] font-semibold text-on-surface-variant hover:text-primary transition-colors border border-outline-variant rounded-full px-3 py-1">
            <span className="material-symbols-outlined text-sm">language</span>
            United Kingdom
          </button>
        </div>
      </div>
    </footer>
  );
}
