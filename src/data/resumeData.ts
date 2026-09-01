// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Every fact here comes directly from Shivani's resume. Nothing invented.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Shivani Samadhiya",
  title: "Full Stack Developer",
  secondaryTitle: "Entry-Level Full Stack Developer / Software Engineer",
  email: "shivanisamadhiya229489@gmail.com",
  phone: "+91 9068384488",
  location: "Agra, Uttar Pradesh, India",
  resumeFile: "/Shivani_Samadhiya_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/shivani-samadhiya-3ab768287",
  github: "https://github.com/shivanisamadhiya",
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  college: "Faculty of Engineering & Technology, Agra College",
  period: "2022 – 2026",
  cgpa: "7.54/10",
  currentSgpa: "9.25",
};

export interface SchoolEducation {
  level: string;
  school: string;
  period: string;
}

export const schoolEducation: SchoolEducation[] = [
  {
    level: "12th (Senior Secondary)",
    school: "St. Stephen Public School, Kalindi Vihar, Agra",
    period: "2021 – 2022",
  },
  {
    level: "10th (Secondary)",
    school: "R S Public Junior School, Semara Road, Khandoli, Agra",
    period: "2019 – 2020",
  },
];

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

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: "unified-mentor",
    role: "Fullstack Web Development Intern",
    company: "Unified Mentor Private Limited",
    period: "Dec 2025 – Mar 2026",
    location: "Remote",
    highlights: [
      "Built and deployed multiple responsive web-based projects, including a Calculator, a Weather Web App, a Landing Page, and a To-Do List application.",
      "Developed clean, responsive user interfaces focused on usability and modern UI/UX practices.",
      "Integrated a public API to fetch and display real-time weather data in the Weather Web App.",
      "Gained hands-on experience in frontend development, API integration, and building responsive, user-friendly web interfaces.",
    ],
  },
  {
    id: "codsoft",
    role: "Java Programming Intern",
    company: "CodSoft",
    period: "Sep 2024 – Oct 2024",
    location: "Remote",
    highlights: [
      "Completed a 4-week virtual internship in Java Programming, building 3 console-based Java applications.",
      "Number Guessing Game: Built a game where the player guesses a randomly generated number within limited trials, with real-time feedback on each guess.",
      "Student Grade Calculator: Built a program to calculate total marks and average percentage from subject-wise input, and assign grades accordingly.",
      "ATM Interface: Simulated an ATM system with classes for the machine and user's bank account, supporting withdrawal, deposit, and balance inquiry with input validation and transaction limits.",
      "Strengthened skills in Object-Oriented Programming (OOP), input validation, error handling, and console-based interface design.",
    ],
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
      { label: "Live Frontend", url: "https://prescripto-full-stack-frontend-345u.onrender.com" },
      { label: "Admin Panel", url: "https://prescripto-full-stack-admin-ltze.onrender.com" },
      { label: "Backend API", url: "https://prescripto-full-stack-backend-p3hr.onrender.com" },
      { label: "GitHub", url: "https://github.com/shivanisamadhiya/prescripto-full-stack" },
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
      { label: "Live Website", url: "https://northpeak-digital-beta-three.vercel.app/" },
      { label: "GitHub", url: "https://github.com/shivanisamadhiya/northpeak-digital" },
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
    links: [{ label: "GitHub", url: "https://github.com/shivanisamadhiya/KBC-GAME" }],
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

export const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

