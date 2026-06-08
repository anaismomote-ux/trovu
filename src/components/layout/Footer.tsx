import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-high w-full pt-section-gap pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter px-margin-desktop max-w-container-max mx-auto mb-20">

        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="font-headline-lg text-headline-lg text-primary block mb-6">TROVU</Link>
          <p className="font-body-md text-on-surface-variant mb-8">
            The premier destination for discovering and booking world-class professionals.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Web" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">camera</span>
            </a>
          </div>
        </div>

        {/* Col 2: Discover */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Discover</h4>
          <ul className="space-y-4">
            <li><Link href="/search" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">All Categories</Link></li>
            <li><Link href="/gift-vouchers" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Vouchers</Link></li>
            <li><Link href="/affiliate" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Affiliate Programme</Link></li>
            <li><Link href="/gift-vouchers" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Gift Guide</Link></li>
          </ul>
        </div>

        {/* Col 3: Providers */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Providers</h4>
          <ul className="space-y-4">
            <li><Link href="/become-a-provider" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Join as Provider</Link></li>
            <li><Link href="/dashboard/provider" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Provider Portal</Link></li>
            <li><Link href="/business" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Business Solutions</Link></li>
            <li><Link href="/become-a-provider" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Community</Link></li>
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">About Us</Link></li>
            <li><Link href="/press" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Press</Link></li>
            <li><Link href="/sustainability" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Sustainability</Link></li>
            <li><Link href="/contact" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Col 5: Region */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Region</h4>
          <div className="relative">
            <button className="w-full flex items-center justify-between px-4 py-2 border border-outline-variant rounded-lg font-body-md text-on-surface-variant">
              United Kingdom
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-outline-variant/30 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body-md text-body-md text-on-surface-variant">© 2024 Trovu Luxury Services. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
