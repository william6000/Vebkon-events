export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  deliverables: string[];
  keyFeatures: string[];
  scope: string;
  category: "Corporate" | "Fabrication" | "Exhibition" | "Production" | "Talent" | "Celebration";
  tagline: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    tagline: "High-impact summits, dealer meets & annual milestone galas",
    shortDescription: "Complete conceptualization, stage production, AV systems, and hospitality for corporate summits, awards nights, and annual meets.",
    fullDescription: "From executive leadership retreats to 5,000+ delegate annual conventions, Vebkon Events engineers seamless corporate gatherings. We align brand storytelling, synchronized audio-visual cues, keynote stages, and VIP protocol management into flawless corporate milestones.",
    icon: "Briefcase",
    category: "Corporate",
    deliverables: [
      "Annual general meetings & corporate conventions",
      "National & regional dealer meets",
      "Executive leadership summits",
      "Employee recognition & gala award nights",
      "Thematic gala dinners & evening entertainment"
    ],
    keyFeatures: [
      "End-to-end guest logistics & RSVP management",
      "Synchronized show-calling & stage cue management",
      "High-definition panoramic LED backdrops",
      "Brand-aligned interior environment design"
    ],
    scope: "Conceptualization, venue sourcing, stage architecture, show direction, delegate registration, hospitality, and live broadcasting."
  },
  {
    id: "fabrication-setups",
    slug: "fabrication-setups",
    title: "Fabrication Setups",
    tagline: "Engineered architectural structures & custom event decor",
    shortDescription: "In-house precision carpentry, metal fabrication, acrylic shaping, and dimensional stage structures engineered for safety and aesthetic dominance.",
    fullDescription: "Vebkon's dedicated fabrication team transforms raw blueprints into structural reality. With rigorous engineering standards, premium material finishes, and fast turnaround, we fabricate structural stages, immersive tunnels, entrance archways, and sculpted experiential zones.",
    icon: "Hammer",
    category: "Fabrication",
    deliverables: [
      "Architectural entry gates & experiential transit tunnels",
      "Custom 3D sculptural logos & brand totems",
      "Heavy-duty modular stage risers & podiums",
      "Thematic photo-opportunity backdrops & selfie zones",
      "Bespoke bar setups, VIP lounges & registration desks"
    ],
    keyFeatures: [
      "Precision metalwork & CNC wood routing",
      "High-grade vinyl wrap & spray-painted finishes",
      "Structural load stability certification",
      "Rapid on-site assembly & clean dismantling"
    ],
    scope: "Structural CAD modeling, in-workshop pre-fabrication, transport logistics, overnight on-ground rigging, and dismantling."
  },
  {
    id: "customised-stalls",
    slug: "customised-stalls",
    title: "Customised Stalls",
    tagline: "Award-winning exhibition booths engineered for commercial engagement",
    shortDescription: "3-side open, island, and mezzanine expo booths designed to command attention and maximize B2B customer dwell time.",
    fullDescription: "Exhibitions represent massive business investments where visibility directly dictates ROI. Vebkon creates bespoke trade exhibition stalls that outshine competitors across India's largest convention centres. We integrate interactive product demo counters, private meeting lounges, and impactful overhead branding.",
    icon: "LayoutGrid",
    category: "Exhibition",
    deliverables: [
      "Custom 2-side, 3-side open and island exhibition stalls",
      "Mezzanine floor & double-decker structural booths",
      "Interactive digital product demonstration counters",
      "Enclosed executive meeting lounges with acoustic isolation",
      "Fascia overhead signage & high-illumination branding towers"
    ],
    keyFeatures: [
      "3D photorealistic architectural rendering prior to fabrication",
      "Turnkey power distribution & lighting grid integration",
      "Display shelving, vitrines, and literature dispensers",
      "Full compliance with venue organizer guidelines"
    ],
    scope: "Trade show space analysis, 3D design, fabrication, electrical fittings, furniture leasing, hostess staffing, and post-expo handover."
  },
  {
    id: "conferences-meets",
    slug: "conferences-meets",
    title: "Conferences & Meets",
    tagline: "Frictionless academic, scientific & business delegate forums",
    shortDescription: "Multi-track audio-visual setups, simultaneous digital translation, breakout rooms, and seamless delegate registration desks.",
    fullDescription: "We deliver frictionless conference environments that foster knowledge exchange. From plenary halls seating thousands to intimate boardroom breakouts, our teams manage stage acoustics, multi-screen projection, confidence monitors, and digital attendee badging.",
    icon: "Users",
    category: "Corporate",
    deliverables: [
      "Multi-day national & international business conferences",
      "Academic symposia & medical continuing education forums",
      "Investor relations meets & financial briefings",
      "Interactive panel discussions & workshop breakout suites",
      "Digital poster sessions & research display halls"
    ],
    keyFeatures: [
      "Seamless speaker presentation switching & countdown timers",
      "Delegate badge printing & RFID check-in kiosks",
      "Live Q&A polling & digital audience interaction",
      "Hybrid video conferencing & multi-city live streams"
    ],
    scope: "Conference architecture, AV infrastructure, speaker green-room coordination, translation gear, delegate kits, and catering management."
  },
  {
    id: "branding-signage",
    slug: "branding-signage",
    title: "Branding & Signage",
    tagline: "High-visibility environmental branding & experiential wayfinding",
    shortDescription: "Large-format printing, fabric lightboxes, backlit acrylics, directional wayfinding, and comprehensive venue takeover branding.",
    fullDescription: "Transform blank spaces into powerful brand atmospheres. Vebkon plans and installs extensive venue branding solutions that maintain rigorous brand guidelines, vibrant color accuracy, and clean architectural alignment across airports, convention grounds, and corporate campuses.",
    icon: "Maximize",
    category: "Corporate",
    deliverables: [
      "Large-format UV & latex environmental graphics",
      "Frameless SEG fabric lightboxes & backlit totem displays",
      "Venue wayfinding, directional monoliths & parking signage",
      "Stage backdrops, media interview step-and-repeat walls",
      "Retail storefront takeovers & vehicle fleet wraps"
    ],
    keyFeatures: [
      "CMYK color matching strictly adhering to brand Pantone guides",
      "Wrinkle-free seamless fabric tensions systems",
      "Non-damaging mounting techniques for luxury hotel surfaces",
      "Weather-resistant outdoor substrates & anchoring"
    ],
    scope: "Site audits, surface dimension surveying, print production, overnight graphic installation, and damage-free removal."
  },
  {
    id: "product-launch-events",
    slug: "product-launch-events",
    title: "Product Launch Events",
    tagline: "Theatrical reveal mechanics & high-octane media unveilings",
    shortDescription: "Dramatic kabuki drops, motorized turntable stages, projection mapping, and choreographed light shows for unforgettable product debuts.",
    fullDescription: "A product launch occurs only once. Vebkon produces show-stopping reveal moments that capture media headlines and ignite consumer buzz. We combine dramatic stagecraft, hydraulic reveals, synchronized timecode lighting, and cinematic opening films to launch products with maximum authority.",
    icon: "Sparkles",
    category: "Production",
    deliverables: [
      "Automotive, consumer electronics & luxury good unveils",
      "Kabuki drop fabric systems & pneumatic curtain drops",
      "Motorized rotating car turntables & vehicle ramps",
      "3D projection mapping & custom CGI reveal sequences",
      "National press conference & media interaction setups"
    ],
    keyFeatures: [
      "Millisecond-accurate SMPTE timecode synchronized cues",
      "Live multi-camera broadcast capture & instant press clips",
      "Controlled atmospheric effects (cryo CO2 jets, low fog, sparks)",
      "Dedicated NDA rehearsal protocols & high-security lockouts"
    ],
    scope: "Creative concept, reveal mechanism engineering, scriptwriting, soundtrack scoring, rehearsal management, and media lounge execution."
  },
  {
    id: "store-launches",
    slug: "store-launches",
    title: "Store Launches",
    tagline: "Sensory retail inaugurations & high-footfall grand openings",
    shortDescription: "Red carpet storefront entrances, ribbon-cutting protocols, live entertainment, flash mobs, and neighborhood buzz campaigns.",
    fullDescription: "Turn retail openings into localized cultural spectacles. Vebkon coordinates storefront transformations, ceremonial ribbon cutting, VIP receptions, DJ booths, influencer walk-throughs, and consumer activation queues that ensure record opening-day footfalls.",
    icon: "Store",
    category: "Corporate",
    deliverables: [
      "Flagship retail store grand openings & outlet inaugurations",
      "Ribbon cutting ceremony protocols & ceremonial accessories",
      "Red carpet arrivals with velvet stanchions & media walls",
      "Acoustic storefront audio systems & festive archways",
      "Opening-day promotional giveaways & coupon activations"
    ],
    keyFeatures: [
      "Local municipal sound and crowd permit coordination",
      "Curated retail gift hampers & celebrity welcome protocols",
      "Continuous pedestrian engagement activities",
      "Professional photo & video recap content creation"
    ],
    scope: "Permit clearances, exterior floral/balloon/structural decor, audio systems, emcees, security staffing, and catering coordination."
  },
  {
    id: "sound-lighting",
    slug: "sound-lighting",
    title: "Sound & Lighting",
    tagline: "Concert-grade acoustics & intelligent architectural illumination",
    shortDescription: "JBL & d&b line array speaker systems, digital mixers, moving beam sharpy lights, stage washes, and atmospheric effects.",
    fullDescription: "Exceptional audio-visual execution is the invisible heartbeat of any event. Vebkon deploys industry-leading sound reinforcement systems calibrated to venue acoustic profiles, alongside computer-controlled intelligent lighting grids that transition from subtle cocktail ambience to electric concert euphoria.",
    icon: "Volume2",
    category: "Production",
    deliverables: [
      "Line array speaker systems tuned for large stadiums & ballrooms",
      "Wireless RF handheld, lapel, and headset microphone arrays",
      "Intelligent moving head spots, beams, and wash luminaires",
      "Architectural uplighting & heritage building facade washes",
      "Haze generators, low-lying cold fog & cold spark pyro fountains"
    ],
    keyFeatures: [
      "Digital sound engineers & certified acoustic consultants",
      "DMX lighting consoles programmed with show-specific chases",
      "Triple-redundant power backup & stabilized generators",
      "Zero acoustic feedback & crystalline vocal clarity"
    ],
    scope: "Acoustic assessment, power distribution, equipment delivery, sound engineering, lighting design, and live show operation."
  },
  {
    id: "stage-setups",
    slug: "stage-setups",
    title: "Stage Setups",
    tagline: "Structural heavy-duty trussing & panoramic LED canvas environments",
    shortDescription: "Aluminum box truss roof grids, outdoor ground-support stages, indoor tiered risers, and ultra-high-definition LED video displays.",
    fullDescription: "From open-air festival stages resisting heavy wind loads to ultra-wide curved LED indoor stages, Vebkon engineers structural stages of immense scale. We utilize certified Eurotruss aluminum, heavy-duty chain motors, and high-refresh-rate P2.6/P3.9 LED walls for crystal-clear visuals.",
    icon: "Tv",
    category: "Production",
    deliverables: [
      "Outdoor box truss roof systems & heavy weather-rated stages",
      "Curved & convex indoor ultra-fine pitch LED video walls",
      "Multi-tiered riser seating & orchestra pit podiums",
      "Safety stairs, ADA compliance access ramps, and stage railings",
      "Integrated under-stage quick-change green room tunnels"
    ],
    keyFeatures: [
      "Certified structural engineering load calculations",
      "High refresh rate LED tiles suitable for TV broadcast cameras",
      "Electric chain motor rigging with dual safety failsafes",
      "Velvet skirting, seamless carpet finishing, and cable management"
    ],
    scope: "Rigging inspection, structural assembly, LED video processor calibration, on-stage furniture styling, and safety certification."
  },
  {
    id: "manpower",
    slug: "manpower",
    title: "Manpower",
    tagline: "Trained ground coordinators, hospitable ushers & security supervisors",
    shortDescription: "Groomed, multilingual event coordinators, registration hostesses, VIP concierges, and certified crowd safety marshals.",
    fullDescription: "Human interaction defines the guest experience. Vebkon supplies thoroughly trained, impeccably groomed, and briefed on-ground personnel. From multilingual VIP ushers and registration desk staff to experienced queue marshals, our manpower brings warmth and discipline to every event.",
    icon: "UserCheck",
    category: "Talent",
    deliverables: [
      "Registration hostesses & badge distribution teams",
      "VIP guest hospitality & green room concierges",
      "Hall ushers, mic-runners & stage award presentation staff",
      "Bilingual crowd marshals & queue management crew",
      "Behind-the-scenes backline crew & fabrication assistants"
    ],
    keyFeatures: [
      "Pre-event brand grooming & operational role briefings",
      "Standardized corporate attire (suits, blazers, or ethnic wear)",
      "Dedicated on-site manpower supervisor for real-time adjustments",
      "Fully verified credentials and identity documentation"
    ],
    scope: "Recruitment, uniform styling, protocol training, shift scheduling, on-site supervision, and emergency replacement staffing."
  },
  {
    id: "models",
    slug: "models",
    title: "Models",
    tagline: "Professional runway, promotional & commercial brand ambassadors",
    shortDescription: "Experienced male and female fashion models, product presenters, and promotional brand ambassadors for launches and trade shows.",
    fullDescription: "Elevate your brand presence with vetted professional models. Whether demonstrating automotive features on an expo turntable, presenting product awards on a televised stage, or anchoring a high-fashion runway showcase, our talent embodies elegance and brand poise.",
    icon: "User",
    category: "Talent",
    deliverables: [
      "Fashion runway & haute couture apparel models",
      "Automotive & tech product presentation ambassadors",
      "Trade exhibition booth anchors & promotional hosts",
      "Print & video commercial talent for brand campaign shoots",
      "Award ceremony trophy presenters & dignitary escorts"
    ],
    keyFeatures: [
      "Comprehensive portfolios with unretouched polaroids",
      "Experience with high-pressure live broadcast environments",
      "Professional backstage hair, makeup & wardrobe coordination",
      "Contractual clearance for commercial social and press usage"
    ],
    scope: "Casting shortlists, auditioning, styling fittings, rehearsal coordination, call-sheet management, and talent logistics."
  },
  {
    id: "weddings",
    slug: "weddings",
    title: "Weddings & Celebrations",
    tagline: "Bespoke royal weddings, thematic sangeets & unforgettable receptions",
    shortDescription: "Luxury destination wedding production, heritage mandap architecture, floral art, thematic hospitality, and artist management.",
    fullDescription: "Vebkon approaches luxury weddings as once-in-a-lifetime experiential productions. We blend Indian cultural majesty with contemporary production precision. From royal palace transformations in Rajasthan to hillside scenic celebrations in Uttarakhand, we orchestrate every nuance.",
    icon: "Heart",
    category: "Celebration",
    deliverables: [
      "Monumental architectural mandap fabrication & floral artistry",
      "Thematic Sangeet stage design with dynamic LED choreography",
      "Baraat procession engineering with vintage cars & live brass bands",
      "Guest hospitality suites, personalized hampers & luggage logistics",
      "Curated cocktail evenings with experiential culinary bars"
    ],
    keyFeatures: [
      "Dedicated 24/7 bride & groom family concierge coordinators",
      "Acoustic calibration preventing hotel curfew disruptions",
      "Master floral designers sourcing rare seasonal blooms",
      "Custom stationery, thematic scent design, and ambient lighting"
    ],
    scope: "Destination hotel contracting, 3D theme design, vendor management, artist bookings, on-ground coordination, and keepsake film production."
  },
  {
    id: "celebrity-management",
    slug: "celebrity-management",
    title: "Celebrity Management",
    tagline: "Top-tier Bollywood actors, playback singers, standup comics & keynote icons",
    shortDescription: "Direct talent procurement, contract negotiation, VIP hospitality rider execution, security detailing, and seamless green-room logistics.",
    fullDescription: "Securing and managing high-profile talent requires seasoned relationships and airtight protocols. Vebkon coordinates directly with Bollywood celebrities, chart-topping musicians, comedians, and inspirational keynote speakers, ensuring zero-glitch performances and strict rider fulfillment.",
    icon: "Crown",
    category: "Talent",
    deliverables: [
      "Bollywood celebrity guest appearances & ribbon cuttings",
      "Live music bands, playback singers & international DJs",
      "Celebrity emcees, television hosts & stand-up comedians",
      "Inspirational keynote speakers & sports icons",
      "Armed security escorts, private motorcades & green room styling"
    ],
    keyFeatures: [
      "Direct artist management negotiations without excessive agency markup",
      "Precise technical & hospitality rider compliance verification",
      "VIP airport transfers, tarmac clearances, and discreet hotel check-ins",
      "Strict backstage crowd management & photo-op timekeeping"
    ],
    scope: "Talent curation, contract negotiation, travel bookings, backstage rider fulfillment, stage cue management, and VIP escorting."
  }
];

