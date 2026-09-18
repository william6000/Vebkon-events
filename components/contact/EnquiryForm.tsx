"use client";

import React, { useState } from "react";
import { Send, CheckCircle, MessageCircle, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  eventType: string;
  eventCity: string;
  expectedDate: string;
  expectedAudience: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventCity?: string;
}

const eventTypes = [
  "Corporate Event",
  "Exhibition",
  "Brand Activation",
  "Fabrication",
  "Conference",
  "Product Launch",
  "Store Launch",
  "Wedding",
  "Stage / Production",
  "Other"
];

const budgetRanges = [
  "Below ₹1 Lakh",
  "₹1–3 Lakh",
  "₹3–5 Lakh",
  "₹5–10 Lakh",
  "₹10 Lakh+",
  "Discuss with Team"
];

export const EnquiryForm: React.FC<{ initialEventType?: string; className?: string }> = ({
  initialEventType = "Corporate Event",
  className = ""
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    eventType: initialEventType,
    eventCity: "",
    expectedDate: "",
    expectedAudience: "",
    budgetRange: "₹3–5 Lakh",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit contact number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type.";
    }

    if (!formData.eventCity.trim()) {
      newErrors.eventCity = "Please specify the event city or location.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build the formatted WhatsApp message as specified in requirements:
    const whatsappMessage = `Hello Vebkon Events,

I would like to discuss an event.

Name: ${formData.fullName.trim()}
Company: ${formData.company.trim() || "Not specified"}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim() || "Not specified"}
Event Type: ${formData.eventType}
City: ${formData.eventCity.trim()}
Date: ${formData.expectedDate || "Flexible / To be decided"}
Expected Audience: ${formData.expectedAudience.trim() || "To be discussed"}
Budget: ${formData.budgetRange}
Message: ${formData.message.trim() || "Let's connect to plan this event."}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919756666623?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp chat in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div
      className={`bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-surface-borderLight relative overflow-hidden ${className}`}
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-brand-lightred text-brand-red px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-3">
          Direct Project Enquiry
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-typography-main tracking-tight">
          Let&apos;s Build Your Next Event
        </h3>
        <p className="text-typography-muted text-sm mt-1.5">
          Fill in your event brief below. We validate your details and instantly connect you with our
          senior planning team on WhatsApp.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 px-6 text-center space-y-4 bg-[#F7F3EE] rounded-2xl border border-brand-red/20">
          <div className="w-16 h-16 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="font-heading text-xl font-bold text-typography-main">
            Connecting to Vebkon Events
          </h4>
          <p className="text-typography-muted text-sm max-w-md mx-auto">
            Your event brief has been compiled! WhatsApp will open directly to chat with our team at{" "}
            <strong className="text-typography-main font-semibold">+91 97566 66623</strong>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  email: "",
                  company: "",
                  eventType: "Corporate Event",
                  eventCity: "",
                  expectedDate: "",
                  expectedAudience: "",
                  budgetRange: "₹3–5 Lakh",
                  message: ""
                });
              }}
              className="text-xs font-semibold text-typography-main hover:text-brand-red underline py-2"
            >
              Submit Another Brief
            </button>
            <a
              href="https://wa.me/919756666623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp Again</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Vikram Singhania"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.fullName
                    ? "border-red-500 bg-red-50 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/50 focus:border-brand-red focus:bg-white"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.phone
                    ? "border-red-500 bg-red-50 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/50 focus:border-brand-red focus:bg-white"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@company.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 bg-red-50 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/50 focus:border-brand-red focus:bg-white"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* Company / Organisation */}
            <div>
              <label htmlFor="company" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Company / Organisation
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Enterprises"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Event Type <span className="text-brand-red">*</span>
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-colors"
              >
                {eventTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Event City */}
            <div>
              <label htmlFor="eventCity" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Event City <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="eventCity"
                name="eventCity"
                value={formData.eventCity}
                onChange={handleChange}
                placeholder="e.g. Dehradun, Lucknow, Delhi"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.eventCity
                    ? "border-red-500 bg-red-50 focus:border-red-600"
                    : "border-gray-200 bg-gray-50/50 focus:border-brand-red focus:bg-white"
                }`}
              />
              {errors.eventCity && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.eventCity}
                </p>
              )}
            </div>

            {/* Expected Date */}
            <div>
              <label htmlFor="expectedDate" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Expected Date
              </label>
              <input
                type="date"
                id="expectedDate"
                name="expectedDate"
                value={formData.expectedDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Expected Audience */}
            <div>
              <label htmlFor="expectedAudience" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Expected Audience Size
              </label>
              <input
                type="text"
                id="expectedAudience"
                name="expectedAudience"
                value={formData.expectedAudience}
                onChange={handleChange}
                placeholder="e.g. 200 - 500 Guests"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="budgetRange" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
                Estimated Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-colors"
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-typography-main uppercase tracking-wider mb-1.5">
              Event Brief / Specific Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the venue, stage size, technical rider, fabrication needs, or key objectives..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-crimson text-white py-4 rounded-xl font-heading font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current text-white" />
            <span>Send Enquiry to WhatsApp (+91 97566 66623)</span>
            <Send className="w-4 h-4" />
          </button>

          <p className="text-center text-xs text-typography-muted">
            Instant connection with senior event directors. Zero spam, complete confidentiality.
          </p>
        </form>
      )}
    </div>
  );
};

