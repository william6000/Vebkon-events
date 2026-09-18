import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Award
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white pt-16 sm:pt-20 pb-12 border-t border-surface-borderDark relative overflow-hidden">
      {/* Background ambient red glow */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-crimson/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-surface-borderDark">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="relative block w-52 h-12" aria-label="Vebkon Events Home">
              <Image
                src="/logo/vebkon-logo.webp"
                alt="Vebkon Events"
                fill
                sizes="208px"
                className="object-contain object-left"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full-service Indian event management, brand activation, custom fabrication, and
              experiential production agency. Transforming visionary corporate and private
              milestones into unforgettable realities.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                <span>Pan-India Execution</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-brand-red" />
                <span>In-House Fabrication</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/vebkon_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-white flex items-center justify-center transition-colors"
                aria-label="Follow Vebkon Events on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919756666623"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="Chat with Vebkon Events on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:+919756666623"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-surface-dark border border-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="Call +91 97566 66623"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-brand-red pl-3">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Vebkon
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors">
                  Client Showcase
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Regional Hubs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-brand-red pl-3">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/services#corporate-events" className="hover:text-white transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/services#fabrication-setups" className="hover:text-white transition-colors">
                  Fabrication Setups
                </Link>
              </li>
              <li>
                <Link href="/services#customised-stalls" className="hover:text-white transition-colors">
                  Exhibition Stalls
                </Link>
              </li>
              <li>
                <Link href="/services#product-launch-events" className="hover:text-white transition-colors">
                  Product Launches
                </Link>
              </li>
              <li>
                <Link href="/services#sound-lighting" className="hover:text-white transition-colors">
                  Sound &amp; Lighting
                </Link>
              </li>
              <li>
                <Link href="/services#weddings" className="hover:text-white transition-colors">
                  Weddings &amp; Celebrations
                </Link>
              </li>
              <li>
                <Link href="/services#celebrity-management" className="hover:text-white transition-colors">
                  Celebrity Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-white border-l-2 border-brand-red pl-3">
              Offices
            </h3>
            <div className="space-y-4 text-xs text-gray-400">
              <div>
                <p className="font-semibold text-white text-sm mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  Dehradun Office
                </p>
                <p>East Tyagi Road, Race Course</p>
                <p>Dehradun, Uttarakhand</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=East+Tyagi+Road+Race+Course+Dehradun+Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-red hover:underline mt-1 font-semibold"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2 border-t border-surface-borderDark">
                <p className="font-semibold text-white text-sm mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  Lucknow Office
                </p>
                <p>Vijyant Khand, Gomti Nagar</p>
                <p>Lucknow, Uttar Pradesh</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vijyant+Khand+Gomti+Nagar+Lucknow+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-red hover:underline mt-1 font-semibold"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919756666623"
                  className="flex items-center gap-2 text-white font-heading font-bold text-sm hover:text-brand-red transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>+91 97566 66623</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} Vebkon Events. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/locations" className="hover:text-gray-300 transition-colors">
              Operational Hubs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

