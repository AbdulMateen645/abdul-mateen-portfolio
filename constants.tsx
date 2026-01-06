
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
      { name: "PHP", level: 85, description: "Advanced application logic and server-side processing." },
      { name: "MySQL", level: 80, description: "Database design, optimization, and complex querying." }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "OpenAI API", level: 75, description: "Integrating LLMs for chatbots and content generation." },
      { name: "Python", level: 70, description: "Scripting for data processing and basic AI tasks." },
      { name: "Workflow Automation", level: 80, description: "Streamlining business processes using modern tools." }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 75, description: "Crafting interactive and responsive user interfaces." },
      { name: "Tailwind CSS", level: 90, description: "Rapid UI development with utility-first styling." },
      { name: "TypeScript", level: 70, description: "Enhancing code quality with static typing." }
    ]
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git & GitHub", level: 85, description: "Version control and collaborative development flows." },
      { name: "Docker", level: 65, description: "Containerizing environments for consistency." },
      { name: "REST APIs", level: 95, description: "Designing and consuming standard-compliant endpoints." }
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
    title: "Enterprise CRM System",
    problem: "Inefficient customer management and fragmented data silos.",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    role: "Lead Developer",
    outcome: "Increased operational efficiency by 40% through centralized data and automated lead tracking.",
    image: "https://picsum.photos/seed/crm/800/600"
  },
  {
    id: "2",
    title: "AI Chatbot Integration",
    problem: "High customer support response times for recurring queries.",
    stack: ["OpenAI API", "PHP", "React"],
    role: "Backend Architect",
    outcome: "Reduced support tickets by 60% with an intelligent self-service AI bot.",
    image: "https://picsum.photos/seed/ai/800/600"
  },
  {
    id: "3",
    title: "Scalable API Service",
    problem: "Need for a high-concurrency data delivery system.",
    stack: ["PHP", "Laravel", "Redis"],
    role: "Developer",
    outcome: "Built a robust API handling 1M+ requests daily with sub-100ms response times.",
    image: "https://picsum.photos/seed/api/800/600"
  },
  {
    id: "4",
    title: "Workflow Automation Pipeline",
    problem: "Manual data entry leading to errors and time loss.",
    stack: ["Python", "Zapier", "Laravel"],
    role: "Automation Engineer",
    outcome: "Automated 20+ internal processes, saving 15 hours of manual work weekly.",
    image: "https://picsum.photos/seed/automation/800/600"
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
