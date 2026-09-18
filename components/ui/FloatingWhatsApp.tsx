"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "919756666623";
  const defaultMessage = encodeURIComponent(
    "Hello Vebkon Events, I would like to discuss an event."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Instant WhatsApp chat"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Vebkon Events on WhatsApp"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <MessageCircle className="w-6 h-6 fill-current relative" />
        </span>

        <span
          className={`font-heading font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden whitespace-nowrap ${
            isHovered ? "max-w-xs opacity-100 pl-1" : "max-w-0 sm:max-w-xs opacity-0 sm:opacity-100"
          }`}
        >
          Let&apos;s talk
        </span>
      </a>
    </aside>
  );
};

