export const siteConfig = {
  name: "Lachlan O'Connor",
  tagline: "CS Student at UNSW • Full Stack Dev • Hunting for Internships in Sydney",
  email: "lachlan@example.com",
  location: "Sydney, Australia",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/lachie-codes",
    linkedin: "https://linkedin.com/in/lachlan-oconnor",
    twitter: "https://twitter.com/lachie_dev",
    instagram: "https://instagram.com/lachie.odes",
  },
  siteUrl: "https://lachlan-codes.sydney",
  ogImage: "/og-image.png",
};

export const themeConfig = {
  // Neo-brutalism relies on high contrast. 
  // Primary accent used for main buttons, highlights.
  accent: {
    name: "Bondi Blue",
    hex: "#0095ff", // Bright tailored blue
    tw: "blue-500",
  },
  // Secondary accent for badges, fun elements
  secondary: {
    name: "Golden Wattle",
    hex: "#ffcc00",
    tw: "yellow-400",
  },
  borderWidth: "3px", // Thick borders for neo-brutalism
  shadow: "5px 5px 0px 0px rgba(0,0,0,1)", // Hard shadow
};

export const aboutData = {
  photo: "/images/profile.jpg", // You'll need to add a placeholder image
  shortBio: "Building software in sunny Sydney. I turn coffee into code and ideas into products.",
  fullBio: `I'm a final year Computer Science student at UNSW (University of New South Wales), deeply embedded in the Sydney tech scene. I started coding building scrapers for sneaker drops, and now I'm focused on scalable web applications.

  When I'm not debugging at a cafe in Surry Hills, you'll find me at Coogee beach or bouldering in St Peters. I love the Aussie startup ecosystem and aim to build tools that solve real local problems.`,
  interests: ["Surfing", "Flat Whites", "Bouldering", "AFL"],
  education: {
    school: "University of New South Wales (UNSW)",
    degree: "B.S. Computer Science",
    year: "2025",
    gpa: "82 WAM",
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "languages" },
    { name: "Go", category: "languages" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Figma", category: "design" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "AWS", category: "tools" },
  ],
};

export const projectsData = [
  {
    slug: "surf-check-ai",
    title: "SurfCheck AI",
    description: "Computer vision app that analyzes live surf cams to give accurate wave height reports for Sydney beaches.",
    thumbnail: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    tags: ["Python", "OpenCV", "React", "AWS"],
    featured: true,
    year: "2024",
    role: "Solo Developer",
    timeline: "3 months",
    links: {
      live: "https://surfcheck.sydney",
      github: "https://github.com/lachie/surf-check",
    },
    caseStudy: {
      context: "Existing surf reports are often inaccurate or delayed. I wanted real-time data for Bondi and Manly without checking the cams myself.",
      process: "Trained a YOLO model on thousands of frames from Coastalwatch cams to detect wave peaks. Built a serverless backend to process images every 15 minutes.",
      solution: "A mobile-first web app that gives a 'Shred Score' for every beach in Sydney's Eastern Suburbs.",
      result: "Used by 500+ local surfers. Featured in a local surf blog.",
      images: [
        { src: "https://images.unsplash.com/photo-1531722569936-825d3ad7235d?w=800&q=80", alt: "Dashboard", caption: "Live wave analysis dashboard." },
      ],
      metrics: [
        { label: "Daily Users", value: "500+" },
        { label: "Accuracy", value: "92%" },
        { label: "Cams Tracked", value: "12" },
      ],
    },
  },
  {
    slug: "hilly-eats",
    title: "Hilly Eats",
    description: "Crowdsourced guide to the best cheap eats in Surry Hills and Chippendale for uni students.",
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    tags: ["Next.js", "Supabase", "Maps API", "Tailwind"],
    featured: true,
    year: "2023",
    role: "Full Stack Developer",
    timeline: "1 month",
    links: {
      live: "https://hilly-eats.app",
      github: "https://github.com/lachie/hilly-eats",
    },
    caseStudy: {
      context: "Eating out in Sydney is expensive. Students needed a way to find reliable, budget-friendly food near campus.",
      process: "Scraped data from Google Maps and cross-referenced with student reviews. Built a map interface for easy discovery.",
      solution: "An interactive map filtering venues by 'Under $15', 'Happy Hour', and 'Student Deals'.",
      result: "Became a go-to resource for my cohort at UNSW.",
      images: [],
      metrics: [
        { label: "Venues", value: "120+" },
        { label: "Contributors", value: "45" },
      ],
    },
  },
  {
    slug: "opal-viz",
    title: "Opal Viz",
    description: "Data visualization tool for your Opal card travel history.",
    thumbnail: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    tags: ["D3.js", "React", "Node.js"],
    featured: false,
    year: "2022",
    role: "Frontend Dev",
    timeline: "3 weeks",
    links: {
      live: "https://opal-viz.demo",
      github: "https://github.com/lachie/opal-viz",
    },
    caseStudy: {
      context: "Transport for NSW allows you to download your travel history, but it's just a CSV file.",
      process: "Parsed the CSV data and used D3.js to visualize travel patterns across the Sydney train network.",
      solution: "Beautiful heatmaps showing your most frequented stations and total spend.",
      result: "A fun weekend project that taught me data viz fundamentals.",
      images: [],
      metrics: [],
    }
  },
];

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
