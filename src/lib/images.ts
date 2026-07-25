// Photos sourced from the Pana Plumbing Instagram (@panaplumbing), stored locally in public/instagram/.

export const heroImage = {
  src: "/instagram/ig-12.jpg",
  alt: "Pana Plumbing ute on site at a Sydney job"
};

export const aboutImage = {
  src: "/instagram/ig-09.jpg",
  alt: "Pana Plumbing team member with a fully stocked tool bag"
};

export const contactImage = {
  src: "/instagram/ig-02.jpg",
  alt: "Outdoor sink and boiling water unit installed by Pana Plumbing"
};

export const galleryImages = [
  {
    src: "/instagram/ig-12.jpg",
    alt: "The Pana Plumbing ute on site",
    category: "On the Job"
  },
  {
    src: "/instagram/ig-06.jpg",
    alt: "CCTV drain camera inspection",
    category: "Blocked Drains"
  },
  {
    src: "/instagram/ig-11.jpg",
    alt: "Backflow prevention device installation",
    category: "Backflow"
  },
  {
    src: "/instagram/ig-07.jpg",
    alt: "New drainage pit installation",
    category: "Drainage"
  },
  {
    src: "/instagram/ig-10.jpg",
    alt: "Hot water system pipework repair",
    category: "Hot Water"
  },
  {
    src: "/instagram/ig-04.jpg",
    alt: "Kitchen mixer tap and double sink install",
    category: "Kitchen"
  },
  {
    src: "/instagram/ig-08.jpg",
    alt: "Shower head and mixer replacement",
    category: "Bathroom"
  },
  {
    src: "/instagram/ig-01.jpg",
    alt: "Outdoor tap repair and replacement",
    category: "Repairs"
  },
  {
    src: "/instagram/ig-02.jpg",
    alt: "Outdoor sink and boiling water unit installation",
    category: "Installations"
  },
  {
    src: "/instagram/ig-03.jpg",
    alt: "Commercial kitchenette and hot water upgrade",
    category: "Commercial"
  },
  {
    src: "/instagram/ig-13.jpg",
    alt: "LPG gas bottle and regulator work",
    category: "Gas"
  },
  {
    src: "/instagram/ig-09.jpg",
    alt: "Fully equipped for every job",
    category: "The Team"
  }
] as const;

export const serviceImages: Record<string, { src: string; alt: string }> = {
  "emergency-plumbing": {
    src: "/instagram/ig-12.jpg",
    alt: "Pana Plumbing ute responding to a job"
  },
  "blocked-drains": {
    src: "/instagram/ig-06.jpg",
    alt: "CCTV drain camera inspection"
  },
  "hot-water-systems": {
    src: "/instagram/ig-10.jpg",
    alt: "Hot water system pipework repair"
  },
  "leak-detection-repairs": {
    src: "/instagram/ig-01.jpg",
    alt: "Outdoor tap leak repair"
  },
  "bathroom-kitchen-renovations": {
    src: "/instagram/ig-04.jpg",
    alt: "Kitchen sink and mixer tap installation"
  },
  "gas-fitting": {
    src: "/instagram/ig-13.jpg",
    alt: "LPG gas bottle and regulator work"
  },
  "backflow-prevention": {
    src: "/instagram/ig-11.jpg",
    alt: "Backflow prevention device installation"
  },
  "commercial-plumbing": {
    src: "/instagram/ig-03.jpg",
    alt: "Commercial kitchenette plumbing upgrade"
  }
};
