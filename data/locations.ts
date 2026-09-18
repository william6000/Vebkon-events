export interface OfficeLocation {
  id: string;
  city: string;
  state: string;
  title: string;
  addressLines: string[];
  fullAddress: string;
  phone: string;
  email: string;
  mapsUrl: string;
  badge: string;
  capabilities: string[];
}

export interface OperationalState {
  name: string;
  code: string;
  keyHubs: string[];
  description: string;
}

export const operationalStates: OperationalState[] = [
  {
    name: "Uttar Pradesh",
    code: "UP",
    keyHubs: ["Lucknow", "Kanpur", "Varanasi", "Noida", "Agra", "Prayagraj"],
    description: "Extensive state-wide execution with our regional headquarters in Lucknow and rapid deployment teams."
  },
  {
    name: "Uttarakhand",
    code: "UK",
    keyHubs: ["Dehradun", "Haridwar", "Rishikesh", "Mussoorie", "Haldwani", "Roorkee"],
    description: "Home ground operations based out of Dehradun, specializing in corporate retreats, destination weddings, and summits."
  },
  {
    name: "Delhi NCR",
    code: "DL",
    keyHubs: ["New Delhi", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida"],
    description: "Frequent execution of large-scale corporate conventions, trade show stalls at Pragati Maidan & India Expo Mart."
  },
  {
    name: "Rajasthan",
    code: "RJ",
    keyHubs: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    description: "Royal destination weddings, heritage corporate galas, and automotive activation drives across key circuits."
  },
  {
    name: "Haryana",
    code: "HR",
    keyHubs: ["Gurugram", "Panipat", "Karnal", "Ambala", "Hisar"],
    description: "Industrial dealer meets, corporate campus town halls, and consumer retail activation setups."
  },
  {
    name: "Punjab",
    code: "PB",
    keyHubs: ["Chandigarh / Mohali", "Ludhiana", "Amritsar", "Jalandhar"],
    description: "High-energy brand launches, agricultural expos, and luxury celebration productions."
  },
  {
    name: "Gujarat",
    code: "GJ",
    keyHubs: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    description: "Industrial trade fair stalls, chemical & textile expo fabrications, and corporate annual meets at Mahatma Mandir."
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    id: "dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    title: "Dehradun Office",
    addressLines: [
      "East Tyagi Road",
      "Race Course",
      "Dehradun, Uttarakhand - 248001"
    ],
    fullAddress: "East Tyagi Road, Race Course, Dehradun, Uttarakhand",
    phone: "+91 97566 66623",
    email: "contact@vebkonevents.com",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=East+Tyagi+Road+Race+Course+Dehradun+Uttarakhand",
    badge: "Headquarters & Northern Hub",
    capabilities: [
      "Core Executive Planning",
      "In-House Design & 3D CAD Studio",
      "Hills & Valley Destination Logistics",
      "AV & Sound Equipment Depot"
    ]
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    title: "Lucknow Office",
    addressLines: [
      "Vijyant Khand",
      "Gomti Nagar",
      "Lucknow, Uttar Pradesh - 226010"
    ],
    fullAddress: "Vijyant Khand, Gomti Nagar, Lucknow, Uttar Pradesh",
    phone: "+91 97566 66623",
    email: "contact@vebkonevents.com",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Vijyant+Khand+Gomti+Nagar+Lucknow+Uttar+Pradesh",
    badge: "Regional Operations & Fabrication Hub",
    capabilities: [
      "Heavy Fabrication Workshop",
      "Central UP Deployment Fleet",
      "Truss & Stage Inventory Yard",
      "On-Ground Crew Coordination"
    ]
  }
];

