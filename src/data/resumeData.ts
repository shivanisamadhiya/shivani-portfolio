// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Every fact here comes directly from Shivani's resume. Nothing invented.
// Replace the PLACEHOLDER_* values with real links when available.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Shivani Samadhiya",
  title: "Full Stack Developer",
  secondaryTitle: "Entry-Level Full Stack Developer / Software Engineer",
  email: "shivanisamadhiya229489@gmail.com",
  phone: "+91 9068384488",
  location: "Agra, Uttar Pradesh, India",
  resumeFile: "/Shivani_Samadhiya_Resume.pdf",
  linkedin: "PLACEHOLDER_LINKEDIN_URL",
  github: "PLACEHOLDER_GITHUB_URL",
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  college: "Faculty of Engineering & Technology, Agra College",
  period: "2022 – 2026",
  cgpa: "7.54/10",
  currentSgpa: "9.25",
};

export const professionalSummary =
  "Entry-level Full Stack Developer / Software Engineer with hands-on experience building and extending MERN applications using React.js, Node.js, Express.js, and MongoDB. Experienced in REST API development, JWT authentication, role-based access control, third-party integrations, responsive UI development, and deployment with Vercel and Render. Built integrations for Razorpay payments, AI chatbot functionality, and ZegoCloud real-time video communication. Strong foundation in JavaScript, TypeScript fundamentals, SQL/MySQL, DSA, OOP, Git/GitHub, and responsive development with Tailwind CSS and Bootstrap. Familiar with Docker, Kubernetes, and CI/CD fundamentals.";

export type SkillLevel = "core" | "fundamentals";

export interface SkillCategory {
  title: string;
  level: SkillLevel;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    level: "core",
    items: ["JavaScript", "TypeScript", "Java", "Python", "C", "SQL"],
  },
  {
    title: "Frontend",
    level: "core",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "Vite",
      "Responsive Web Design",
      "SEO Fundamentals",
    ],
  },
  {
    title: "Backend",
    level: "core",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control"],
  },
  {
    title: "Databases",
    level: "core",
    items: ["MongoDB", "MySQL", "SQL", "Relational Database Design"],
  },
  {
    title: "Integrations",
    level: "core",
    items: ["Razorpay Payment Gateway", "ZegoCloud Real-Time Video SDK", "AI Chatbot Integration"],
  },
  {
    title: "DevOps & Deployment",
    level: "fundamentals",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker (Fundamentals)",
      "Kubernetes (Fundamentals)",
      "CI/CD (Fundamentals)",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Core Concepts",
    level: "core",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "API Integration", "Authentication"],
  },
  {
    title: "Tools",
    level: "core",
    items: ["VS Code", "Postman", "Cloudinary"],
  },
];

export interface Project {
  id: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "prescripto",
    name: "Prescripto",
    category: "Healthcare Consultation & Appointment Platform",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Razorpay", "ZegoCloud"],
    description:
      "Extended an existing MERN-based doctor appointment platform by integrating online payments, an AI chatbot, and real-time video consultation while preserving the existing booking workflow.",
    highlights: [
      "Integrated Razorpay for consultation fees with backend order creation and payment verification.",
      "Implemented HMAC-SHA256 signature verification for payment authenticity.",
      "Integrated JWT-based authentication and role-aware access patterns across patient, doctor, and administrative workflows.",
      "Integrated an independently built AI-powered chatbot for patient queries and appointment-related interactions.",
      "Integrated ZegoCloud SDK for real-time video consultations.",
      "Worked across frontend, backend, and MongoDB architecture.",
      "Deployed services on Render.",
    ],
    links: [
      { label: "Live Frontend", url: "PLACEHOLDER_LIVE_FRONTEND_URL" },
      { label: "Admin Panel", url: "PLACEHOLDER_ADMIN_PANEL_URL" },
      { label: "Backend API", url: "PLACEHOLDER_BACKEND_API_URL" },
      { label: "GitHub", url: "PLACEHOLDER_GITHUB_REPO_URL" },
    ],
    featured: true,
  },
  {
    id: "northpeak",
    name: "NorthPeak Digital",
    category: "Responsive Agency Website",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Vite", "Vercel"],
    description:
      "Built a responsive one-page digital agency website with hero, services, testimonials, pricing, and validated contact form sections.",
    highlights: [
      "Designed responsive layouts for 360px, 768px, and 1440px breakpoints.",
      "Applied semantic HTML and on-page SEO fundamentals.",
      "Used reusable React components and TypeScript fundamentals.",
      "Used Vite for development and production bundling.",
      "Configured GitHub-based deployment workflow with Vercel.",
    ],
    links: [
      { label: "Live Website", url: "PLACEHOLDER_LIVE_WEBSITE_URL" },
      { label: "GitHub", url: "PLACEHOLDER_GITHUB_REPO_URL" },
    ],
  },
  {
    id: "kbc-quiz",
    name: "KBC-Style Quiz Game",
    category: "Python Desktop Application",
    technologies: ["Python", "Tkinter", "JSON"],
    description:
      "Built an interactive desktop quiz application inspired by popular game-show mechanics using Python and Tkinter.",
    highlights: [
      "Score tracking",
      "Lifelines",
      "Question progression",
      "Multiple game states",
      "Escalating difficulty",
      "Object-Oriented Programming",
      "Modular and maintainable codebase",
    ],
    links: [{ label: "GitHub", url: "PLACEHOLDER_GITHUB_REPO_URL" }],
  },
];

export const certifications: string[] = [
  "Generative AI — Certified by Google",
  "Maximize Productivity with AI Tools — Certified by Google",
  "TATA Crucible Campus Quiz 2025 — Certificate of Participation, Unstop",
  "Google Skills Diamond League Member — Earned 51 badges across technical learning paths",
  "Full Stack Web Development & DSA in Java — Certified by Apna College",
  "Adobe Hackathon — Certificate of Participation",
];

export interface Strength {
  title: string;
  description: string;
}

export const strengths: Strength[] = [
  { title: "Frontend Development", description: "Strong hands-on focus on responsive UI and frontend development." },
  { title: "REST API Integration", description: "Experience integrating and working with backend APIs." },
  { title: "Authentication", description: "Hands-on experience with JWT authentication and role-based access." },
  {
    title: "Feature Development",
    description: "Comfortable extending existing codebases and implementing new full-stack features.",
  },
  { title: "Debugging", description: "Experience debugging integration issues across application layers." },
  { title: "Git & GitHub", description: "Comfortable with version control and GitHub-based development workflows." },
];

export const aboutHighlights = [
  {
    title: "Full Stack Development",
    description: "Hands-on experience building and extending MERN applications.",
  },
  {
    title: "API & Authentication",
    description: "Experience with REST APIs, JWT authentication, and role-based access control.",
  },
  {
    title: "Modern Integrations",
    description: "Worked with Razorpay, ZegoCloud, and AI chatbot integration.",
  },
];

export const navItems = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];
