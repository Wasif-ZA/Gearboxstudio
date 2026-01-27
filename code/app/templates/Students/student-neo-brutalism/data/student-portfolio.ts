export const siteConfig = {
  name: "Marcus Chen",
  tagline: "CS Student • Full Stack Developer • Seeking 2025 Internships",
  email: "marcus.chen@email.com",
  location: "Sydney, Australia",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/marcuschen",
    linkedin: "https://linkedin.com/in/marcus-chen-dev",
    twitter: "https://twitter.com/marcuschen_dev",
    instagram: "https://instagram.com/marcus.codes",
  },
  siteUrl: "https://marcuschen.dev",
  ogImage: "/og-image.png",
};

export const themeConfig = {
  // Neo-brutalism relies on high contrast. 
  // Primary accent used for main buttons, highlights.
  accent: {
    name: "Electric Blue",
    hex: "#0066ff",
    tw: "blue-600",
  },
  // Secondary accent for badges, fun elements
  secondary: {
    name: "Bright Yellow",
    hex: "#ffd000",
    tw: "yellow-400",
  },
  borderWidth: "3px",
  shadow: "5px 5px 0px 0px rgba(0,0,0,1)",
};

export const aboutData = {
  photo: "/images/profile.jpg",
  shortBio: "Full stack developer passionate about building products that make a difference. Currently hunting for internships.",
  fullBio: `I'm a final year Computer Science student with a passion for building software that solves real problems. I started coding in high school by modding video games, and now I'm focused on full stack web development and cloud infrastructure.

  I thrive in fast-paced environments and love the process of taking an idea from concept to production. Outside of coding, I'm into photography, playing guitar, and exploring new coffee shops. I'm actively looking for internship opportunities where I can contribute to meaningful projects.`,
  interests: ["Photography", "Guitar", "Coffee", "Gaming"],
  education: {
    school: "University of New South Wales",
    degree: "B.S. Computer Science",
    year: "2025",
    gpa: "3.7 GPA",
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Vue.js", category: "frontend" },
    { name: "TypeScript", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "Go", category: "languages" },
    { name: "Node.js", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Redis", category: "backend" },
    { name: "Docker", category: "tools" },
    { name: "AWS", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "Figma", category: "design" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "GraphQL", category: "backend" },
  ],
};

export const projectsData = [
  {
    slug: "taskflow-pro",
    title: "TaskFlow Pro",
    description: "A real-time collaborative project management tool with Kanban boards, time tracking, and team analytics.",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
    timeline: "4 months",
    links: {
      live: "https://taskflow-demo.vercel.app",
      github: "https://github.com/marcuschen/taskflow",
    },
    caseStudy: {
      context: "My university project team struggled with coordinating tasks across different tools. We needed a unified platform that combined task management with real-time collaboration.",
      process: "Built the backend with Node.js and Socket.io for real-time updates. Designed a PostgreSQL schema optimized for collaborative editing. Created a React frontend with drag-and-drop Kanban boards.",
      solution: "A full-featured project management app with real-time sync, customizable workflows, time tracking, and team performance dashboards.",
      result: "Adopted by 3 student organizations on campus. Helped improve team productivity by reducing context switching between tools.",
      images: [
        { src: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80", alt: "Kanban Board", caption: "Drag-and-drop Kanban interface with real-time updates." },
        { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", alt: "Analytics", caption: "Team performance analytics dashboard." },
      ],
      metrics: [
        { label: "Active Users", value: "200+" },
        { label: "Tasks Created", value: "5,000+" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
  },
  {
    slug: "devlink",
    title: "DevLink",
    description: "A developer-focused networking platform that matches programmers based on tech stack, interests, and collaboration styles.",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    tags: ["Next.js", "Prisma", "OpenAI", "Tailwind"],
    featured: true,
    year: "2024",
    role: "Lead Developer",
    timeline: "2 months",
    links: {
      live: "https://devlink-app.vercel.app",
      github: "https://github.com/marcuschen/devlink",
    },
    caseStudy: {
      context: "Finding collaborators for side projects is hard. LinkedIn feels too corporate, and Discord servers are noisy. Developers needed a dedicated space to find like-minded builders.",
      process: "Implemented a matching algorithm using OpenAI embeddings to compare developer profiles. Built a swipe-based interface for discovering potential collaborators.",
      solution: "A Tinder-like experience for developers where you can match, chat, and start collaborating on projects together.",
      result: "Featured in a university tech newsletter. Connected 150+ developers in the first month.",
      images: [
        { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80", alt: "Match Interface", caption: "Swipe to find your next collaborator." },
      ],
      metrics: [
        { label: "Matches Made", value: "300+" },
        { label: "Projects Started", value: "45" },
        { label: "User Rating", value: "4.8/5" },
      ],
    },
  },
  {
    slug: "code-review-bot",
    title: "CodeReview Bot",
    description: "An AI-powered GitHub bot that automatically reviews pull requests and suggests improvements using GPT-4.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["Python", "FastAPI", "OpenAI", "GitHub API"],
    featured: true,
    year: "2024",
    role: "Solo Developer",
    timeline: "6 weeks",
    links: {
      live: "https://github.com/apps/codereview-bot",
      github: "https://github.com/marcuschen/codereview-bot",
    },
    caseStudy: {
      context: "Code reviews are essential but time-consuming. Many PRs sit waiting for review, slowing down development velocity.",
      process: "Created a GitHub App that listens to PR events. Integrates with OpenAI's API to analyze code changes, identify potential issues, and suggest improvements.",
      solution: "A bot that automatically comments on PRs within minutes, catching bugs, suggesting optimizations, and enforcing code style.",
      result: "Installed by 25+ repositories. Reduced average time-to-first-review by 60%.",
      images: [
        { src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80", alt: "Bot Comments", caption: "AI-generated code review comments." },
      ],
      metrics: [
        { label: "PRs Reviewed", value: "1,200+" },
        { label: "Bugs Caught", value: "340" },
        { label: "Repos Using", value: "25" },
      ],
    },
  },
  {
    slug: "budget-tracker",
    title: "SpendWise",
    description: "Personal finance tracker with bank sync, spending insights, and budget goals for students.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tags: ["React Native", "Firebase", "Plaid", "Charts.js"],
    featured: false,
    year: "2023",
    role: "Mobile Developer",
    timeline: "2 months",
    links: {
      live: "https://spendwise-app.com",
      github: "https://github.com/marcuschen/spendwise",
    },
    caseStudy: {
      context: "Most budgeting apps are designed for adults with stable incomes. Students have irregular income and different spending patterns.",
      process: "Built a React Native app with Plaid integration for automatic bank syncing. Designed spending categories tailored to student life.",
      solution: "A mobile app that automatically categorizes expenses, sets smart budget limits, and sends alerts before overspending.",
      result: "Used by friends and classmates to stay on budget. Helped users save an average of $150/month.",
      images: [],
      metrics: [
        { label: "Active Users", value: "50+" },
        { label: "Avg Savings", value: "$150/mo" },
        { label: "App Rating", value: "4.6★" },
      ],
    },
  },
  {
    slug: "study-rooms",
    title: "StudyRooms",
    description: "Virtual study space platform with focus timers, ambient sounds, and video co-working sessions.",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    tags: ["Vue.js", "WebRTC", "Supabase", "Tailwind"],
    featured: false,
    year: "2023",
    role: "Full Stack Developer",
    timeline: "5 weeks",
    links: {
      live: "https://studyrooms.app",
      github: "https://github.com/marcuschen/studyrooms",
    },
    caseStudy: {
      context: "Remote studying can be isolating. The Pomodoro technique works better when you're accountable to others.",
      process: "Implemented WebRTC for peer-to-peer video. Built themed rooms with ambient sounds (coffee shop, library, rain). Added gamification with study streaks.",
      solution: "Join virtual study rooms, see others working, and stay focused together with shared timers and ambient audio.",
      result: "Peak of 30 concurrent users during exam season. Positive feedback from study groups.",
      images: [],
      metrics: [
        { label: "Study Hours", value: "2,500+" },
        { label: "Peak Users", value: "30" },
        { label: "Avg Session", value: "2.5 hrs" },
      ],
    },
  },
  {
    slug: "cli-weather",
    title: "WeatherCLI",
    description: "Beautiful command-line weather app with ASCII art forecasts and location detection.",
    thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    tags: ["Go", "OpenWeather API", "CLI"],
    featured: false,
    year: "2022",
    role: "Developer",
    timeline: "2 weeks",
    links: {
      github: "https://github.com/marcuschen/weather-cli",
    },
    caseStudy: {
      context: "I wanted a quick way to check the weather from my terminal without opening a browser.",
      process: "Built in Go for fast startup times. Uses OpenWeather API and renders ASCII art based on conditions.",
      solution: "A lightweight CLI tool that displays current weather and 5-day forecasts with colorful ASCII visualizations.",
      result: "Published on GitHub with 100+ stars. My first open source project to gain traction.",
      images: [],
      metrics: [
        { label: "GitHub Stars", value: "120+" },
        { label: "Downloads", value: "500+" },
      ],
    },
  },
];

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Testimonials for potential use
export const testimonialsData = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Professor, Computer Science",
    quote: "Marcus is one of the most motivated students I've seen. His capstone project showed exceptional technical depth and creativity.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "James Park",
    role: "Software Engineer, Tech Startup",
    quote: "Worked with Marcus on a hackathon project. His ability to quickly prototype and ship features is impressive.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer, Freelance",
    quote: "Great collaborator who understands design. Marcus bridges the gap between design and development seamlessly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

// Experience data for potential use
export const experienceData = [
  {
    title: "Software Engineering Intern",
    company: "TechStart Inc.",
    period: "Jan 2024 - Apr 2024",
    description: "Built internal tools using React and Node.js. Improved CI/CD pipeline reducing deployment time by 40%.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Teaching Assistant",
    company: "University CS Department",
    period: "Mar 2023 - Present",
    description: "Assist in teaching Data Structures & Algorithms. Host weekly office hours and grade assignments for 200+ students.",
    technologies: ["Python", "Java", "Algorithms"],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description: "Built websites and web apps for small businesses and startups. Managed 5+ client projects simultaneously.",
    technologies: ["Next.js", "WordPress", "Shopify", "Stripe"],
  },
];
