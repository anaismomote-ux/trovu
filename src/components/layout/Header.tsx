"use client";

import { useState } from "react";
import Link from "next/link";

const serviceCategories = [
  {
    name: "Beauty",
    items: ["Hair Styling", "Braids", "Barbering", "Makeup", "Nails", "Skincare", "Lashes & Brows"],
  },
  {
    name: "Wellness",
    items: ["Massage Therapy", "Wellness Coaching", "Yoga", "Holistic Therapy"],
  },
  {
    name: "Fitness",
    items: ["Personal Training", "Nutrition Coaching", "Fitness Classes"],
  },
  {
    name: "Creative",
    items: ["Photography", "Videography", "Content Creation"],
  },
  {
    name: "Education",
    items: ["Tutors", "Language Lessons", "Career Coaching"],
  },
  {
    name: "Home Services",
    items: ["Cleaning", "Pet Care", "Home Assistance"],
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full glass-header z-50 border-b border-outline-variant/30 h-20">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        {/* Logo + Nav */}
        <div className="flex items-center gap-12">
          <Link href="/" className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
            TROVU
          </Link>
          <div className="hidden md:flex gap-8 items-center">

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center gap-1">
                Services
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl editorial-shadow border border-outline-variant/20 p-8 grid grid-cols-3 gap-6 z-50">
                  {serviceCategories.map((cat) => (
                    <div key={cat.name}>
                      <p className="font-label-md text-label-md text-primary uppercase mb-3">{cat.name}</p>
                      <ul className="space-y-2">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/search?q=${encodeURIComponent(item)}`}
                              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gift-vouchers" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              Gift Vouchers
            </Link>
            <Link href="/become-a-provider" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              For Providers
            </Link>
            <Link href="/business" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              For Businesses
            </Link>
            <Link href="/affiliate" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              Affiliate Programme
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <Link href="/search" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            search
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/login" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              Login
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
          <Link href="/search" className="block font-label-md text-label-md text-on-surface-variant">Services</Link>
          <Link href="/gift-vouchers" className="block font-label-md text-label-md text-on-surface-variant">Gift Vouchers</Link>
          <Link href="/become-a-provider" className="block font-label-md text-label-md text-on-surface-variant">For Providers</Link>
          <Link href="/business" className="block font-label-md text-label-md text-on-surface-variant">For Businesses</Link>
          <Link href="/affiliate" className="block font-label-md text-label-md text-on-surface-variant">Affiliate Programme</Link>
          <div className="flex gap-4 pt-4 border-t border-outline-variant/30">
            <Link href="/login" className="font-label-md text-label-md text-on-surface-variant">Login</Link>
            <Link href="/signup" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
