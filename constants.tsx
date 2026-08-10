
import React from 'react';
import { 
  Code2, 
  Cpu, 
  Layout, 
  Settings, 
  Lightbulb, 
  Search, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';
import { Project, Experience, SkillGroup, Education } from './types';

export const PROFILE = {
  name: "Abdul Mateen Hashmi",
  title: "Web Developer | Laravel, APIs & AI Automation",
  location: "Pakistan (Remote)",
  experience: "2+ Years",
  summary: "A results-driven Web Developer with hands-on experience in Laravel, REST APIs, and AI automation. Skilled in building scalable backend systems, integrating AI-powered services, and delivering clean, responsive user interfaces. Actively expanding expertise in AI tools and automation to create efficient, future-ready web solutions."
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend Development",
    skills: [
      { name: "Laravel", level: 90, description: "Building robust, scalable MVC applications and microservices." },
      { name: "PHP", level: 60, description: "Advanced application logic and server-side processing." },
      { name: "MySQL", level: 60, description: "Database design, optimization, and complex querying." }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "OpenAI API", level: 40, description: "Integrating LLMs for chatbots and content generation." },
      { name: "Python", level: 40, description: "Scripting for data processing and basic AI tasks." },
      { name: "Workflow Automation", level: 50, description: "Streamlining business processes using modern tools." }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "Next.js", level: 70, description: "Building modern, scalable React applications." },
      { name: "Tailwind CSS", level: 80, description: "Rapid UI development with utility-first styling." },
      { name: "TypeScript", level: 70, description: "Enhancing code quality with static typing." }
    ]
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git", level: 60, description: "Version control and collaborative development flows." },
      { name: "Docker", level: 30, description: "Containerizing environments for consistency." },
      { name: "REST APIs", level: 60, description: "Designing and consuming standard-compliant endpoints." }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "SK Financial (Remote)",
    role: "Web Developer",
    period: "July 2024 – Present",
    description: [
      "Architected Laravel-based systems for financial tracking.",
      "Implemented complex Authentication & Authorization protocols.",
      "Integrated AI-powered API services for automated reporting.",
      "Developed scalable backend features to handle growing user data."
    ],
    isCurrent: true
  },
  {
    company: "North Star Multinational Company (Remote)",
    role: "Junior Web Developer",
    period: "Apr 2023 – Aug 2023",
    description: [
      "Collaborated on feature development for enterprise web applications.",
      "Identified and resolved critical bugs in legacy systems.",
      "Participated in agile team meetings and code reviews.",
      "Assisted in UI updates using modern CSS frameworks."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Financial Dashboard System",
    problem: "Client needed real-time financial tracking with complex reporting and multi-user access control.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    role: "Software Engineer",
    outcome: "Built a secure financial dashboard handling 10K+ daily transactions with role-based access and automated reports.",
    image: "https://picsum.photos/seed/crm/800/600"
  },
  {
    id: "2",
    title: "Customer Support Portal",
    problem: "Support team was using multiple tools. Needed a unified portal for ticket management and customer communication.",
    stack: ["Laravel", "PHP", "Next.js", "PostgreSQL"],
    role: "Software Engineer",
    outcome: "Developed a full-stack support portal reducing ticket resolution time by 35% with real-time notifications.",
    image: "https://picsum.photos/seed/support/800/600"
  },
  {
    id: "3",
    title: "Inventory Management API",
    problem: "Multiple warehouse locations needed a centralized API for inventory sync and stock management.",
    stack: ["Laravel", "PHP", "Redis", "MySQL"],
    role: "Software Engineer",
    outcome: "Created a robust REST API handling 500K+ requests daily with caching layer for sub-100ms response times.",
    image: "https://picsum.photos/seed/inventory/800/600"
  },
  {
    id: "4",
    title: "E-Commerce Store",
    problem: "Startup needed a modern e-commerce platform with payment processing and inventory management.",
    stack: ["Next.js", "Laravel", "Stripe", "MySQL"],
    role: "Software Engineer",
    outcome: "Launched a high-performance store processing $2M+ in annual sales with 99.9% uptime.",
    image: "https://picsum.photos/seed/shop/800/600"
  },
  {
    id: "5",
    title: "Admin Dashboard",
    problem: "Company needed a comprehensive admin panel for managing users, content, and system analytics.",
    stack: ["Next.js", "Laravel", "TypeScript", "PostgreSQL"],
    role: "Software Engineer",
    outcome: "Built an interactive admin dashboard with real-time analytics used by 50+ team members daily.",
    image: "https://picsum.photos/seed/admin/800/600"
  },
  {
    id: "6",
    title: "Blog & Content Management",
    problem: "Content creators needed an easy-to-use CMS for publishing and managing blog posts with SEO optimization.",
    stack: ["Laravel", "PHP", "Next.js", "MySQL"],
    role: "Software Engineer",
    outcome: "Developed a feature-rich CMS enabling 20+ writers to publish content with built-in SEO tools and analytics.",
    image: "https://picsum.photos/seed/blog/800/600"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "BS Computer Science",
    school: "University of Poonch Rawalakot"
  },
  {
    degree: "FSC",
    school: "Government Boys Model Higher Secondary School Rera"
  }
];

export const SOFT_SKILLS = [
  { name: "Problem-solving", icon: <Settings className="w-5 h-5" />, description: "Analyzing complex issues to find efficient solutions." },
  { name: "Continuous Learning", icon: <Zap className="w-5 h-5" />, description: "Staying updated with latest tech and AI trends." },
  { name: "Attention to Detail", icon: <Search className="w-5 h-5" />, description: "Ensuring precision in code and user experiences." },
  { name: "Creative Thinking", icon: <Lightbulb className="w-5 h-5" />, description: "Approaching challenges with fresh perspectives." }
];
