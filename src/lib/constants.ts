export const business = {
  name: "Pana Plumbing",
  tagline: "Sydney's Trusted Local Plumber",
  slogan: "Reliable service, exceptional results",
  phone: "0481 157 857",
  email: "hello@panaplumbing.com.au",
  abn: "XX XXX XXX XXX",
  hours: "Mon-Fri 7:00am-6:00pm, Sat 8:00am-2:00pm, 24/7 Emergency",
  serviceRadius: "Greater Sydney Metropolitan Area",
  instagram: "https://www.instagram.com/panaplumbing/"
};

export const services = [
  { slug: "emergency-plumbing", title: "Emergency Plumbing", excerpt: "Fast same-day emergency plumbing support across Sydney.", icon: "Wrench" },
  { slug: "blocked-drains", title: "Blocked Drains", excerpt: "CCTV drain inspections and high-pressure jet clearing.", icon: "Droplets" },
  { slug: "hot-water-systems", title: "Hot Water Systems", excerpt: "Installations, repairs, and replacements for all major systems.", icon: "Flame" },
  { slug: "leak-detection-repairs", title: "Leak Detection & Repairs", excerpt: "Accurate leak tracing to minimize property damage.", icon: "Search" },
  { slug: "bathroom-kitchen-renovations", title: "Bathroom & Kitchen Renovations", excerpt: "Clean, compliant plumbing for renovations and fit-outs.", icon: "Hammer" },
  { slug: "gas-fitting", title: "Gas Fitting", excerpt: "Licensed gas fitting for residential and commercial properties.", icon: "Shield" },
  { slug: "backflow-prevention", title: "Backflow Prevention", excerpt: "Testing and maintenance to keep drinking water protected.", icon: "ShieldCheck" },
  { slug: "commercial-plumbing", title: "Commercial Plumbing", excerpt: "Ongoing maintenance and responsive support for businesses.", icon: "Building2" }
] as const;

export const suburbs = [
  "Sydney CBD",
  "Inner West",
  "Eastern Suburbs",
  "North Shore",
  "Northern Beaches",
  "Western Sydney",
  "Sutherland Shire",
  "Hills District"
];

export const testimonials = [
  { name: "Sarah M.", suburb: "Parramatta", quote: "Quick, professional, and transparent from start to finish." },
  { name: "James T.", suburb: "Bondi", quote: "Our hot water was fixed the same day. Great communication." },
  { name: "Nadia R.", suburb: "Chatswood", quote: "Reliable team and very clean workmanship on our renovation." }
];

export const trustBadges = ["Licensed", "Fully Insured", "24/7 Emergency", "Sydney Local"];
