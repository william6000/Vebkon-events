"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Clients", href: "/clients" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappUrl =
    "https://wa.me/919756666623?text=Hello%20Vebkon%20Events%2C%20I%20would%20like%20to%20plan%20an%20event.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F3EE]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#E5E0D8]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="relative block w-40 sm:w-48 md:w-52 h-10 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
          aria-label="Vebkon Events Home"
        >
          <Image
            src="/logo/vebkon-logo.webp"
            alt="Vebkon Events"
            fill
            sizes="(max-width: 640px) 160px, 208px"
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors tracking-wide rounded-full ${
                  isActive
                    ? "text-brand-red font-semibold bg-white/70 shadow-sm"
                    : "text-typography-main hover:text-brand-red hover:bg-black/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Quick WhatsApp Trigger */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E5E0D8] bg-white text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors duration-200 shadow-sm"
            aria-label="Contact via WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          {/* Quick Call */}
          <a
            href="tel:+919756666623"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-typography-main border border-[#E5E0D8] bg-white rounded-full hover:border-brand-red hover:text-brand-red transition-colors shadow-sm"
            aria-label="Call +91 97566 66623"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>+91 97566 66623</span>
          </a>

          {/* Plan Your Event CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-crimson text-white px-5 py-2.5 rounded-full text-xs xl:text-sm font-heading font-bold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Plan Your Event</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#25D366] bg-white rounded-full border border-[#E5E0D8]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white text-typography-main border border-[#E5E0D8] hover:text-brand-red hover:border-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-30 transition-opacity lg:hidden duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#F7F3EE] shadow-2xl border-l border-[#E5E0D8] p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8]">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-typography-muted">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-typography-muted hover:text-brand-red"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-red text-white"
                        : "text-typography-main hover:bg-black/5 hover:text-brand-red"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${isActive ? "text-white" : "text-typography-muted"}`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer CTAs */}
          <div className="space-y-3 pt-6 border-t border-[#E5E0D8]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-crimson text-white py-3.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase shadow-md transition-colors"
            >
              <span>Plan Your Event</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919756666623"
              className="w-full flex items-center justify-center gap-2 bg-white text-typography-main border border-[#E5E0D8] py-3 rounded-xl font-semibold text-sm hover:border-brand-red transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>+91 97566 66623</span>
            </a>

            <p className="text-center text-xs text-typography-muted pt-2">
              Dehradun • Lucknow • Pan-India Execution
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

