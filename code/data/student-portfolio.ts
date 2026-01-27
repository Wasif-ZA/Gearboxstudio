export const siteConfig = {
  name: "Alex Chen",
  tagline: "CS Student at UCLA • ML Enthusiast • Seeking Summer 2025 Internships",
  email: "alex@example.com",
  location: "Los Angeles, CA",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
    instagram: "https://instagram.com/alexchen",
  },
  siteUrl: "https://alexchen.dev",
  ogImage: "/og-image.png",
};

export const themeConfig = {
  // Neo-brutalism relies on high contrast. 
  // Primary accent used for main buttons, highlights.
  accent: {
    name: "Neo-Lime",
    hex: "#ccff00", 
    tw: "lime-400", 
  },
  // Secondary accent for badges, fun elements
  secondary: {
    name: "Neo-Purple",
    hex: "#a855f7",
    tw: "purple-500",
  },
  borderWidth: "3px", // Thick borders for neo-brutalism
  shadow: "5px 5px 0px 0px rgba(0,0,0,1)", // Hard shadow
};

export const aboutData = {
  photo: "/images/profile.jpg", // You'll need to add a placeholder image
  shortBio: "I build things that make people's lives easier and slightly more chaotic.",
  fullBio: `I'm a senior Computer Science student at UCLA with a passion for building accessible, high-performance web applications. I started coding when I was 15, trying to make a bot that would play RuneScape for me. It got banned, but I learned Python.

  Since then, I've moved on to slightly more legal endeavors. I love the intersection of design and engineering—making things that not only work well under the hood but look and feel great to use.`,
  interests: ["Rock climbing", "Coffee", "Mechanical keyboards", "Sci-Fi Novels"],
  education: {
    school: "University of California, Los Angeles",
    degree: "B.S. Computer Science",
    year: "2025",
    gpa: "3.8",
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Figma", category: "design" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Git", category: "tools" },
  ],
};

export const projectsData = [
  {
    slug: "ai-study-assistant",
    title: "AI Study Assistant",
    description: "A GPT-powered app that helps students study more effectively by generating quizzes from their notes.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", // Placeholder
    tags: ["React", "OpenAI", "Firebase", "Tailwind"],
    featured: true,
    year: "2024",
    role: "Solo Developer",
    timeline: "3 months",
    links: {
      live: "https://studyassist.app",
      github: "https://github.com/alex/study-assistant",
    },
    caseStudy: {
      context: "Students often struggle to manually create flashcards and quizzes from their lecture notes. I wanted to automate this process using the new GPT-4 API.",
      process: "I started by designing a simple interface in Figma that focused on speed. The drag-and-drop file upload was crucial. For the backend, I used Firebase Cloud Functions to handle the API requests securely.",
      solution: "The final app parses PDF and text files, sends chunks to OpenAI, and returns structured JSON for quizzes. users can then study in a 'flashcard' mode or 'quiz' mode.",
      result: "Launched on Product Hunt with 500+ upvotes. Currently has 200 active weekly users. Reduced my own study prep time by 60%.",
      images: [
        { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80", alt: "Dashboard View", caption: "The main dashboard where students manage their decks." },
        { src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80", alt: "Quiz Interface", caption: "The distraction-free quiz interface." },
      ],
      metrics: [
        { label: "Active Users", value: "2,400+" },
        { label: "Avg Session", value: "12 min" },
        { label: "Quizzes Generated", value: "15k+" },
      ],
    },
  },
  {
    slug: "eco-tracker",
    title: "EcoTracker",
    description: "Mobile-first PWA for tracking personal carbon footprint with gamification elements.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    tags: ["Vue.js", "Node.js", "MongoDB", "PWA"],
    featured: true,
    year: "2023",
    role: "Full Stack Developer",
    timeline: "2 months",
    links: {
      live: "https://ecotracker.demo",
      github: "https://github.com/alex/ecotracker",
    },
    caseStudy: {
      context: "Climate change is overwhelming. People want to help but don't know how their daily choices impact the environment.",
      process: "Researched carbon calculation APIs and found one that suited our needs. Built a prototype in a weekend hackathon, then spent 2 months refining the UI.",
      solution: "A cheerful, non-judgmental app that tracks transport and food choices. Uses simple sliders and toggles to input data quickly.",
      result: "Won 'Best Sustainability App' at LA-Hacks 2023. Open-sourced the calculation engine.",
      images: [],
      metrics: [
        { label: "Hackathon Win", value: "1st Place" },
        { label: "CO2 Saved", value: "2 Tons" },
      ],
    },
  },
  {
    slug: "retro-portfolio",
    title: "Retro Portfolio V1",
    description: "My previous portfolio site drawn in the style of Windows 95.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    tags: ["HTML", "CSS", "Vanilla JS"],
    featured: false,
    year: "2022",
    role: "Designer & Dev",
    timeline: "2 weeks",
    links: {
      live: "https://v1.alexchen.dev",
      github: "https://github.com/alex/portfolio-v1",
    },
    caseStudy: {
        context: "I wanted to learn raw DOM manipulation without frameworks.",
        process: "Studied old Windows UI guidelines. Recreated components using only CSS borders.",
        solution: "A fully functional desktop environment in the browser.",
        result: "Learned a lot about CSS positioning and z-index contexts.",
        images: [],
        metrics: [],
    }
  },
];

export const navigationItems = [
  { label: "Home", href: "/templates/students/student-neo-brutalism" },
  { label: "About", href: "/templates/students/student-neo-brutalism/about" },
  { label: "Projects", href: "/templates/students/student-neo-brutalism/projects" },
  { label: "Contact", href: "/templates/students/student-neo-brutalism/contact" },
];
