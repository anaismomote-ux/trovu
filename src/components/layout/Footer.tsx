import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const LINKS = {
  Discover:  [["All Services", "/search"], ["Categories", "/search"], ["Gift Vouchers", "/gift-vouchers"], ["Browse Map", "/map"]],
  Providers: [["Become a Provider", "/become-a-provider"], ["Provider Dashboard", "/dashboard/provider"], ["Business Solutions", "/business"], ["Verification", "/become-a-provider#verify"]],
  Company:   [["About Trovu", "/about"], ["How It Works", "/#how-it-works"], ["Trust & Safety", "/#trust"], ["Contact Us", "/contact"]],
  Legal:     [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"], ["Dispute Policy", "/disputes"]],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1.5px solid var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand col */}
          <div className="col-span-2">
            <Logo size="sm" />
            <p className="text-[13px] leading-relaxed mt-4 mb-6" style={{ color: "var(--muted)", maxWidth: "240px" }}>
              The trust-first marketplace for personal services. AI-matched. Escrow-protected. DBS-verified.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["𝕏", "📸", "in"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-bold transition-colors hover:border-green"
                  style={{ border: "1.5px solid var(--border)", color: "var(--muted)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: "var(--text)" }}>
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[12px] transition-colors hover:text-green"
                      style={{ color: "var(--muted)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-[11px]" style={{ color: "var(--muted)" }}>
            © 2026 Trovu Ltd. Registered in England &amp; Wales.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            <span className="text-[11px]" style={{ color: "var(--muted)" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
