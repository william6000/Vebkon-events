export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Corporate" | "Activation" | "Exhibition" | "Launch" | "Wedding" | "Production";
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  description: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "p1",
    slug: "annual-leadership-conclave",
    title: "National Leadership Conclave & Gala",
    category: "Corporate",
    categoryLabel: "Corporate Event",
    location: "New Delhi",
    year: "2024",
    image: "/projects/corporate-annual-conclave.svg",
    description: "Full production architecture, 40-foot panoramic LED backdrop, confidence monitors, and show direction for a 2,500-delegate corporate conclave.",
    metrics: [
      { label: "Delegates", value: "2,500+" },
      { label: "LED Canvas", value: "40ft Wide" },
      { label: "Turnaround", value: "36 Hours" }
    ],
    deliverables: [
      "Custom stage architecture with acoustic carpeting",
      "Live multi-camera broadcast switching",
      "Gala dinner decor and ambient lighting design",
      "Executive speaker presentation management"
    ]
  },
  {
    id: "p2",
    slug: "experiential-brand-activation-dome",
    title: "FMCG Experiential Mall Activation Dome",
    category: "Activation",
    categoryLabel: "Brand Activation",
    location: "Lucknow",
    year: "2024",
    image: "/projects/fmcg-brand-activation.svg",
    description: "Interactive dome structure with touch-enabled sampling kiosks, gamified consumer engagement, and influencer photo zones.",
    metrics: [
      { label: "Footfall", value: "45,000+" },
      { label: "Samples Distributed", value: "18,000+" },
      { label: "Cities Rolled Out", value: "4 Hubs" }
    ],
    deliverables: [
      "Modular geodetic dome fabrication",
      "Interactive digital sampling counters",
      "Brand ambassador recruitment & briefing",
      "Live consumer lead capture mechanics"
    ]
  },
  {
    id: "p3",
    slug: "mezzanine-trade-exhibition-booth",
    title: "Custom 3-Side Open Mezzanine Expo Pavilion",
    category: "Exhibition",
    categoryLabel: "Exhibition Stall",
    location: "Surat / Gandhinagar",
    year: "2024",
    image: "/projects/custom-exhibition-stall.svg",
    description: "Double-decker industrial exhibition stall featuring a private upper-level executive lounge, high-illumination fascia, and CNC-cut demo displays.",
    metrics: [
      { label: "Stall Size", value: "150 sq.m." },
      { label: "Structure", value: "Mezzanine Floor" },
      { label: "Setup Time", value: "24 Hours" }
    ],
    deliverables: [
      "Structural steel mezzanine fabrication",
      "Overhead rotating brand fascia totem",
      "Private air-conditioned business lounge",
      "Turnkey 3-phase electrical distribution"
    ]
  },
  {
    id: "p4",
    slug: "flagship-automotive-vehicle-unveil",
    title: "Flagship Automotive Launch & Unveil",
    category: "Launch",
    categoryLabel: "Launch Event",
    location: "Dehradun",
    year: "2023",
    image: "/projects/automotive-launch-event.svg",
    description: "Theatrical reveal mechanics utilizing synchronized motorized turntable, kabuki drop system, and timecode laser choreography.",
    metrics: [
      { label: "VIP Attendance", value: "600+" },
      { label: "Reveal Mechanism", value: "Turntable + Kabuki" },
      { label: "Media Coverage", value: "25+ Outlets" }
    ],
    deliverables: [
      "Heavy vehicle motorized turntable installation",
      "High-speed solenoid kabuki fabric drop",
      "Laser synchronization and cold pyro effects",
      "VIP red carpet media step-and-repeat lounge"
    ]
  },
  {
    id: "p5",
    slug: "royal-heritage-destination-wedding",
    title: "Royal Heritage Palace Mandap & Celebration",
    category: "Wedding",
    categoryLabel: "Wedding",
    location: "Jaipur / Udaipur",
    year: "2024",
    image: "/projects/luxury-destination-wedding.svg",
    description: "Bespoke destination wedding production incorporating handcrafted carved architectural pillars, 20,000 seasonal blooms, and acoustic zoning.",
    metrics: [
      { label: "Celebration Span", value: "3 Days" },
      { label: "Floral Stems", value: "20,000+" },
      { label: "Guests", value: "800+" }
    ],
    deliverables: [
      "Pillarless heritage mandap fabrication",
      "Sangeet LED stage with live band acoustic setup",
      "Curated baraat vintage motorcade & brass ensemble",
      "Thematic guest welcome gifts and hospitality desks"
    ]
  },
  {
    id: "p6",
    slug: "mega-arena-concert-production",
    title: "Mega Arena Concert Rigging & Audio Production",
    category: "Production",
    categoryLabel: "Stage Production",
    location: "Mohali / Chandigarh",
    year: "2023",
    image: "/projects/concert-truss-production.svg",
    description: "Full box-truss roof system, 24-box JBL VTX line array audio distribution, 60 moving sharpy heads, and comprehensive crowd control barriers.",
    metrics: [
      { label: "Audience", value: "15,000+" },
      { label: "Audio Output", value: "120 kW" },
      { label: "Moving Lights", value: "64 Fixtures" }
    ],
    deliverables: [
      "Certified Eurotruss box roof ground support",
      "Arena line array sound engineering & delay towers",
      "Intelligent DMX lighting console programming",
      "Heavy-duty mojo crowd control safety barricades"
    ]
  }
];

