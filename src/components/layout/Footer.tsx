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
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">music_video</span>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">work</span>
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
            </a>
          </div>
        </div>

        {/* Col 2: Discover */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Discover</h4>
          <ul className="space-y-4">
            <li><Link href="/search" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Find Professionals</Link></li>
            <li><Link href="/services" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Categories</Link></li>
            <li><Link href="/locations" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Locations</Link></li>
            <li><Link href="/gift-vouchers" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Gift Vouchers</Link></li>
            <li><Link href="/search" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Popular Services</Link></li>
          </ul>
        </div>

        {/* Col 3: Providers */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Providers</h4>
          <ul className="space-y-4">
            <li><Link href="/become-a-provider" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Become a Provider</Link></li>
            <li><Link href="/become-a-provider#benefits" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Provider Benefits</Link></li>
            <li><Link href="/business" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Business Solutions</Link></li>
            <li><Link href="/affiliate" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Affiliate Programme</Link></li>
            <li><Link href="/become-a-provider" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Provider Resources</Link></li>
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">About Us</Link></li>
            <li><Link href="/blog" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Blog</Link></li>
            <li><Link href="/careers" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Careers</Link></li>
            <li><Link href="/contact" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Contact</Link></li>
            <li><Link href="/help" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Help Centre</Link></li>
            <li><Link href="/trust" className="font-body-md text-on-surface-variant hover:text-primary hover:underline transition-all">Trust & Safety</Link></li>
          </ul>
        </div>

        {/* Col 5: Newsletter */}
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="font-body-md text-on-surface-variant mb-6">
            Receive curated updates, exclusive invitations, and luxury lifestyle inspiration directly in your inbox.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full border border-outline-variant focus:border-primary focus:ring-0 font-body-md outline-none"
            />
            <button className="bg-on-background text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-on-background/90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-outline-variant/30 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body-md text-body-md text-on-surface-variant">© 2026 Trovu. All rights reserved.</p>
        <div className="flex flex-wrap gap-6 items-center">
          <Link href="/privacy" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Terms & Conditions</Link>
          <Link href="/cookies" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Cookie Policy</Link>
          <Link href="/accessibility" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Accessibility</Link>
          <button className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors border border-outline-variant rounded-full px-3 py-1">
            <span className="material-symbols-outlined text-sm">language</span>
            United Kingdom
          </button>
        </div>
      </div>
    </footer>
  );
}
