"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Discover",          href: "/search" },
  { label: "Categories",        href: "/categories" },
  { label: "Gift Vouchers",     href: "/gift-vouchers" },
  { label: "Become a Provider", href: "/become-a-provider" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 w-full z-50 h-[72px]"
      style={{
        background: "rgba(237,234,224,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1.5px solid var(--border)",
      }}
    >
      <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Left — logo + nav */}
        <div className="flex items-center gap-10">
          <Logo size="sm" />
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[11px] font-semibold tracking-[0.07em] uppercase transition-colors duration-200"
                style={{ color: pathname === l.href ? "var(--green)" : "var(--body)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right — actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-[var(--surface-2)]"
            style={{ color: "var(--muted)" }}
          >
            <Search size={17} />
          </Link>
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-[11px] font-semibold tracking-[0.07em] uppercase transition-colors"
              style={{ color: "var(--body)" }}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-[11px] font-semibold tracking-[0.07em] uppercase px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90"
              style={{ background: "var(--green)" }}
            >
              Get Started
            </Link>
          </div>
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--body)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 py-6 space-y-4"
          style={{ background: "var(--surface)", borderTop: "1.5px solid var(--border)" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[12px] font-semibold tracking-[0.07em] uppercase py-1"
              style={{ color: "var(--body)" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <Link href="/login" className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: "var(--body)" }}>
              Log In
            </Link>
            <Link href="/signup" className="text-[11px] font-semibold tracking-wide uppercase px-4 py-2 rounded-full text-white" style={{ background: "var(--green)" }}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
