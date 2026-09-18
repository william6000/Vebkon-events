/**
 * IMPORTANT NOTE:
 * The testimonials below are DEMO / PLACEHOLDER items designed for layout, visual rhythm,
 * and responsive presentation.
 * Replace with verified client testimonials before production launch.
 * They are not associated with any specific enterprise client.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  industry: string;
  city: string;
  quote: string;
  rating: number;
  eventType: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Marketing Manager",
    industry: "Consumer Electronics",
    city: "New Delhi",
    eventType: "Product Launch & Dealer Meet",
    rating: 5,
    quote: "The technical precision and staging for our regional dealer conclave was remarkable. From the 40-foot curved LED backdrop to seamless keynote switching, the Vebkon team executed without a single hitch."
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Brand Lead",
    industry: "FMCG Brand",
    city: "Lucknow",
    eventType: "Multi-City Brand Activation",
    rating: 5,
    quote: "Coordinating a simultaneous 6-city mall activation sounded daunting until Vebkon stepped in. Their fabrication quality remained identical across all locations, and footfall engagement exceeded our projections."
  },
  {
    id: "t3",
    name: "Rohan Kapoor",
    role: "Corporate Communications Lead",
    industry: "Financial Services",
    city: "Dehradun",
    eventType: "Annual Leadership Summit",
    rating: 5,
    quote: "Hosting our annual retreat in the foothills required complex AV rigging in a heritage property. Vebkon handled everything from sound insulation to VIP green rooms with utmost professionalism."
  },
  {
    id: "t4",
    name: "Neha Verma",
    role: "Retail Operations Head",
    industry: "Lifestyle & Apparel",
    city: "Jaipur",
    eventType: "Flagship Store Launch",
    rating: 5,
    quote: "The energy on opening day was electric. The custom entrance arch, lighting cues, and crowd management marshals ensured our retail inauguration made front-page regional headlines."
  },
  {
    id: "t5",
    name: "Kunal Malhotra",
    role: "Event Coordinator",
    industry: "Industrial Manufacturing",
    city: "Ahmedabad",
    eventType: "Exhibition Stall Fabrication",
    rating: 5,
    quote: "Our 3-side open expo booth at the trade fair drew constant crowds. The structural craftsmanship and mezzanine lounge fabrication were completed 12 hours ahead of the venue deadline."
  },
  {
    id: "t6",
    name: "Ananya Singh",
    role: "Senior Marketing Lead",
    industry: "Automotive & Mobility",
    city: "Chandigarh",
    eventType: "New Vehicle Unveil",
    rating: 5,
    quote: "The reveal sequence with synchronized cold pyro and turntable choreography was nothing short of cinematic. Vebkon understands how to make a stage feel world-class."
  }
];

