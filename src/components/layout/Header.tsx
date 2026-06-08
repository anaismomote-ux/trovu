"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Discover", href: "/search" },
    { label: "Categories", href: "/categories" },
    { label: "Vouchers", href: "/gift-vouchers" },
    { label: "Become a Provider", href: "/become-a-provider" },
  ];

  return (
    <nav className="fixed top-0 w-full glass-header z-50 border-b border-outline-variant/30 h-20">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        {/* Logo + Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="font-headline-lg text-headline-lg text-on-background tracking-tight font-bold">
            TROVU
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-label-md text-label-md transition-colors duration-300 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <Link href="/search" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            search
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/login" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              Log In
            </Link>
            <Link href="/signup" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all">
              Sign Up
            </Link>
          </div>
          <button className="md:hidden material-symbols-outlined" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/30 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block font-label-md text-label-md text-on-surface-variant hover:text-primary">
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-outline-variant/30">
            <Link href="/login" className="font-label-md text-label-md text-on-surface-variant">Log In</Link>
            <Link href="/signup" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
